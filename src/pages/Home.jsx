{rows.map((row, idx) => (
  <div key={idx} className="overflow-hidden">
    <Marquee gradient={false} speed={30} pauseOnHover autoFill>
      {row.map((key, i) => {
        const basePath = '/logos/'
        const baseName = key === 'qualitas' ? 'qualitas-auto' : key

        return (
          <img
            key={`${key}-${i}`}
            src={`${basePath}${baseName}.webp`}
            alt={formatTitle(key)}
            className="inline-block h-12 mx-3 flex-shrink-0"
            onError={(e) => {
              e.target.onerror = null
              e.target.src = `${basePath}${baseName}.svg`
              setTimeout(() => {
                if (e.target.src.includes('.svg')) {
                  e.target.onerror = null
                  e.target.src = `${basePath}${baseName}.png`
                }
              }, 100)
            }}
          />
        )
      })}
    </Marquee>
  </div>
))}
