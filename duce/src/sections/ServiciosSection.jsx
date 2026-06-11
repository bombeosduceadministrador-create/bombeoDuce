const SERVICIOS = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18" />
        <path d="M15 3v18" />
        <path d="M3 9h18" />
        <path d="M3 14h18" />
      </svg>
    ),
    title: 'Renta de bombas estacionarias',
    desc: 'Equipos de alta presión ideales para colados de gran volumen, edificios en altura y obras donde el acceso es limitado.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Bombeo para losas y cimientos',
    desc: 'Colado preciso y continuo para losas, zapatas, columnas y cimentaciones en proyectos residenciales y comerciales.',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Cobertura regional',
    desc: 'Llegamos a tu obra dentro de la ciudad y zona metropolitana, con logística puntual para no detener tu cronograma.',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80',
  },
]

export default function ServiciosSection() {
  return (
    <section id="servicios" className="bg-white py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#CC1111' }}>
            Lo que hacemos
          </p>
          <h2
            className="font-black uppercase text-black leading-none mb-4"
            style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Soluciones de bombeo<br />para cada obra
          </h2>
          <p className="text-gray-500 text-base max-w-xl">
            Equipos modernos, mantenimiento riguroso y un equipo que entiende los tiempos de la construcción.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICIOS.map((s) => (
            <div key={s.title} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Contenedor del Icono ajustado con flex para centrar perfectamente el SVG */}
                <div 
                  className="absolute top-3 left-3 text-white p-2.5 rounded flex items-center justify-center" 
                  style={{ backgroundColor: '#CC1111' }}
                >
                  {s.icon}
                </div>
              </div>
              <div className="p-6">
                <h3
                  className="font-black uppercase text-black mb-2"
                  style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '1.1rem' }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                
                <a
                  href="#cotizar"
                  className="text-xs font-bold uppercase tracking-widest transition-all hover:opacity-80"
                  style={{ color: '#CC1111' }}
                >
                  Cotizar este servicio ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}