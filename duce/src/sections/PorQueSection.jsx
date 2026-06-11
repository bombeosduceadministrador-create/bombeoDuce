const FEATURES = [
  { title: 'Operadores certificados', desc: 'Personal capacitado en seguridad y manejo de equipo, con protocolos que protegen tu obra y a tu cuadrilla.' },
  { title: 'Puntualidad real', desc: 'Coordinamos la llegada con tu programa de colado para que el concreto nunca te espere.' },
  { title: 'Alto rendimiento', desc: 'Equipos potentes que mantienen un flujo constante, reduciendo tiempos muertos en obra.' },
  { title: 'Mantenimiento riguroso', desc: 'Bombas en óptimas condiciones para evitar fallas y paros inesperados durante el colado.' },
]

export default function PorQueSection() {
  return (
    <section id="nosotros" className="bg-[#111111] py-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Imagen izquierda */}
        <div className="relative rounded-lg overflow-hidden h-[480px]">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
            alt="Operador de bomba de concreto"
            className="w-full h-full object-cover"
          />
          {/* Caption sobre imagen */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <p className="text-white font-bold uppercase text-sm" style={{ fontFamily: '"Barlow Condensed", sans-serif' }}>
              Seguridad primero, siempre
            </p>
            <p className="text-white/60 text-xs mt-1">Cada servicio cumple con protocolos de seguridad en sitio.</p>
          </div>
        </div>

        {/* Contenido derecha */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#CC1111' }}>
            Por qué elegirnos
          </p>
          <h2
            className="font-black uppercase text-white leading-none mb-6"
            style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            La diferencia está<br />en la ejecución
          </h2>
          <p className="text-white/60 text-base mb-10 leading-relaxed">
            No solo rentamos bombas: te damos un servicio confiable que mantiene tu proyecto en tiempo y sin sorpresas.
          </p>

          {/* Grid de features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex gap-3">
                <div
                  className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: 'rgba(204,17,17,0.15)' }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#CC1111' }} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">{f.title}</p>
                  <p className="text-white/50 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}