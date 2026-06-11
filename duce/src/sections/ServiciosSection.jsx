const SERVICIOS = [
  {
    icon: '🏗️',
    title: 'Renta de bombas estacionarias',
    desc: 'Equipos de alta presión ideales para colados de gran volumen, edificios en altura y obras donde el acceso es limitado.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  },
  {
    icon: '🧱',
    title: 'Bombeo para losas y cimientos',
    desc: 'Colado preciso y continuo para losas, zapatas, columnas y cimentaciones en proyectos residenciales y comerciales.',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
  },
  {
    icon: '📍',
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
                <div className="absolute top-3 left-3 text-white text-xs p-2 rounded" style={{ backgroundColor: '#CC1111' }}>
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
                  className="text-xs font-bold uppercase tracking-widest"
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