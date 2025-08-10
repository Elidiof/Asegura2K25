import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header'; // Ajusta la ruta si es necesario
import Footer from '../components/Footer'; // Ajusta la ruta si es necesario

// Importa las librerías de PDF directamente en el script
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';
import 'pdfjs-dist/build/pdf.worker.entry';

export default function Daa() {
    const formRef = useRef(null);
    
    // Mueve toda la lógica del script original a un useEffect
    useEffect(() => {
        GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`;

        const form = formRef.current;
        if (!form) return;
        
        const submitBtn = form.querySelector('#submit-btn');
        const fillTestDataBtn = form.querySelector('#fill-test-data-btn');
        const statusMsg = form.querySelector('#status-message');
        const downloadArea = form.querySelector('#download-area');
        const fechaAccidenteInput = form.querySelector('#fechaAccidente');
        const horaAccidenteInput = form.querySelector('#horaAccidente');
        const gpsCoordsInput = form.querySelector('#gps_coords');
        const getGpsBtn = form.querySelector('#get-gps-btn');
        const clearGpsBtn = form.querySelector('#clear-gps-btn');
        const photoInput = form.querySelector('#photo-input');
        const photoPreviewsContainer = form.querySelector('#photo-previews');
        const impactCanvas = form.querySelector('#impactCanvas');
        const todayBtn = form.querySelector('#today-btn');
        const downloadConfirmModal = document.getElementById('download-confirm-modal');
        const closeConfirmModalBtn = document.getElementById('close-confirm-modal-btn');
        const errorModal = document.getElementById('error-modal');
        const closeErrorModalBtn = document.getElementById('close-error-modal-btn');

        let croquisDataUrl = '';
        let signatureADataUrl = '';
        let signatureBDataUrl = '';
        let photoDataUrls = [];
        let impactPointA = null;
        let impactPointB = null;
        let userImpactImage = null;

        function setDateTimeLimits() {
            const now = new Date();
            const today = now.toISOString().split('T')[0];
            fechaAccidenteInput.max = today;
            const updateHourLimit = () => {
                const todayRecalculated = new Date().toISOString().split('T')[0];
                if (fechaAccidenteInput.value === todayRecalculated) {
                    const nowForTime = new Date();
                    const hours = String(nowForTime.getHours()).padStart(2, '0');
                    const minutes = String(nowForTime.getMinutes()).padStart(2, '0');
                    horaAccidenteInput.max = `${hours}:${minutes}`;
                } else {
                    horaAccidenteInput.max = '';
                }
            };
            fechaAccidenteInput.addEventListener('input', updateHourLimit);
            updateHourLimit();
        }

        todayBtn.addEventListener('click', () => {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            fechaAccidenteInput.value = `${year}-${month}-${day}`;
            fechaAccidenteInput.dispatchEvent(new Event('input'));
        });

        getGpsBtn.addEventListener('click', async () => {
            if (!navigator.geolocation) {
                alert('La geolocalización no es compatible con este navegador.');
                return;
            }
            getGpsBtn.textContent = 'Obteniendo...';
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    gpsCoordsInput.value = `${lat.toFixed(6)}, ${lon.toFixed(6)}`;
                    
                    try {
                        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`);
                        if (!response.ok) throw new Error('Respuesta de red no fue ok.');
                        const data = await response.json();
                        
                        if (data.address) {
                            const addr = data.address;
                            const locationParts = [];
                            const street = addr.road || addr.pedestrian || addr.footway || '';
                            if (street) {
                                let streetPart = street;
                                if (addr.house_number) {
                                    streetPart += ' ' + addr.house_number;
                                }
                                locationParts.push(streetPart);
                            }
                            const city = addr.city || addr.town || addr.village || '';
                            if (city) {
                                let cityPart = '';
                                if (addr.postcode) {
                                    cityPart += addr.postcode + ' ';
                                }
                                cityPart += city;
                                locationParts.push(cityPart);
                            }
                            
                            form.querySelector('#lugar').value = locationParts.join(', ').trim();
                            form.querySelector('#pais').value = addr.country || 'España';
                        }
                    } catch (error) {
                        console.error("Error en la geolocalización inversa:", error);
                        alert("No se pudo obtener la dirección desde las coordenadas GPS.");
                    } finally {
                         getGpsBtn.textContent = 'Obtener Ubicación';
                    }
                },
                () => {
                    alert('No se pudo obtener la ubicación.');
                    getGpsBtn.textContent = 'Obtener Ubicación';
                }
            );
        });

        clearGpsBtn.addEventListener('click', () => { 
            gpsCoordsInput.value = ''; 
            form.querySelector('#lugar').value = '';
            form.querySelector('#pais').value = 'España';
        });

        photoInput.addEventListener('change', (event) => {
            const files = event.target.files;
            if (files) {
                for(const file of files) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        photoDataUrls.push(e.target.result);
                        renderPhotoPreviews();
                    };
                    reader.readAsDataURL(file);
                }
            }
        });

        function renderPhotoPreviews() {
            photoPreviewsContainer.innerHTML = '';
            photoDataUrls.forEach((dataUrl, index) => {
                const thumbContainer = document.createElement('div');
                thumbContainer.className = 'thumbnail-container';
                const img = document.createElement('img');
                img.src = dataUrl;
                img.className = 'w-full h-auto object-cover rounded-lg border-2 border-slate-200';
                const deleteBtn = document.createElement('button');
                deleteBtn.type = 'button';
                deleteBtn.textContent = 'X';
                deleteBtn.className = 'thumbnail-delete-btn';
                deleteBtn.onclick = () => {
                    photoDataUrls.splice(index, 1);
                    renderPhotoPreviews();
                };
                thumbContainer.appendChild(img);
                thumbContainer.appendChild(deleteBtn);
                photoPreviewsContainer.appendChild(thumbContainer);
            });
        }

        function setupChoiceButtons() {
            form.querySelectorAll('.btn-group').forEach(group => {
                const hiddenInput = form.querySelector(`#${group.dataset.targetInput}`);
                group.querySelectorAll('.btn-choice').forEach(button => {
                    button.addEventListener('click', () => {
                        group.querySelectorAll('.btn-choice').forEach(btn => btn.classList.remove('active'));
                        button.classList.add('active');
                        hiddenInput.value = button.dataset.value;
                        hiddenInput.dispatchEvent(new Event('change', { bubbles: true }));
                    });
                });
            });
        }
        
        function updateDynamicLabels() {
            const getDriverName = (vehicle) => {
                const tomadorInput = form.querySelector(`#tomador_${vehicle}`);
                const esTomador = tomadorInput ? tomadorInput.value === 'si' : true;
                const nombreAsegurado = form.querySelector(`#asegurado${vehicle.toUpperCase()}_nombre`).value;
                const nombreConductor = form.querySelector(`#conductor${vehicle.toUpperCase()}_nombre`).value;
                return esTomador ? nombreAsegurado : nombreConductor;
            };
            const nameA = getDriverName('a');
            const nameB = getDriverName('b');
            form.querySelector('#circunstancias-label-a').textContent = nameA || 'Vehículo A';
            form.querySelector('#signature-label-a').textContent = nameA || 'Firma Conductor A';
            form.querySelector('#circunstancias-label-b').textContent = nameB || 'Vehículo B';
            form.querySelector('#signature-label-b').textContent = nameB || 'Firma Conductor B';
        }

        ['aseguradoA_nombre', 'conductorA_nombre', 'aseguradoB_nombre', 'conductorB_nombre', 'tomador_a', 'tomador_b'].forEach(id => {
            const el = form.querySelector(`#${id}`);
            if (el) {
                const event = (el.tagName === 'INPUT' && el.type !== 'hidden') ? 'input' : 'change';
                el.addEventListener(event, updateDynamicLabels);
            }
        });
        
        const setupCanvas = (canvasId, clearButtonId) => {
            const canvas = document.getElementById(canvasId);
            const ctx = canvas.getContext('2d');
            let drawing = false;
            const resizeCanvas = () => {
                const parent = canvas.parentElement;
                if (!parent.clientWidth || !parent.clientHeight) return;
                const tempCanvas = document.createElement('canvas');
                const tempCtx = tempCanvas.getContext('2d');
                tempCanvas.width = canvas.width;
                tempCanvas.height = canvas.height;
                tempCtx.drawImage(canvas, 0, 0);
                const scale = window.devicePixelRatio;
                const { width, height } = parent.getBoundingClientRect();
                canvas.style.width = `${width}px`;
                canvas.style.height = `${height}px`;
                canvas.width = Math.floor(width * scale);
                canvas.height = Math.floor(height * scale);
                ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
                ctx.scale(scale, scale);
                ctx.lineWidth = 2;
                ctx.lineCap = 'round';
                ctx.strokeStyle = '#333';
            };
            const getPos = (e) => {
                const rect = canvas.getBoundingClientRect();
                const touch = e.touches ? e.touches[0] : null;
                return { x: (touch ? touch.clientX : e.clientX) - rect.left, y: (touch ? touch.clientY : e.clientY) - rect.top };
            };
            const startDrawing = (e) => { e.preventDefault(); drawing = true; const { x, y } = getPos(e); ctx.beginPath(); ctx.moveTo(x, y); };
            const draw = (e) => { if (!drawing) return; e.preventDefault(); const { x, y } = getPos(e); ctx.lineTo(x, y); ctx.stroke(); };
            const stopDrawing = () => { if(drawing) { drawing = false; ctx.closePath(); }};
            ['mousedown', 'touchstart'].forEach(evt => canvas.addEventListener(evt, startDrawing, { passive: false }));
            ['mousemove', 'touchmove'].forEach(evt => canvas.addEventListener(evt, draw, { passive: false }));
            ['mouseup', 'mouseout', 'touchend', 'touchcancel'].forEach(evt => canvas.addEventListener(evt, stopDrawing));
            if(clearButtonId) document.getElementById(clearButtonId).addEventListener('click', () => { ctx.clearRect(0, 0, canvas.width, canvas.height); });
            return { canvas, ctx, resizeCanvas };
        };

        const { canvas: croquisCanvas, ctx: croquisCtx, resizeCanvas: resizeCroquisCanvas } = setupCanvas('croquisCanvas', 'clearCroquis');
        const { canvas: signatureCanvas, ctx: signatureCtx, resizeCanvas: resizeSignatureCanvas } = setupCanvas('signatureCanvas', 'clearSignature');

        function setupModal(modalId, openBtnSelector, saveBtnId, onSave, onOpen, onCancel) {
            const modal = document.getElementById(modalId);
            const openBtns = document.querySelectorAll(openBtnSelector);
            const saveBtn = document.getElementById(saveBtnId);
            const cancelBtn = modal.querySelector(`#cancel-${modalId.split('-')[0]}-btn`);
            openBtns.forEach(btn => btn.addEventListener('click', (e) => {
                modal.classList.add('visible');
                if (onOpen) onOpen(e.currentTarget.dataset);
            }));
            if (saveBtn) saveBtn.addEventListener('click', () => {
                if (onSave) onSave();
                modal.classList.remove('visible');
            });
            if (cancelBtn) cancelBtn.addEventListener('click', () => {
                if (onCancel) onCancel();
                modal.classList.remove('visible');
            });
             modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    if (onCancel) onCancel();
                    modal.classList.remove('visible');
                }
            });
        }
        setupModal('croquis-modal', '#open-croquis-modal-btn', 'save-croquis-btn', () => {
            croquisDataUrl = croquisCanvas.toDataURL('image/png');
            document.getElementById('croquis-thumbnail').src = croquisDataUrl;
            document.getElementById('croquis-thumbnail-container').classList.remove('hidden');
        }, () => requestAnimationFrame(resizeCroquisCanvas));
        
        setupModal('signature-modal', '.open-signature-modal-btn', 'save-signature-btn', () => {
            const signer = document.getElementById('signature-modal').dataset.currentSigner;
            const dataUrl = signatureCanvas.toDataURL('image/png');
            const lowerSigner = signer.toLowerCase();
            if (signer === 'A') signatureADataUrl = dataUrl;
            else signatureBDataUrl = dataUrl;
            document.getElementById(`signature-thumbnail-${lowerSigner}`).src = dataUrl;
            document.getElementById(`signature-thumbnail-container-${lowerSigner}`).classList.remove('hidden');
            document.getElementById(`signature-placeholder-${lowerSigner}`).classList.add('hidden');
        }, (dataset) => {
            const modal = document.getElementById('signature-modal');
            modal.dataset.currentSigner = dataset.signer;
            const driverName = document.getElementById(`signature-label-${dataset.signer.toLowerCase()}`).textContent;
            document.getElementById('signature-modal-title').textContent = `Firma de ${driverName}`;
            signatureCtx.clearRect(0, 0, signatureCanvas.width, signatureCanvas.height); 
            requestAnimationFrame(resizeSignatureCanvas);
        });

        const impactModal = document.getElementById('impact-modal');
        const impactCtx = impactCanvas.getContext('2d');
        let currentImpactPoint = null;
        let currentImpactVehicle = null;

        async function loadImpactImage() {
            try {
                const imageUrl = 'colision.png'; 
                userImpactImage = new Image();
                userImpactImage.crossOrigin = "Anonymous"; 
                userImpactImage.onload = () => {
                    console.log("Imagen de colisión cargada correctamente.");
                    drawImpactVehicle(); 
                };
                userImpactImage.onerror = () => {
                     console.error("Error al cargar la imagen de colisión desde la URL.");
                }
                userImpactImage.src = imageUrl;
            } catch (error) {
                console.error("Error en la función loadImpactImage:", error);
            }
        }
        
        function drawImpactVehicle() {
            if (!userImpactImage || !userImpactImage.complete || userImpactImage.naturalWidth === 0) {
                impactCtx.clearRect(0, 0, impactCanvas.width, impactCanvas.height);
                impactCtx.font = '12px sans-serif';
                impactCtx.fillStyle = '#666';
                impactCtx.textAlign = 'center';
                impactCtx.fillText('Error al mostrar la imagen', impactCanvas.width / 2, impactCanvas.height / 2);
                return;
            };
            impactCtx.clearRect(0, 0, impactCanvas.width, impactCanvas.height);
            impactCtx.drawImage(userImpactImage, 0, 0, impactCanvas.width, impactCanvas.height);
            if (currentImpactPoint) {
                impactCtx.strokeStyle = 'red';
                impactCtx.lineWidth = 3;
                impactCtx.font = 'bold 24px sans-serif';
                impactCtx.fillStyle = 'red';
                impactCtx.fillText('X', currentImpactPoint.x - 8, currentImpactPoint.y + 8);
            }
        }
        
        setupModal('impact-modal', '.open-impact-modal-btn', 'save-impact-btn', 
            () => { // onSave
                if (currentImpactVehicle === 'A') {
                    impactPointA = currentImpactPoint ? { ...currentImpactPoint } : null;
                    document.getElementById('impact-point-a').value = impactPointA ? 'selected' : '';
                } else {
                    impactPointB = currentImpactPoint ? { ...currentImpactPoint } : null;
                    document.getElementById('impact-point-b').value = impactPointB ? 'selected' : '';
                }
                updateImpactThumbnail(currentImpactVehicle);
            },
            (dataset) => { // onOpen
                currentImpactVehicle = dataset.vehicle;
                const existingData = currentImpactVehicle === 'A' ? impactPointA : impactPointB;
                currentImpactPoint = existingData ? { ...existingData } : null;
                const parent = impactCanvas.parentElement;
                impactCanvas.width = parent.clientWidth;
                impactCanvas.height = parent.clientHeight;
                drawImpactVehicle();
            },
            () => { // onCancel
                currentImpactPoint = null;
                currentImpactVehicle = null;
            }
        );

        impactCanvas.addEventListener('click', (e) => {
            const rect = impactCanvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            currentImpactPoint = { x, y };
            drawImpactVehicle();
        });

        function updateImpactThumbnail(vehicle) {
            const thumbContainer = document.getElementById(`impact-thumbnail-container-${vehicle.toLowerCase()}`);
            const thumbImg = document.getElementById(`impact-thumbnail-${vehicle.toLowerCase()}`);
            const impactData = vehicle === 'A' ? impactPointA : impactPointB;
            if (impactData && userImpactImage && userImpactImage.complete && userImpactImage.naturalWidth !== 0) {
                const tempCanvas = document.createElement('canvas');
                const tempCtx = tempCanvas.getContext('2d');
                tempCanvas.width = 193;
                tempCanvas.height = 136;
                tempCtx.drawImage(userImpactImage, 0, 0, tempCanvas.width, tempCanvas.height);
                const scaledX = (impactData.x / impactCanvas.width) * tempCanvas.width;
                const scaledY = (impactData.y / impactCanvas.height) * tempCanvas.height;
                tempCtx.fillStyle = 'red';
                tempCtx.font = 'bold 20px sans-serif';
                tempCtx.fillText('X', scaledX - 7, scaledY + 7);
                thumbImg.src = tempCanvas.toDataURL();
                thumbContainer.classList.remove('hidden');
            } else {
                thumbContainer.classList.add('hidden');
            }
        }

        const circunstancias = ["Estaba estacionado / parado", "Salía de un estacionamiento / abriendo puerta", "Iba a estacionar", "Salía de un aparcamiento, de un lugar privado, de un camino de tierra", "Entraba en un aparcamiento, en un lugar privado, en un camino de tierra", "Entraba en una plaza de sentido giratorio", "Circulaba por una plaza de sentido giratorio", "Colisionó por detrás, circulando en el mismo sentido y en el mismo carril", "Circulaba en el mismo sentido y en carril diferente", "Cambiaba de carril", "Adelantaba", "Giraba a la derecha", "Giraba a la izquierda", "Daba marcha atrás", "Invadía la parte reservada a la circulación en sentido inverso", "Venía de la derecha (en un cruce)", "No respetó la señal de preferencia o semáforo en rojo"];
        const listContainer = form.querySelector('#circunstancias-list');
        circunstancias.forEach((text, index) => {
            const value = index + 1;
            const item = document.createElement('div');
            item.className = 'grid grid-cols-[auto,1fr,auto] gap-x-4 md:gap-x-8 items-center py-1 border-b border-slate-100';
            item.innerHTML = `
                <div class="text-center"><input type="checkbox" name="circunstanciasA" value="${value}" class="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"></div>
                <div class="text-sm text-center">${value}. ${text}</div>
                <div class="text-center"><input type="checkbox" name="circunstanciasB" value="${value}" class="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500"></div>
            `;
            listContainer.appendChild(item);
        });
        listContainer.addEventListener('change', () => {
            form.querySelector('#contador-a').textContent = form.querySelectorAll('input[name="circunstanciasA"]:checked').length;
            form.querySelector('#contador-b').textContent = form.querySelectorAll('input[name="circunstanciasB"]:checked').length;
        });

        function setupConditionalFields(inputId, fieldsContainerId, showOnValue) {
            const input = form.querySelector(`#${inputId}`);
            input.addEventListener('change', (e) => {
                const showFields = e.target.value === showOnValue;
                const container = form.querySelector(`#${fieldsContainerId}`);
                container.classList.toggle('hidden', !showFields);
                container.querySelectorAll('input, textarea').forEach(field => {
                    field.required = showFields;
                });
                updateDynamicLabels();
            });
        }
        setupConditionalFields('tomador_a', 'conductor_a_fields', 'no');
        setupConditionalFields('tomador_b', 'conductor_b_fields', 'no');
        setupConditionalFields('remolque_a', 'remolque_a_fields', 'si');
        setupConditionalFields('remolque_b', 'remolque_b_fields', 'si');
        
        const splitFullName = (fullName) => {
            if (!fullName) return { nombre: '', apellidos: '' };
            const parts = fullName.trim().split(' ').filter(Boolean);
            if (parts.length <= 2) {
                return { nombre: parts[0] || '', apellidos: parts.slice(1).join(' ') };
            }
            const apellidos = parts.slice(-2).join(' ');
            const nombre = parts.slice(0, -2).join(' ');
            return { nombre, apellidos };
        };
        function getFormDataObject() {
            const formData = new FormData(form);
            const data = {};
            for (let [key, value] of formData.entries()) { data[key] = value; }
            const aseguradoA_split = splitFullName(data.aseguradoA_nombre);
            const conductorA_split = splitFullName((data.tomador_a === 'no' ? data.conductorA_nombre : data.aseguradoA_nombre));
            const aseguradoB_split = splitFullName(data.aseguradoB_nombre);
            const conductorB_split = splitFullName((data.tomador_b === 'no' ? data.conductorB_nombre : data.aseguradoB_nombre));
            return {
                fecha: data.fechaAccidente, hora: data.horaAccidente, lugar: data.lugar, pais: data.pais, gps: data.gps_coords, victimas: data.victimas, danos_materiales: data.danos_materiales, testigos: data.testigos,
                aseguradoA: { nombre: aseguradoA_split.nombre, apellidos: aseguradoA_split.apellidos, movil: data.aseguradoA_movil, email: data.aseguradoA_email },
                vehiculoA: { marca: data.vehiculoA_marca, matricula: data.vehiculoA_matricula, remolque: data.remolqueA_matricula || '', remolque_aseguradora: data.remolqueA_aseguradora || '' },
                aseguradoraA: { nombre: data.aseguradoraA_nombre, poliza: data.polizaA },
                conductorA: { nombre: conductorA_split.nombre, apellidos: conductorA_split.apellidos },
                danosA: data.danosA, observacionesA: data.observacionesA,
                aseguradoB: { nombre: aseguradoB_split.nombre, apellidos: aseguradoB_split.apellidos, movil: data.aseguradoB_movil, email: data.aseguradoB_email },
                vehiculoB: { marca: data.vehiculoB_marca, matricula: data.vehiculoB_matricula, remolque: data.remolqueB_matricula || '', remolque_aseguradora: data.remolqueB_aseguradora || '' },
                aseguradoraB: { nombre: data.aseguradoraB_nombre, poliza: data.polizaB },
                conductorB: { nombre: conductorB_split.nombre, apellidos: conductorB_split.apellidos },
                danosB: data.danosB, observacionesB: data.observacionesB, circunstanciasA: formData.getAll('circunstanciasA'), circunstanciasB: formData.getAll('circunstanciasB'),
            };
        }
        
        function fillFormForTesting() {
            form.querySelector('#fechaAccidente').value = '2025-08-10';
            form.querySelector('#horaAccidente').value = '11:43';
            form.querySelector('#pais').value = 'España';
            form.querySelector('#lugar').value = 'Calle Corredera de Capuchinos, Andújar';
            form.querySelector('#gps_coords').value = '38.039, -4.051';
            form.querySelector('#testigos').value = 'Rafael Nadal, Manacor';
            form.querySelector('.btn-group[data-target-input="victimas"] button[data-value="no"]').click();
            form.querySelector('.btn-group[data-target-input="danos_materiales"] button[data-value="si"]').click();
            
            // VEHÍCULO A
            form.querySelector('#aseguradoA_nombre').value = 'Carlos Alcaraz';
            form.querySelector('#aseguradoA_movil').value = '611223344';
            form.querySelector('#aseguradoA_email').value = 'carlos@email.com';
            form.querySelector('#vehiculoA_marca').value = 'BMW X5';
            form.querySelector('#vehiculoA_matricula').value = '2345MUR';
            form.querySelector('.btn-group[data-target-input="remolque_a"] button[data-value="si"]').click();
            form.querySelector('#remolqueA_matricula').value = 'R9876BBB';
            form.querySelector('#remolqueA_aseguradora').value = 'Remolques Seguros';
            form.querySelector('#aseguradoraA_nombre').value = 'Seguros Campeón';
            form.querySelector('#polizaA').value = 'POLIZA-CA-001';
            form.querySelector('.btn-group[data-target-input="tomador_a"] button[data-value="no"]').click();
            form.querySelector('#conductorA_nombre').value = 'Juan Carlos Ferrero';
            form.querySelector('#danosA').value = 'Aleta delantera derecha rozada.';
            form.querySelector('#observacionesA').value = 'El vehículo B no señalizó la maniobra.';
            
            // VEHÍCULO B
            form.querySelector('#aseguradoB_nombre').value = 'Fernando Alonso';
            form.querySelector('#aseguradoB_movil').value = '655667788';
            form.querySelector('#aseguradoB_email').value = 'fernando@email.com';
            form.querySelector('#vehiculoB_marca').value = 'Aston Martin DBX';
            form.querySelector('#vehiculoB_matricula').value = '9876OVI';
            form.querySelector('.btn-group[data-target-input="remolque_b"] button[data-value="si"]').click();
            form.querySelector('#remolqueB_matricula').value = 'R1234XYZ';
            form.querySelector('#remolqueB_aseguradora').value = 'Seguros de Carga';
            form.querySelector('#aseguradoraB_nombre').value = 'Aseguradora Veloz';
            form.querySelector('#polizaB').value = 'POLIZA-FA-002';
            form.querySelector('.btn-group[data-target-input="tomador_b"] button[data-value="no"]').click();
            form.querySelector('#conductorB_nombre').value = 'Pedro de la Rosa';
            form.querySelector('#danosB').value = 'Retrovisor izquierdo roto.';
            form.querySelector('#observacionesB').value = 'Estaba saliendo del aparcamiento.';
            
            // Resto de datos
            form.querySelector('input[name="circunstanciasA"][value="9"]').checked = true;
            form.querySelector('input[name="circunstanciasB"][value="4"]').checked = true;
            form.querySelector('#confirmacionA').checked = true;
            form.querySelector('#confirmacionB').checked = true;
            impactPointA = {x: 170, y: 50};
            impactPointB = {x: 25, y: 70};
            form.querySelector('#impact-point-a').value = 'selected';
            form.querySelector('#impact-point-b').value = 'selected';
            updateImpactThumbnail('A');
            updateImpactThumbnail('B');

            // DIBUJO DEL CROQUIS DE PRUEBA
            const { width: cw, height: ch } = croquisCanvas;
            croquisCtx.clearRect(0, 0, cw, ch);
            croquisCtx.strokeStyle = '#333';
            croquisCtx.lineWidth = 1.5;
            croquisCtx.strokeRect(cw * 0.1, ch * 0.4, cw * 0.8, ch * 0.2);
            croquisCtx.strokeStyle = 'blue';
            croquisCtx.strokeRect(cw * 0.3, ch * 0.42, 80, 40);
            croquisCtx.fillText('A', cw * 0.3 + 35, ch * 0.42 + 25);
            croquisCtx.strokeStyle = 'green';
            croquisCtx.strokeRect(cw * 0.5, ch * 0.48, 80, 40);
            croquisCtx.fillText('B', cw * 0.5 + 35, ch * 0.48 + 25);

            croquisDataUrl = croquisCanvas.toDataURL('image/png');
            document.getElementById('croquis-thumbnail').src = croquisDataUrl;
            document.getElementById('croquis-thumbnail-container').classList.remove('hidden');
            
            // DIBUJO DE LAS FIRMAS DE PRUEBA
            signatureCtx.clearRect(0, 0, signatureCanvas.width, signatureCanvas.height);
            signatureCtx.beginPath();
            signatureCtx.moveTo(40, 120);
            signatureCtx.bezierCurveTo(80, 40, 180, 160, 220, 80);
            signatureCtx.moveTo(200, 100);
            signatureCtx.bezierCurveTo(240, 60, 300, 140, 350, 100);
            signatureCtx.stroke();
            signatureADataUrl = signatureCanvas.toDataURL('image/png');
            document.getElementById('signature-thumbnail-a').src = signatureADataUrl;
            document.getElementById('signature-thumbnail-container-a').classList.remove('hidden');
            document.getElementById('signature-placeholder-a').classList.add('hidden');
            
            signatureCtx.clearRect(0, 0, signatureCanvas.width, signatureCanvas.height);
            signatureCtx.beginPath();
            signatureCtx.moveTo(50, 80);
            signatureCtx.bezierCurveTo(90, 160, 190, 40, 230, 120);
            signatureCtx.moveTo(210, 100);
            signatureCtx.bezierCurveTo(250, 140, 310, 60, 360, 120);
            signatureCtx.stroke();
            signatureBDataUrl = signatureCanvas.toDataURL('image/png');
            document.getElementById('signature-thumbnail-b').src = signatureBDataUrl;
            document.getElementById('signature-thumbnail-container-b').classList.remove('hidden');
            document.getElementById('signature-placeholder-b').classList.add('hidden');
            
            listContainer.dispatchEvent(new Event('change', { bubbles: true }));
            updateDynamicLabels();
        }
        fillTestDataBtn.addEventListener('click', fillFormForTesting);

        function formatDataForEmail(data) {
            let body = 'DECLARACIÓN AMISTOSA DE ACCIDENTE\n';
            body += '===================================\n\n';

            body += '--- DATOS GENERALES ---\n';
            body += `Fecha: ${data.fecha || 'No especificado'}\n`;
            body += `Hora: ${data.hora || 'No especificado'}\n`;
            body += `Lugar: ${data.lugar || 'No especificado'}\n`;
            body += `País: ${data.pais || 'No especificado'}\n`;
            if (data.gps) body += `GPS: ${data.gps}\n`;
            body += `Víctimas: ${data.victimas || 'No especificado'}\n`;
            body += `Daños Materiales a otros: ${data.danos_materiales || 'No especificado'}\n`;
            if (data.testigos) body += `Testigos: ${data.testigos}\n`;
            body += '\n';

            body += '--- VEHÍCULO A ---\n';
            body += `Asegurado: ${data.aseguradoA.nombre} ${data.aseguradoA.apellidos}\n`;
            body += `Móvil: ${data.aseguradoA.movil || 'No especificado'}\n`;
            body += `Email: ${data.aseguradoA.email || 'No especificado'}\n`;
            body += `Vehículo: ${data.vehiculoA.marca || 'No especificado'}\n`;
            body += `Matrícula: ${data.vehiculoA.matricula || 'No especificado'}\n`;
            if (data.vehiculoA.remolque) body += `Matrícula Remolque: ${data.vehiculoA.remolque}\n`;
            body += `Aseguradora: ${data.aseguradoraA.nombre || 'No especificado'}\n`;
            body += `Póliza: ${data.aseguradoraA.poliza || 'No especificado'}\n`;
            body += `Conductor: ${data.conductorA.nombre} ${data.conductorA.apellidos}\n`;
            body += `Daños Apreciados: ${data.danosA || 'Ninguno'}\n`;
            body += `Observaciones: ${data.observacionesA || 'Ninguna'}\n`;
            body += `Circunstancias Marcadas: ${data.circunstanciasA.join(', ') || 'Ninguna'}\n\n`;

            body += '--- VEHÍCULO B ---\n';
            body += `Asegurado: ${data.aseguradoB.nombre} ${data.aseguradoB.apellidos}\n`;
            body += `Móvil: ${data.aseguradoB.movil || 'No especificado'}\n`;
            body += `Email: ${data.aseguradoB.email || 'No especificado'}\n`;
            body += `Vehículo: ${data.vehiculoB.marca || 'No especificado'}\n`;
            body += `Matrícula: ${data.vehiculoB.matricula || 'No especificado'}\n`;
            if (data.vehiculoB.remolque) body += `Matrícula Remolque: ${data.vehiculoB.remolque}\n`;
            body += `Aseguradora: ${data.aseguradoraB.nombre || 'No especificado'}\n`;
            body += `Póliza: ${data.aseguradoraB.poliza || 'No especificado'}\n`;
            body += `Conductor: ${data.conductorB.nombre} ${data.conductorB.apellidos}\n`;
            body += `Daños Apreciados: ${data.danosB || 'Ninguno'}\n`;
            body += `Observaciones: ${data.observacionesB || 'Ninguna'}\n`;
            body += `Circunstancias Marcadas: ${data.circunstanciasB.join(', ') || 'Ninguna'}\n\n`;
            
            body += '===================================\n';
            body += 'NOTA: Las firmas, el croquis, los puntos de impacto y las fotos no se incluyen en este email. Deben gestionarse por separado.\n';

            return body;
        }

        const handleSubmit = async (e) => {
            e.preventDefault();
            downloadArea.innerHTML = ''; // Limpiar área de descarga
            
            const errorList = new Set();
            
            form.querySelectorAll('.invalid-field, .invalid-field-container, .invalid-field-label').forEach(el => {
                el.classList.remove('invalid-field', 'invalid-field-container', 'invalid-field-label');
            });

            const circAchecked = form.querySelectorAll('input[name="circunstanciasA"]:checked').length > 0;
            const circBchecked = form.querySelectorAll('input[name="circunstanciasB"]:checked').length > 0;
            if (!circAchecked || !circBchecked) {
                errorList.add("Se debe marcar al menos una circunstancia para el Vehículo A y otra para el Vehículo B.");
                const circContainer = form.querySelector('#circunstancias-list');
                circContainer.classList.add('invalid-field-container');
                circContainer.addEventListener('change', () => circContainer.classList.remove('invalid-field-container'), { once: true });
            }
            
            const requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                let isFieldInvalid = false;
                
                if (field.type === 'checkbox') {
                    if (!field.checked) isFieldInvalid = true;
                } else {
                    if (!field.value || field.value.trim() === '') isFieldInvalid = true;
                }

                if (isFieldInvalid) {
                    let elementToStyle = field;
                    let fieldName = 'un campo'; 
                    let label = field.labels?.[0] || form.querySelector(`label[for="${field.id}"]`);
                    
                    if (label) {
                         fieldName = label.textContent.replace(/\*/g, '').trim();
                    } else {
                         const parentGroup = field.closest('.input-group');
                         if(parentGroup) {
                             const parentLabel = parentGroup.querySelector('label');
                             if(parentLabel) fieldName = parentLabel.textContent.replace(/\*/g, '').trim();
                         }
                    }

                    if (field.type === 'hidden') {
                        if (field.parentElement.querySelector('.btn-group')) {
                            elementToStyle = field.parentElement.querySelector('.btn-group');
                            elementToStyle.classList.add('invalid-field-container');
                            errorList.add(`Debe seleccionar una opción para: "${fieldName}"`);
                        } else if (field.name.startsWith('impact-point')) {
                            const vehicle = field.name.split('-')[2].toUpperCase();
                            elementToStyle = form.querySelector(`.open-impact-modal-btn[data-vehicle="${vehicle}"]`);
                            elementToStyle.classList.add('invalid-field');
                            errorList.add(`Debe seleccionar el punto de impacto para el Vehículo ${vehicle}.`);
                        }
                    } else if (field.type === 'checkbox') {
                        elementToStyle = field.nextElementSibling;
                        elementToStyle.classList.add('invalid-field-label');
                        const vehicle = field.name.includes('A') ? 'A' : 'B';
                        errorList.add(`La confirmación del Conductor ${vehicle} es obligatoria.`);
                    } else { 
                        elementToStyle.classList.add('invalid-field');
                        errorList.add(`El campo "${fieldName}" es obligatorio.`);
                    }

                    const cleanup = () => elementToStyle.classList.remove('invalid-field', 'invalid-field-container', 'invalid-field-label');
                    field.addEventListener('change', cleanup, { once: true });
                    field.addEventListener('input', cleanup, { once: true });
                }
            });
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const mobileRegex = /^[679]\d{8}$/;
            const plateRegex = /^(\d{4}[A-Z]{3})|([A-Z]{1,2}\d{4}[A-Z]{2})|([A-Z]{1,2}\d{1,6})$/;

            ['A', 'B'].forEach(v => {
                const emailInput = form.querySelector(`#asegurado${v}_email`);
                const mobileInput = form.querySelector(`#asegurado${v}_movil`);
                const plateInput = form.querySelector(`#vehiculo${v}_matricula`);

                if (emailInput.value && !emailRegex.test(emailInput.value)) {
                    errorList.add(`El formato del email del Asegurado ${v} no es válido.`);
                    emailInput.classList.add('invalid-field');
                }
                if (!mobileRegex.test(mobileInput.value)) {
                    errorList.add(`El móvil del Asegurado ${v} debe tener 9 dígitos y empezar por 6, 7 o 9.`);
                    mobileInput.classList.add('invalid-field');
                }
                 if (!plateRegex.test(plateInput.value)) {
                    errorList.add(`El formato de la matrícula del Vehículo ${v} no es válido (ej: 1234ABC, M1234AB, M123456).`);
                    plateInput.classList.add('invalid-field');
                }
            });

            if (errorList.size > 0) {
                const errorModalList = document.getElementById('error-modal-list');
                errorModalList.innerHTML = '<ul>' + Array.from(errorList).map(err => `<li class="list-disc ml-4">${err}</li>`).join('') + '</ul>';
                errorModal.classList.add('visible');
                
                const firstErrorElement = form.querySelector('.invalid-field, .invalid-field-container, .invalid-field-label');
                if (firstErrorElement) {
                    firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                return;
            }
            
            submitBtn.textContent = 'Generando...';
            submitBtn.disabled = true;
            statusMsg.textContent = 'Generando PDF, por favor espera...';

            try {
                const pdfUrl = 'DeclaracionAmistosa.pdf'; 
                const templatePdfBytes = await fetch(pdfUrl).then(res => {
                    if (!res.ok) throw new Error(`No se pudo cargar la plantilla PDF: ${res.status} ${res.statusText}`);
                    return res.arrayBuffer();
                });

                const pdfDoc = await PDFDocument.load(templatePdfBytes);
                const data = getFormDataObject();
                const page = pdfDoc.getPages()[0];
                const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
                const pageHeight = page.getHeight();

                const designCoords = {
                    fecha: { x: 55, y: 45 }, hora: { x: 120, y: 45 },
                    pais: { x: 180, y: 45 }, victimas_no: { x: 375, y: 46 }, victimas_si: { x: 418, y: 46 },
                    danos_materiales_no: { x: 50, y: 85 }, danos_materiales_si: { x: 93, y: 85 },
                    testigos: { x: 225, y: 74 },
                    aseguradoA_apellidos: { x: 68, y: 146 }, aseguradoA_nombre: { x: 68, y: 135 },
                    aseguradoA_movil_email: { x: 74, y: 188, size: 7 }, vehiculoA_marca: { x: 34, y: 233 },
                    vehiculoA_matricula: { x: 34, y: 258 },
                    aseguradoraA_nombre: { x: 68, y: 305 }, aseguradoraA_poliza: { x: 80, y: 317 },
                    conductorA_apellidos: { x: 66, y: 478 }, conductorA_nombre: { x: 66, y: 465 },
                    observacionesA: { x: 32, y: 765 },
                    firmaA: { x: 225, y: 795 },
                };
                const convertCoords = (coords) => {
                    const newCoords = {};
                    for (const key in coords) newCoords[key] = { ...coords[key], y: pageHeight - coords[key].y };
                    return newCoords;
                };
                const pdfCoordinatesA = convertCoords(designCoords);
                pdfCoordinatesA.vehiculoA_remolque = { ...pdfCoordinatesA.vehiculoA_matricula, x: pdfCoordinatesA.vehiculoA_matricula.x + 110 };
                const xShift = 349;
                const pdfCoordinatesB = {};
                for (const key in pdfCoordinatesA) {
                    if (key.startsWith('aseguradoA') || key.startsWith('vehiculoA') || key.startsWith('aseguradoraA') || key.startsWith('conductorA') || key.startsWith('observacionesA')) {
                        const bKey = key.replace('A', 'B');
                        pdfCoordinatesB[bKey] = { ...pdfCoordinatesA[key], x: pdfCoordinatesA[key].x + xShift };
                    }
                }
                pdfCoordinatesB['firmaB'] = { x: 230, y: pageHeight - 795 };
                pdfCoordinatesB['observacionesB'] = { ...pdfCoordinatesA.observacionesA, x: pdfCoordinatesA.observacionesA.x + xShift + 20 };
                const coordinates = { ...pdfCoordinatesA, ...pdfCoordinatesB };
                const draw = (text, coords) => {
                    if (text && coords) {
                        page.drawText(String(text), { x: coords.x, y: coords.y, font: coords.font || font, size: coords.size || 8, color: rgb(0.1, 0.1, 0.6) });
                    }
                };
                function drawWrappedText(page, text, options) {
                    if (!text) return;
                    const { x, y, maxWidth, lineHeight, color, size, font: textFont } = options;
                    const words = text.split(' ');
                    let line = '';
                    let currentY = y;
                    for (let n = 0; n < words.length; n++) {
                        const testLine = line + words[n] + ' ';
                        if (textFont.widthOfTextAtSize(testLine, size) > maxWidth && n > 0) {
                            page.drawText(line, { x, y: currentY, font: textFont, size, color });
                            line = words[n] + ' ';
                            currentY -= lineHeight;
                        } else {
                            line = testLine;
                        }
                    }
                    page.drawText(line, { x, y: currentY, font: textFont, size, color });
                }
                function drawWrappedLocation(page, text, options) {
                    if (!text) return;
                    const { x, y, firstMaxWidth, nextX, nextMaxWidth, lineHeight, color, size, font } = options;
                    const words = text.split(' ');
                    let line = '';
                    let currentY = y;
                    let isFirstLine = true;
                    for (let n = 0; n < words.length; n++) {
                        const testLine = line + words[n] + ' ';
                        const currentMaxWidth = isFirstLine ? firstMaxWidth : nextMaxWidth;
                        if (font.widthOfTextAtSize(testLine, size) > currentMaxWidth && n > 0) {
                            page.drawText(line, { x: isFirstLine ? x : nextX, y: currentY, font, size, color });
                            line = words[n] + ' ';
                            currentY -= lineHeight;
                            isFirstLine = false;
                        } else {
                            line = testLine;
                        }
                    }
                    page.drawText(line, { x: isFirstLine ? x : nextX, y: currentY, font, size, color });
                }
                draw(data.fecha, coordinates.fecha);
                draw(data.hora, coordinates.hora);
                const fullLocation = data.gps ? `${data.lugar} - GPS: ${data.gps}` : data.lugar;
                drawWrappedLocation(page, fullLocation, { x: 248, y: pageHeight - 35, firstMaxWidth: 87, nextX: 229, nextMaxWidth: 106, lineHeight: 10, font, size: 8, color: rgb(0.1, 0.1, 0.6) });
                draw(data.pais, coordinates.pais);
                if (data.victimas === 'si') draw('X', coordinates.victimas_si);
                if (data.victimas === 'no') draw('X', coordinates.victimas_no);
                if (data.danos_materiales === 'si') draw('X', coordinates.danos_materiales_si);
                if (data.danos_materiales === 'no') draw('X', coordinates.danos_materiales_no);
                draw(data.testigos, coordinates.testigos);
                draw(data.aseguradoA.apellidos, coordinates.aseguradoA_apellidos);
                draw(data.aseguradoA.nombre, coordinates.aseguradoA_nombre);
                draw(`${data.aseguradoA.movil} / ${data.aseguradoA.email}`, coordinates.aseguradoA_movil_email);
                draw(data.vehiculoA.marca, coordinates.vehiculoA_marca);
                draw(data.vehiculoA.matricula, coordinates.vehiculoA_matricula);
                draw(data.vehiculoA.remolque, coordinates.vehiculoA_remolque);
                const aseguradoraA_text = data.vehiculoA.remolque_aseguradora ? `${data.aseguradoraA.nombre} - ${data.vehiculoA.remolque_aseguradora}` : data.aseguradoraA.nombre;
                draw(aseguradoraA_text, coordinates.aseguradoraA_nombre);
                draw(data.aseguradoraA.poliza, coordinates.aseguradoraA_poliza);
                draw(data.conductorA.apellidos, coordinates.conductorA_apellidos);
                draw(data.conductorA.nombre, coordinates.conductorA_nombre);
                draw(data.aseguradoB.apellidos, coordinates.aseguradoB_apellidos);
                draw(data.aseguradoB.nombre, coordinates.aseguradoB_nombre);
                draw(`${data.aseguradoB.movil} / ${data.aseguradoB.email}`, coordinates.aseguradoB_movil_email);
                draw(data.vehiculoB.marca, coordinates.vehiculoB_marca);
                draw(data.vehiculoB.matricula, coordinates.vehiculoB_matricula);
                draw(data.vehiculoB.remolque, coordinates.vehiculoB_remolque);
                const aseguradoraB_text = data.vehiculoB.remolque_aseguradora ? `${data.aseguradoraB.nombre} - ${data.vehiculoB.remolque_aseguradora}` : data.aseguradoraB.nombre;
                draw(aseguradoraB_text, coordinates.aseguradoraB_nombre);
                draw(data.aseguradoraB.poliza, coordinates.aseguradoraB_poliza);
                draw(data.conductorB.apellidos, coordinates.conductorB_apellidos);
                draw(data.conductorB.nombre, coordinates.conductorB_nombre);
                drawWrappedText(page, data.danosA, { x: 32, y: pageHeight - 714, font: font, size: 8, color: rgb(0.1, 0.1, 0.6), maxWidth: 100, lineHeight: 10 });
                drawWrappedText(page, data.observacionesA, { x: coordinates.observacionesA.x, y: coordinates.observacionesA.y, font, size: 8, color: rgb(0.1, 0.1, 0.6), maxWidth: 100, lineHeight: 10 });
                drawWrappedText(page, data.danosB, { x: 473, y: pageHeight - 714, font: font, size: 8, color: rgb(0.1, 0.1, 0.6), maxWidth: 100, lineHeight: 10 });
                drawWrappedText(page, data.observacionesB, { x: coordinates.observacionesB.x, y: coordinates.observacionesB.y, font, size: 8, color: rgb(0.1, 0.1, 0.6), maxWidth: 100, lineHeight: 10 });
                const yCoords = [153, 161, 186, 201, 226, 250, 274, 298, 332, 356, 371, 387, 401, 417, 431, 465, 489];
                data.circunstanciasA.forEach(num => draw('X', { x: 225, y: pageHeight - yCoords[parseInt(num)-1] }));
                data.circunstanciasB.forEach(num => draw('X', { x: 367, y: pageHeight - yCoords[parseInt(num)-1] }));
                draw(String(data.circunstanciasA.length), { x: 227, y: pageHeight - 512 });
                draw(String(data.circunstanciasB.length), { x: 366, y: pageHeight - 512 });
                
                if (croquisDataUrl) {
                    const embeddedImage = await pdfDoc.embedPng(croquisDataUrl);
                    const dims = embeddedImage.scaleToFit(193, 139);
                    page.drawImage(embeddedImage, {x: 200 + (193 - dims.width) / 2, y: pageHeight - 730 + (139 - dims.height) / 2, ...dims});
                }
                if (signatureADataUrl) {
                    const embeddedSignature = await pdfDoc.embedPng(signatureADataUrl);
                    const dims = embeddedSignature.scaleToFit(77, 28);
                    page.drawImage(embeddedSignature, { x: coordinates.firmaA.x + (77 - dims.width) / 2, y: coordinates.firmaA.y + (28 - dims.height) / 2, ...dims });
                }
                if (signatureBDataUrl) {
                    const embeddedSignature = await pdfDoc.embedPng(signatureBDataUrl);
                    const dims = embeddedSignature.scaleToFit(77, 28);
                    page.drawImage(embeddedSignature, { x: coordinates.firmaB.x + 75 + (77 - dims.width) / 2, y: coordinates.firmaB.y + (28 - dims.height) / 2, ...dims });
                }

                if (impactPointA) {
                    const scaledX = 30 + (impactPointA.x / impactCanvas.width) * 96.5;
                    const scaledY = (pageHeight - 676 + 68) - (impactPointA.y / impactCanvas.height) * 68;
                    page.drawText('X', { x: scaledX - 4, y: scaledY - 8, font, size: 14, color: rgb(1, 0, 0) });
                }
                if (impactPointB) {
                    const scaledX = 472 + (impactPointB.x / impactCanvas.width) * 96.5;
                    const scaledY = (pageHeight - 676 + 68) - (impactPointB.y / impactCanvas.height) * 68;
                    page.drawText('X', { x: scaledX - 4, y: scaledY - 8, font, size: 14, color: rgb(1, 0, 0) });
                }

                const pdfBytes = await pdfDoc.save();
                const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                const url = URL.createObjectURL(blob);
                
                statusMsg.textContent = '¡PDF generado con éxito!';

                const downloadLink = document.createElement('a');
                downloadLink.href = url;
                downloadLink.download = `declaracion-rellenada-${Date.now()}.pdf`;
                downloadLink.textContent = 'Descargar PDF';
                downloadLink.className = 'w-full block max-w-lg mx-auto bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 mb-4';
                downloadLink.addEventListener('click', () => {
                    downloadConfirmModal.classList.add('visible');
                });
                downloadArea.appendChild(downloadLink);

                const shareArea = document.createElement('div');
                shareArea.className = 'mt-6 max-w-lg mx-auto p-4 border-t-2 border-slate-200 space-y-3';
                
                const emailBtn = document.createElement('button');
                emailBtn.type = 'button';
                emailBtn.id = 'email-btn';
                emailBtn.textContent = 'Enviar a contacto@asegura2k25.com';
                emailBtn.className = 'w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600';
                emailBtn.onclick = () => {
                    const emailBody = formatDataForEmail(data);
                    const recipientEmail = 'contacto@asegura2k25.com';
                    const subject = `Declaración de Accidente - ${data.fecha} - ${data.vehiculoA.matricula} vs ${data.vehiculoB.matricula}`;
                    
                    const textArea = document.createElement("textarea");
                    textArea.value = emailBody;
                    textArea.style.position = "fixed"; 
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    try {
                        document.execCommand('copy');
                        statusMsg.textContent = 'Resumen copiado al portapapeles. Péguelo en el cuerpo del email.';
                    } catch (err) {
                        statusMsg.textContent = 'No se pudo copiar el resumen. Por favor, hágalo manualmente.';
                    }
                    document.body.removeChild(textArea);

                    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}`;
                    window.open(mailtoLink, '_blank');
                };
                shareArea.appendChild(emailBtn);

                const whatsappBtn = document.createElement('button');
                whatsappBtn.type = 'button';
                whatsappBtn.id = 'whatsapp-btn';
                whatsappBtn.textContent = 'Compartir por WhatsApp';
                whatsappBtn.className = 'w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600';
                whatsappBtn.onclick = () => {
                    const text = "Hola, te envío la declaración de accidente. La adjuntaré a continuación desde mi dispositivo.";
                    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
                };
                shareArea.appendChild(whatsappBtn);
                
                downloadArea.appendChild(shareArea);

            } catch (err) {
                console.error(err);
                statusMsg.textContent = '';
                const errorModalList = document.getElementById('error-modal-list');
                errorModalList.innerHTML = '<strong>Error al generar el PDF.</strong><br>Asegúrate de que el archivo de plantilla `DeclaracionAmistosa.pdf` está accesible.';
                errorModal.classList.add('visible');
            } finally {
                submitBtn.textContent = 'Generar Declaración PDF';
                submitBtn.disabled = false;
            }
        };

        form.addEventListener('submit', handleSubmit);
        
        setupChoiceButtons();
        setDateTimeLimits();
        updateDynamicLabels();
        loadImpactImage(); 
        closeConfirmModalBtn.addEventListener('click', () => {
            downloadConfirmModal.classList.remove('visible');
        });
        closeErrorModalBtn.addEventListener('click', () => {
            errorModal.classList.remove('visible');
        });

        // Cleanup function for useEffect
        return () => {
            form.removeEventListener('submit', handleSubmit);
        };
    }, []);

  return (
    <>
      <Helmet>
        <title>Declaración de Accidente • Asegura2K25</title>
        <meta name="description" content="Rellena y genera la Declaración Amistosa de Accidente de forma rápida y sencilla." />
      </Helmet>
      <Header />
      <main className="bg-slate-100">
        <div className="py-8">
            {/* Aquí va todo el contenido del body del HTML original */}
            <div className="max-w-7xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-2xl">
                <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-slate-800">Declaración Amistosa de Accidente</h1>
                <p className="text-center text-sm text-slate-500 mb-6">Rellena el formulario para generar el parte oficial.</p>
                <p className="text-center text-sm text-slate-500 mb-6">Los campos marcados con <span className="text-red-500 font-bold">*</span> son obligatorios.</p>
                <form id="accident-form" ref={formRef} noValidate>
                    <div className="text-center mb-6">
                         <button type="button" id="fill-test-data-btn" className="w-full max-w-md px-6 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700 transition-transform transform hover:scale-105">Rellenar para Pruebas</button>
                    </div>
                    {/* SECCIÓN 1: DATOS GENERALES */}
                    <div className="form-section">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="input-group md:col-span-2">
                                <label htmlFor="gps_coords">Localización GPS (Paso 1)</label>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <input type="text" id="gps_coords" name="gps_coords" placeholder="Latitud, Longitud" readOnly className="bg-slate-100 flex-grow w-full sm:w-auto" />
                                    <button type="button" id="get-gps-btn" className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full sm:w-auto">Obtener Ubicación</button>
                                    <button type="button" id="clear-gps-btn" className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 w-full sm:w-auto">Borrar</button>
                                </div>
                            </div>
                            <div className="input-group">
                                <label htmlFor="fechaAccidente">1. Fecha del Accidente <span className="text-red-500">*</span></label>
                                <div className="flex gap-2">
                                    <input type="date" id="fechaAccidente" name="fechaAccidente" required className="flex-grow" />
                                    <button type="button" id="today-btn" className="px-4 py-2 bg-slate-100 text-slate-800 rounded-md hover:bg-slate-200">Hoy</button>
                                </div>
                            </div>
                            <div className="input-group"><label htmlFor="horaAccidente">Hora <span className="text-red-500">*</span></label><input type="time" id="horaAccidente" name="horaAccidente" required /></div>
                            <div className="input-group"><label htmlFor="pais">2. País <span className="text-red-500">*</span></label><input type="text" id="pais" name="pais" defaultValue="España" required /></div>
                            <div className="input-group"><label htmlFor="lugar">Lugar (Ciudad, Calle...) <span className="text-red-500">*</span></label><input type="text" id="lugar" name="lugar" placeholder="Ej: Calle Mayor, Madrid" required /></div>
                            
                            <div className="input-group text-center">
                                <label>3. ¿Víctimas (incluso leves)? <span className="text-red-500">*</span></label>
                                <div className="btn-group-container">
                                    <div className="btn-group" data-target-input="victimas">
                                        <button type="button" className="btn-choice" data-value="no">No</button>
                                        <button type="button" className="btn-choice" data-value="si">Si</button>
                                    </div>
                                </div>
                                <input type="hidden" name="victimas" id="victimas" required />
                            </div>
                            <div className="input-group text-center">
                                <label>4. ¿Daños materiales a otros vehículos/objetos? <span className="text-red-500">*</span></label>
                                <div className="btn-group-container">
                                        <div className="btn-group" data-target-input="danos_materiales">
                                           <button type="button" className="btn-choice" data-value="no">No</button>
                                           <button type="button" className="btn-choice" data-value="si">Si</button>
                                        </div>
                                </div>
                                <input type="hidden" name="danos_materiales" id="danos_materiales" required />
                            </div>
                            <div className="input-group md:col-span-2"><label htmlFor="testigos">5. Testigos <span className="text-xs italic text-slate-500 ml-2">(Opcional)</span></label><textarea id="testigos" name="testigos" rows="2" placeholder="Nombre, dirección, teléfono..."></textarea></div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between">
                        {/* SECCIÓN 2: VEHÍCULO A */}
                        <div className="vehicle-column mb-6 lg:mb-0">
                            <div className="form-section h-full">
                                <h2 className="form-section-title text-blue-700">Vehículo A</h2>
                                <h3 className="font-semibold text-gray-700 mt-4 mb-2">6. Asegurado</h3>
                                <div className="input-group"><label htmlFor="aseguradoA_nombre">Nombre y Apellidos <span className="text-red-500">*</span></label><input type="text" id="aseguradoA_nombre" name="aseguradoA_nombre" required /></div>
                                <div className="input-group"><label htmlFor="aseguradoA_movil">Móvil <span className="text-red-500">*</span></label><input type="tel" id="aseguradoA_movil" name="aseguradoA_movil" title="9 dígitos empezando por 6, 7 o 9" maxLength="9" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} required /></div>
                                <div className="input-group"><label htmlFor="aseguradoA_email">Email</label><input type="email" id="aseguradoA_email" name="aseguradoA_email" /></div>
                                
                                <h3 className="font-semibold text-gray-700 mt-4 mb-2">7. Vehículo</h3>
                                <div className="input-group"><label htmlFor="vehiculoA_marca">Marca y Modelo <span className="text-red-500">*</span></label><input type="text" id="vehiculoA_marca" name="vehiculoA_marca" required /></div>
                                <div className="input-group"><label htmlFor="vehiculoA_matricula">Matrícula <span className="text-red-500">*</span></label><input type="text" id="vehiculoA_matricula" name="vehiculoA_matricula" maxLength="12" onInput={(e) => e.target.value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '')} placeholder="1234ABC" required /></div>
                                
                                <div className="input-group"><label>¿Lleva remolque? <span className="text-red-500">*</span></label>
                                    <div className="btn-group-container">
                                        <div className="btn-group" data-target-input="remolque_a">
                                            <button type="button" className="btn-choice" data-value="si">Sí</button>
                                            <button type="button" className="btn-choice" data-value="no">No</button>
                                        </div>
                                    </div>
                                    <input type="hidden" name="remolque_a" id="remolque_a" required />
                                </div>
                                <div id="remolque_a_fields" className="hidden pl-4 border-l-2 border-slate-200">
                                    <div className="input-group"><label htmlFor="remolqueA_matricula">Matrícula Remolque <span className="text-red-500">*</span></label><input type="text" id="remolqueA_matricula" name="remolqueA_matricula" maxLength="12" onInput={(e) => e.target.value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '')} /></div>
                                    <div className="input-group"><label htmlFor="remolqueA_aseguradora">Aseguradora Remolque <span className="text-red-500">*</span></label><input type="text" id="remolqueA_aseguradora" name="remolqueA_aseguradora" /></div>
                                </div>

                                <h3 className="font-semibold text-gray-700 mt-4 mb-2">8. Aseguradora</h3>
                                <div className="input-group"><label htmlFor="aseguradoraA_nombre">Nombre Compañía <span className="text-red-500">*</span></label><input type="text" id="aseguradoraA_nombre" name="aseguradoraA_nombre" required /></div>
                                <div className="input-group"><label htmlFor="polizaA">Nº de Póliza <span className="text-red-500">*</span></label><input type="text" id="polizaA" name="polizaA" maxLength="20" required /></div>
                                
                                <h3 className="font-semibold text-gray-700 mt-4 mb-2">9. Conductor</h3>
                                <div className="input-group"><label>¿El conductor es el tomador del seguro? <span className="text-red-500">*</span></label>
                                    <div className="btn-group-container">
                                            <div className="btn-group" data-target-input="tomador_a">
                                               <button type="button" className="btn-choice" data-value="si">Sí</button>
                                               <button type="button" className="btn-choice" data-value="no">No</button>
                                            </div>
                                    </div>
                                    <input type="hidden" name="tomador_a" id="tomador_a" required />
                                </div>
                                <div id="conductor_a_fields" className="hidden pl-4 border-l-2 border-slate-200">
                                    <div className="input-group"><label htmlFor="conductorA_nombre">Nombre y Apellidos del Conductor <span className="text-red-500">*</span></label><input type="text" id="conductorA_nombre" name="conductorA_nombre" /></div>
                                </div>
                                
                                <h3 className="font-semibold text-gray-700 mt-4 mb-2">10. Punto de impacto inicial <span className="text-red-500">*</span></h3>
                                <div className="text-center">
                                    <button type="button" className="open-impact-modal-btn mb-2 px-4 py-2 bg-slate-100 text-slate-800 rounded-md hover:bg-slate-200" data-vehicle="A">Seleccionar Punto de Impacto</button>
                                    <div id="impact-thumbnail-container-a" className="hidden w-32 h-24 mx-auto border-2 border-slate-200 rounded-md">
                                        <img id="impact-thumbnail-a" className="w-full h-full object-contain" alt="Punto de impacto A" />
                                    </div>
                                    <input type="hidden" id="impact-point-a" name="impact-point-a" required />
                                </div>

                                <h3 className="font-semibold text-gray-700 mt-4 mb-2">11. Daños apreciados</h3>
                                <div className="input-group"><textarea id="danosA" name="danosA" rows="3" placeholder="Describa los daños..."></textarea></div>
                                <h3 className="font-semibold text-gray-700 mt-4 mb-2">14. Observaciones</h3>
                                <div className="input-group"><textarea id="observacionesA" name="observacionesA" rows="3" placeholder="Añada cualquier observación..."></textarea></div>
                            </div>
                        </div>

                        {/* SECCIÓN 3: VEHÍCULO B */}
                        <div className="vehicle-column">
                                <div className="form-section h-full">
                                    <h2 className="form-section-title text-green-700">Vehículo B</h2>
                                    <h3 className="font-semibold text-gray-700 mt-4 mb-2">6. Asegurado</h3>
                                    <div className="input-group"><label htmlFor="aseguradoB_nombre">Nombre y Apellidos <span className="text-red-500">*</span></label><input type="text" id="aseguradoB_nombre" name="aseguradoB_nombre" required /></div>
                                    <div className="input-group"><label htmlFor="aseguradoB_movil">Móvil <span className="text-red-500">*</span></label><input type="tel" id="aseguradoB_movil" name="aseguradoB_movil" maxLength="9" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} required /></div>
                                    <div className="input-group"><label htmlFor="aseguradoB_email">Email</label><input type="email" id="aseguradoB_email" name="aseguradoB_email" /></div>

                                    <h3 className="font-semibold text-gray-700 mt-4 mb-2">7. Vehículo</h3>
                                    <div className="input-group"><label htmlFor="vehiculoB_marca">Marca y Modelo <span className="text-red-500">*</span></label><input type="text" id="vehiculoB_marca" name="vehiculoB_marca" required /></div>
                                    <div className="input-group"><label htmlFor="vehiculoB_matricula">Matrícula <span className="text-red-500">*</span></label><input type="text" id="vehiculoB_matricula" name="vehiculoB_matricula" maxLength="12" onInput={(e) => e.target.value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '')} placeholder="5678PQR" required /></div>
                                    
                                    <div className="input-group"><label>¿Lleva remolque? <span className="text-red-500">*</span></label>
                                        <div className="btn-group-container">
                                            <div className="btn-group" data-target-input="remolque_b">
                                                <button type="button" className="btn-choice" data-value="si">Sí</button>
                                                <button type="button" className="btn-choice" data-value="no">No</button>
                                            </div>
                                        </div>
                                        <input type="hidden" name="remolque_b" id="remolque_b" required />
                                    </div>
                                    <div id="remolque_b_fields" className="hidden pl-4 border-l-2 border-slate-200">
                                        <div className="input-group"><label htmlFor="remolqueB_matricula">Matrícula Remolque <span className="text-red-500">*</span></label><input type="text" id="remolqueB_matricula" name="remolqueB_matricula" maxLength="12" onInput={(e) => e.target.value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '')} /></div>
                                        <div className="input-group"><label htmlFor="remolqueB_aseguradora">Aseguradora Remolque <span className="text-red-500">*</span></label><input type="text" id="remolqueB_aseguradora" name="remolqueB_aseguradora" /></div>
                                    </div>

                                    <h3 className="font-semibold text-gray-700 mt-4 mb-2">8. Aseguradora</h3>
                                    <div className="input-group"><label htmlFor="aseguradoraB_nombre">Nombre Compañía <span className="text-red-500">*</span></label><input type="text" id="aseguradoraB_nombre" name="aseguradoraB_nombre" required /></div>
                                    <div className="input-group"><label htmlFor="polizaB">Nº de Póliza <span className="text-red-500">*</span></label><input type="text" id="polizaB" name="polizaB" maxLength="20" required /></div>
                                    
                                    <h3 className="font-semibold text-gray-700 mt-4 mb-2">9. Conductor</h3>
                                    <div className="input-group"><label>¿El conductor es el tomador del seguro? <span className="text-red-500">*</span></label>
                                        <div className="btn-group-container">
                                            <div className="btn-group" data-target-input="tomador_b">
                                                <button type="button" className="btn-choice" data-value="si">Sí</button>
                                                <button type="button" className="btn-choice" data-value="no">No</button>
                                            </div>
                                        </div>
                                        <input type="hidden" name="tomador_b" id="tomador_b" required />
                                    </div>
                                    <div id="conductor_b_fields" className="hidden pl-4 border-l-2 border-slate-200">
                                        <div className="input-group"><label htmlFor="conductorB_nombre">Nombre y Apellidos del Conductor <span className="text-red-500">*</span></label><input type="text" id="conductorB_nombre" name="conductorB_nombre" /></div>
                                    </div>
                                    
                                    <h3 className="font-semibold text-gray-700 mt-4 mb-2">10. Punto de impacto inicial <span className="text-red-500">*</span></h3>
                                    <div className="text-center">
                                        <button type="button" className="open-impact-modal-btn mb-2 px-4 py-2 bg-slate-100 text-slate-800 rounded-md hover:bg-slate-200" data-vehicle="B">Seleccionar Punto de Impacto</button>
                                        <div id="impact-thumbnail-container-b" className="hidden w-32 h-24 mx-auto border-2 border-slate-200 rounded-md">
                                            <img id="impact-thumbnail-b" className="w-full h-full object-contain" alt="Punto de impacto B" />
                                        </div>
                                        <input type="hidden" id="impact-point-b" name="impact-point-b" required />
                                    </div>

                                    <h3 className="font-semibold text-gray-700 mt-4 mb-2">11. Daños apreciados</h3>
                                    <div className="input-group"><textarea id="danosB" name="danosB" rows="3" placeholder="Describa los daños..."></textarea></div>
                                    <h3 className="font-semibold text-gray-700 mt-4 mb-2">14. Observaciones</h3>
                                    <div className="input-group"><textarea id="observacionesB" name="observacionesB" rows="3" placeholder="Añada cualquier observación..."></textarea></div>
                                </div>
                        </div>
                    </div>

                    {/* SECCIÓN 4: CIRCUNSTANCIAS */}
                    <div className="form-section">
                        <h2 className="form-section-title">12. Circunstancias <span className="text-red-500">*</span></h2>
                        <div className="flex justify-between items-end mb-2">
                            <div id="circunstancias-label-a" className="font-semibold text-blue-700 break-words text-left">Vehículo A</div>
                            <div className="font-semibold text-slate-600 self-end hidden md:block text-center flex-shrink-0 px-4">Marque las casillas</div>
                            <div id="circunstancias-label-b" className="font-semibold text-green-700 break-words text-right">Vehículo B</div>
                        </div>
                        <div id="circunstancias-list" className="space-y-2"></div>
                          <p className="text-center text-sm mt-4">Nº de casillas marcadas: <span id="contador-a" className="font-bold text-blue-700">0</span> | <span id="contador-b" className="font-bold text-green-700">0</span></p>
                          <input type="hidden" id="circunstancias-check" />
                    </div>

                    {/* SECCIÓN 5: CROQUIS */}
                    <div className="form-section">
                        <h2 className="form-section-title">13. Croquis del accidente</h2>
                        <div className="text-center">
                            <button type="button" id="open-croquis-modal-btn" className="mb-4 inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-800 font-bold rounded-lg shadow-sm hover:bg-slate-200 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M15.823 3.428a1.5 1.5 0 0 0-2.12-2.122L1.16 13.847l-1.073 2.503a.5.5 0 0 0 .63.63l2.504-1.073zm-2.21-2.206a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1 0 .707L4.953 14.832 1.047 10.926z"/></svg>
                                Abrir Editor de Croquis
                            </button>
                            <div id="croquis-thumbnail-container" className="hidden">
                                <img id="croquis-thumbnail" className="border-2 border-slate-300 rounded-lg mx-auto" alt="Miniatura del croquis" />
                            </div>
                        </div>
                    </div>

                     {/* SECCIÓN 6: FOTOS */}
                    <div className="form-section">
                        <h2 className="form-section-title">Fotos del accidente (Opcional)</h2>
                        <div className="text-center">
                            <label htmlFor="photo-input" className="mb-4 inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-800 font-bold rounded-lg shadow-sm hover:bg-slate-200 transition cursor-pointer">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/></svg>
                                Añadir Foto
                            </label>
                            <input type="file" id="photo-input" accept="image/*" capture="environment" multiple className="hidden" />
                            <div id="photo-previews" className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4"></div>
                        </div>
                    </div>
                    
                    {/* SECCIÓN 8: FIRMAS */}
                    <div className="form-section">
                        <h2 className="form-section-title">15. Firmas de los conductores</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-8 items-start">
                            <div className="p-4 border rounded-lg bg-slate-50">
                                <h3 className="font-semibold mb-2 text-center text-blue-700" id="signature-label-a">Firma Conductor A</h3>
                                <button type="button" data-signer="A" className="open-signature-modal-btn w-full mb-4 p-3 bg-white border-2 border-dashed rounded-lg text-slate-500 hover:bg-slate-100">
                                    <div id="signature-thumbnail-container-a" className="hidden h-20 flex items-center justify-center"><img id="signature-thumbnail-a" className="max-h-full" alt="Miniatura de la firma A" /></div>
                                    <span id="signature-placeholder-a">Pulsar para firmar</span>
                                </button>
                                <div className="mt-2 flex items-start">
                                    <input id="confirmacionA" name="confirmacionA" type="checkbox" required className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1" />
                                    <label htmlFor="confirmacionA" className="ml-2 block text-xs text-gray-600">
                                        Declaro que los datos son veraces y uso este medio por no disponer de un parte en papel. Entiendo que esta aplicación no guarda copias y es mi responsabilidad remitir este documento a mi aseguradora.
                                    </label>
                                </div>
                            </div>
                            <div className="p-4 border rounded-lg bg-slate-50">
                                <h3 className="font-semibold mb-2 text-center text-green-700" id="signature-label-b">Firma Conductor B</h3>
                                <button type="button" data-signer="B" className="open-signature-modal-btn w-full mb-4 p-3 bg-white border-2 border-dashed rounded-lg text-slate-500 hover:bg-slate-100">
                                   <div id="signature-thumbnail-container-b" className="hidden h-20 flex items-center justify-center"><img id="signature-thumbnail-b" className="max-h-full" alt="Miniatura de la firma B" /></div>
                                   <span id="signature-placeholder-b">Pulsar para firmar</span>
                                </button>
                                <div className="mt-2 flex items-start">
                                    <input id="confirmacionB" name="confirmacionB" type="checkbox" required className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1" />
                                    <label htmlFor="confirmacionB" className="ml-2 block text-xs text-gray-600">
                                        Declaro que los datos son veraces y uso este medio por no disponer de un parte en papel. Entiendo que esta aplicación no guarda copias y es mi responsabilidad remitir este documento a mi aseguradora.
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BOTÓN DE ENVÍO */}
                    <div className="text-center mt-8">
                        <button type="submit" id="submit-btn" className="w-full max-w-md px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">Generar Declaración PDF</button>
                        <p id="status-message" className="text-slate-600 font-semibold mt-4 text-center"></p>
                        <div id="download-area" className="text-center mt-4">
                            {/* El enlace de descarga y otros botones se insertarán aquí dinámicamente */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
