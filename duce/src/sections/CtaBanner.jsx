import { WHATSAPP_URL } from '../config'

export default function CtaBanner() {
  return (
    <section className="relative py-28 px-8 md:px-16 overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#CC1111' }}>
          Listos para tu próximo colado
        </p>
        <h2
          className="font-black uppercase text-white leading-none mb-6"
          style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          Tu obra no se detiene.<br />Nosotros tampoco.
        </h2>
        <p className="text-white/60 text-base max-w-xl mb-10 leading-relaxed">
          Agenda tu bomba con anticipación y asegura un colado limpio, continuo y a tiempo. Cobertura en toda la zona metropolitana.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#cotizar"
            className="text-white text-sm font-bold uppercase tracking-wide px-8 py-4 rounded text-center transition-colors"
            style={{ backgroundColor: '#CC1111' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#aa0e0e'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#CC1111'}
          >
            Agendar bombeo →
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="border border-white/30 hover:border-white text-white text-sm font-bold uppercase tracking-wide px-8 py-4 rounded text-center transition-colors"
          >
            Consultar disponibilidad
          </a>
        </div>
      </div>
    </section>
  )
}