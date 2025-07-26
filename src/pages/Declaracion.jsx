import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'

export default function Declaracion () {
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [imagen, setImagen] = useState(null)

  const generarPdf = async () => {
    try {
      const { PDFDocument, StandardFonts } = await import('pdf-lib')
      let templateBytes
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}accident-template.pdf`)
        if (!response.ok) throw new Error('Template fetch failed')
        templateBytes = await response.arrayBuffer()
      } catch (err) {
        alert('Error al cargar la plantilla PDF')
        return
      }

      const pdfDoc = await PDFDocument.load(templateBytes)
      const page = pdfDoc.getPage(0)
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

      page.drawText(`Nombre: ${nombre}`, { x: 50, y: 760, size: 12, font })
      page.drawText(`Descripción: ${descripcion}`, { x: 50, y: 740, size: 12, font })

      if (imagen) {
        const bytes = await imagen.arrayBuffer()
        let img
        try {
          img = await pdfDoc.embedPng(bytes)
        } catch {
          try {
            img = await pdfDoc.embedJpg(bytes)
          } catch {
            alert('Error al procesar la imagen')
            return
          }
        }
        const dims = img.scale(0.25)
        page.drawImage(img, { x: 50, y: 650, width: dims.width, height: dims.height })
      }

      const pdfBytes = await pdfDoc.save()
      const blob = new Blob([pdfBytes], { type: 'application/pdf' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'declaracion.pdf'
      a.click()
      URL.revokeObjectURL(url)
    } catch (error) {
      alert('Error al generar el PDF')
      console.error(error)
    }
  }

  return (
    <main className='container mx-auto p-4'>
      <Helmet>
        <title>Declarar Accidente | Asegura2K25</title>
      </Helmet>
      <h1 className='text-2xl font-bold mb-4 text-center'>Declaración de Accidente</h1>
      <div className='max-w-md mx-auto space-y-4'>
        <input
          className='w-full border p-2 rounded'
          placeholder='Nombre'
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
        <textarea
          className='w-full border p-2 rounded'
          placeholder='Descripción'
          value={descripcion}
          onChange={e => setDescripcion(e.target.value)}
        />
        <input type='file' accept='image/*' onChange={e => setImagen(e.target.files[0])} />
        <button
          type='button'
          onClick={generarPdf}
