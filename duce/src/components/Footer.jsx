import { WHATSAPP_URL } from '../config'

const PHONE = '+52 664 504 1753'

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/10 py-16">
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="text-white font-black text-sm px-2 py-1 rounded"
                style={{ backgroundColor: '#CC1111', fontFamily: '"Barlow Condensed", sans-serif' }}
              >
                BD
              </div>
              <span
                className="text-white font-bold uppercase tracking-wide text-sm"
                style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
              >
                Bombeos Duce
              </span>
            </div>
            <p className="text-white/40 text-xs leading-relaxed max-w-xs">
              Renta de bombas estacionarias con operadores certificados para obra residencial, comercial e industrial.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <p
              className="text-white font-bold uppercase text-xs tracking-widest mb-4"
              style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
            >
              Enlaces
            </p>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Inicio', href: '#inicio' },
                { label: 'Servicios', href: '#servicios' },
                { label: 'Por qué nosotros', href: '#nosotros' },
                { label: 'Cotizar', href: '#cotizar' },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/40 text-xs hover:text-white/70 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p
              className="text-white font-bold uppercase text-xs tracking-widest mb-4"
              style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
            >
              Contacto
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-white/40 text-xs hover:text-white/70 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/40 text-xs hover:text-white/70 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.522 5.847L.057 23.882l6.197-1.424A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.002-1.368l-.36-.213-3.678.845.875-3.587-.234-.369A9.818 9.818 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/40 text-xs">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Tijuana, B.C.
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} Bombeos Duce. Todos los derechos reservados.</p>
          <p className="text-white/30 text-xs">Operadores certificados · Disponibilidad 24/7</p>
        </div>
      </div>
    </footer>
  )
}