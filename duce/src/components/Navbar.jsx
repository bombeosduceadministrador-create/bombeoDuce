import { useState } from 'react'
import { WHATSAPP_URL } from '../config'

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Por qué nosotros', href: '#nosotros' },
  { label: 'Obras', href: '#obras' },
  { label: 'Cotizar', href: '#cotizar' },
]

const PHONE = '+52 664 504 1753'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-black/95 backdrop-blur-sm border-b border-white/10">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 flex-shrink-0">
          <div
            className="text-white font-black text-sm px-2 py-1 rounded"
            style={{ backgroundColor: '#CC1111', fontFamily: '"Barlow Condensed", sans-serif' }}
          >
            BD
          </div>
          <span
            className="font-bold text-white uppercase tracking-wide text-sm"
            style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
          >
            Bombeos Duce
          </span>
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs text-white/60 hover:text-white uppercase tracking-widest transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Derecha desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            {PHONE}
          </a>
          
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="text-white text-xs font-bold px-5 py-2 rounded uppercase tracking-widest transition-colors"
            style={{ backgroundColor: '#CC1111' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#aa0e0e'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#CC1111'}
          >
            WhatsApp
          </a>
        </div>

        {/* Hamburguesa móvil */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      <div className={`fixed top-[49px] left-0 right-0 z-40 bg-black/98 border-b border-white/10 transition-all duration-300 overflow-hidden md:hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col px-6 py-4 gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm text-white/70 hover:text-white uppercase tracking-widest transition-colors border-b border-white/5"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="block text-center text-white text-sm font-bold uppercase tracking-widest py-3 rounded"
              style={{ backgroundColor: '#CC1111' }}
            >
              Cotizar por WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}