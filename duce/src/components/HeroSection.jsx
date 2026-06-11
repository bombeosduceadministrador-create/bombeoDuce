import { WHATSAPP_URL } from '../config'

const STATS = [
  { value: '+500', label: 'Obras atendidas' },
  { value: '24/7', label: 'Disponibilidad' },
  { value: '+15', label: 'Años de experiencia' },
  { value: '100%', label: 'Operadores certificados' },
]

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/30156066/pexels-photo-30156066.jpeg"
          alt="Bomba de concreto en obra"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-20 lg:px-28 pt-32 pb-12" style={{ maxWidth: '52rem' }}>
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded w-fit mb-8"
          style={{ backgroundColor: '#CC1111' }}
        >
          <span className="w-1.5 h-1.5 bg-white rounded-full" />
          Operadores certificados
        </div>

        {/* Título */}
        <h1
          className="font-black uppercase text-white mb-8 leading-[0.9]"
          style={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontSize: 'clamp(3.5rem, 9vw, 7.5rem)',
            letterSpacing: '-0.01em',
          }}
        >
          Bombeamos tu{' '}
          <span style={{ color: '#CC1111' }}>concreto</span>
          {' '}donde otros no llegan
        </h1>

        {/* Subtítulo */}
        <p className="text-white/65 text-base max-w-md mb-10 leading-relaxed">
          Renta de bombas estacionarias de alto rendimiento para obra
          residencial, comercial e industrial. Llegamos rápido, colamos
          limpio y mantenemos tu obra en movimiento.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#cotizar"
            className="text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded transition-colors text-center"
            style={{ backgroundColor: '#CC1111' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#aa0e0e'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#CC1111'}
          >
            Cotizar mi obra →
          </a>
          
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="border border-white/30 hover:border-white/60 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded transition-colors text-center"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/10 bg-black/70 backdrop-blur-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center py-7 px-4">
              <span
                className="font-black text-white leading-none"
                style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '2.8rem' }}
              >
                {stat.value}
              </span>
              <span className="text-white/40 text-xs uppercase tracking-widest mt-1.5 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}