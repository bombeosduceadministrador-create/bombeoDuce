import { WHATSAPP_URL } from '../config'

export default function Footer() {
  return (
    /* ⬇️ CAMBIO AQUÍ: Sincronización de padding lateral con toda la landing */
    <footer className="bg-[#0d0d0d] border-t border-white/10 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {/* Usando la variable de tema font-condensed de Tailwind v4 */}
            <div 
              className="bg-[#CC1111] text-white font-black text-sm px-2 py-1 rounded font-condensed"
            >
              BD
            </div>
            <span 
              className="text-white font-bold uppercase tracking-wide text-sm font-condensed"
            >
              Bombeos Duce
            </span>
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
          <ul className="flex flex-col gap-3">
            <li>
              <a href={WHATSAPP_URL} className="flex items-center gap-2 text-white/40 text-xs hover:text-white/70 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
                WhatsApp
              </a>
            </li>
            <li>
              <a href="tel:+526645041753" className="flex items-center gap-2 text-white/40 text-xs hover:text-white/70 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +52 664 504 1753
              </a>
            </li>
            <li>
              <span className="flex items-center gap-2 text-white/40 text-xs">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Tijuana, B.C.
              </span>
            </li>
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