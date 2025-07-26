import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'

export default function Declaracion () {
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [imagen, setImagen] = useState(null)

  const generarPdf = async () => {
    const { PDFDocument, StandardFonts } = await import('pdf-lib')
    const templateBytes = await fetch(`${import.meta.env.BASE_URL}accident-template.pdf`).then(r => r.arrayBuffer())
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
        img = await pdfDoc.embedJpg(bytes)
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
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
        >
          Descargar PDF
        </button>
      </div>
    </main>
  )
}
