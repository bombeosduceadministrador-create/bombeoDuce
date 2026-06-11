import { WHATSAPP_URL } from '../config'

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/10 py-12 px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-[#CC1111] text-white font-black text-sm px-2 py-1 rounded"
              style={{ fontFamily: '"Barlow Condensed", sans-serif' }}>BD</div>
            <span className="text-white font-bold uppercase tracking-wide text-sm"
              style={{ fontFamily: '"Barlow Condensed", sans-serif' }}>Bombeos Duce</span>
          </div>
          <p className="text-white/40 text-xs leading-relaxed max-w-xs">
            Renta de bombas de concreto con operadores certificados. Confiabilidad y potencia para mantener tu obra en movimiento.
          </p>
        </div>

        {/* Servicios */}
        <div>
          <p className="text-white font-bold uppercase text-xs tracking-widest mb-4">Servicios</p>
          <ul className="flex flex-col gap-2">
            {['Renta de bombas estacionarias', 'Bombeo para losas y cimientos', 'Obra residencial y comercial', 'Cobertura regional'].map(s => (
              <li key={s}>
                <a href="#servicios" className="text-white/40 text-xs hover:text-white/70 transition-colors">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <p className="text-white font-bold uppercase text-xs tracking-widest mb-4">Contacto</p>
          <ul className="flex flex-col gap-2">
            <li><a href={WHATSAPP_URL} className="text-white/40 text-xs hover:text-white/70 transition-colors">💬 WhatsApp</a></li>
            <li><a href="tel:+526645041753" className="text-white/40 text-xs hover:text-white/70 transition-colors">📞 +52 664 504 1753</a></li>
            <li><span className="text-white/40 text-xs">📍 Tijuana, B.C.</span></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-white/30 text-xs">© 2026 Bombeos Duce. Todos los derechos reservados.</p>
        <p className="text-white/30 text-xs">Operadores certificados · Disponibilidad 24/7</p>
      </div>
    </footer>
  )
}