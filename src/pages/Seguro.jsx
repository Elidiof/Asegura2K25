export default function Seguro() {
  const { name } = useParams()
  const data = productData[name]

  if (!data) { /* …not found… */ }

  return (
    <>
      <Helmet>…</Helmet>
-     {/* No pongas aquí ningún header extra ni subtítulo */}
      <main className="container mx-auto p-4 mt-8">
        {/* Le damos algo de espacio arriba con mt-8 */}
        <div className="flex items-center space-x-4 mb-6">
          <img src={data.icon} alt={data.title} className="h-16" />
          <h1 className="text-2xl font-bold">{data.title}</h1>
        </div>
        {/* …resto de la página… */}
      </main>
    </>
  )
}
