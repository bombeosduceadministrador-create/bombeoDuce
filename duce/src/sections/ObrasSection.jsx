const OBRAS = [
  {
    title: 'Proyecto 1',
    desc: 'Bombeo en obra residencial con acceso estrecho.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    tag: 'Residencial',
  },
  {
    title: 'Proyecto 2',
    desc: 'Servicio continuo para colado industrial de gran volumen.',
    img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&q=80',
    tag: 'Industrial',
  },
  {
    title: 'Proyecto 3',
    desc: 'Entrega rápida y limpieza de líneas en obra comercial.',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80',
    tag: 'Comercial',
  },
]

export default function ObrasSection() {
  return (
    <section id="obras" className="bg-white py-24">
     <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#CC1111' }}>
          Nuestros trabajos
        </p>
        <h2
          className="font-black uppercase text-black leading-none mb-4"
          style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          Obras realizadas
        </h2>
        <p className="text-gray-500 text-base max-w-xl mb-12">
          Confiaron en nosotros proyectos exigentes donde el bombeo puntual y seguro fue clave para avanzar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OBRAS.map((o) => (
            <div key={o.title} className="relative rounded-lg overflow-hidden h-64 group cursor-pointer">
              <img
                src={o.img}
                alt={o.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div
                className="absolute top-4 left-4 text-xs font-bold uppercase tracking-widest text-white px-2 py-1 rounded"
                style={{ backgroundColor: '#CC1111' }}
              >
                {o.tag}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p
                  className="text-white font-bold uppercase text-sm mb-1"
                  style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
                >
                  {o.title}
                </p>
                <p className="text-white/70 text-xs mb-3">{o.desc}</p>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#CC1111' }}>
                  Cotizar este servicio ↗
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}