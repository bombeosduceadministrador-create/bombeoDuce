import { useState } from 'react'
import { WHATSAPP_URL } from '../config'

const PHONE = '+52 664 504 1753'

const CONTACT_ROWS = [
  { 
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ), 
    label: 'WhatsApp', 
    sub: 'Respuesta inmediata', 
    href: WHATSAPP_URL 
  },
  { 
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ), 
    label: 'Teléfono', 
    sub: PHONE, 
    href: `tel:${PHONE}` 
  },
  { 
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ), 
    label: 'Correo', 
    sub: 'Escríbenos por este formulario', 
    href: null 
  },
  { 
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ), 
    label: 'Cobertura', 
    sub: 'Tijuana y zona metropolitana', 
    href: null 
  },
]

const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
}

export default function CotizarSection() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [workType, setWorkType] = useState('')
  const [details, setDetails] = useState('')
  const [status, setStatus] = useState(STATUS.IDLE)
  const [errorMsg, setErrorMsg] = useState('')
  const [trap, setTrap] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!name.trim() || !phone.trim()) {
      setErrorMsg('Por favor completa tu nombre y teléfono.')
      setStatus(STATUS.ERROR)
      return
    }

    setStatus(STATUS.LOADING)
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          workType,
          details,
          _trap: trap,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Error desconocido')
      }

      setStatus(STATUS.SUCCESS)
      setName('')
      setPhone('')
      setEmail('')
      setWorkType('')
      setDetails('')
    } catch (err) {
      setErrorMsg(err.message || 'No se pudo enviar. Intenta por WhatsApp.')
      setStatus(STATUS.ERROR)
    }
  }

  const inputClass =
    'w-full border border-gray-200 rounded px-4 py-3 text-sm text-black placeholder-gray-400 focus:outline-none focus:border-gray-400'

  return (
    <section id="cotizar" className="bg-white py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#CC1111' }}>
          Hablemos de tu obra
        </p>
        <h2
          className="font-black uppercase text-black leading-none mb-4"
          style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          Cotiza tu bombeo hoy
        </h2>
        <p className="text-gray-500 text-base max-w-xl mb-12">
          Cuéntanos los detalles de tu proyecto y te enviamos una cotización clara, sin compromiso. Respondemos rápido.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Columna izquierda: contacto */}
          <div className="flex flex-col gap-4">
            {CONTACT_ROWS.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
              >
                {/* Contenedor del Icono */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0"
                  style={{ backgroundColor: '#CC1111' }}
                >
                  {c.icon}
                </div>
                <div>
                  <p className="text-black font-bold text-sm">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-gray-500 text-xs hover:text-black transition-colors">
                      {c.sub}
                    </a>
                  ) : (
                    <p className="text-gray-500 text-xs">{c.sub}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Columna derecha: formulario */}
          {status === STATUS.SUCCESS ? (
            <div className="flex flex-col items-center justify-center gap-4 text-center py-12">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                style={{ backgroundColor: '#CC1111' }}
              >
                ✓
              </div>
              <h3 className="text-black font-black uppercase text-xl" style={{ fontFamily: '"Barlow Condensed", sans-serif' }}>
                ¡Solicitud enviada!
              </h3>
              <p className="text-gray-500 text-sm max-w-xs">
                Recibimos tu cotización y nos pondremos en contacto contigo a la brevedad.
              </p>
              <button
                onClick={() => setStatus(STATUS.IDLE)}
                className="text-xs font-bold uppercase tracking-wide underline text-gray-400 hover:text-black transition-colors mt-2"
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              {/* Honeypot */}
              <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
                <input
                  type="text"
                  name="_trap"
                  tabIndex={-1}
                  autoComplete="off"
                  value={trap}
                  onChange={(e) => setTrap(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-1 block">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                    disabled={status === STATUS.LOADING}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-1 block">
                    Teléfono *
                  </label>
                  <input
                    type="text"
                    placeholder="664 555 5555"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputClass}
                    disabled={status === STATUS.LOADING}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-1 block">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  disabled={status === STATUS.LOADING}
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-1 block">
                  Tipo de obra
                </label>
                <select
                  value={workType}
                  onChange={(e) => setWorkType(e.target.value)}
                  className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-gray-400 focus:outline-none focus:border-gray-400 bg-white"
                  disabled={status === STATUS.LOADING}
                >
                  <option value="">Selecciona una opción</option>
                  <option>Residencial</option>
                  <option>Comercial</option>
                  <option>Industrial</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-1 block">
                  Detalles de tu obra
                </label>
                <textarea
                  rows={4}
                  placeholder="Volumen de concreto, ubicación, fecha estimada..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className={`${inputClass} resize-none`}
                  disabled={status === STATUS.LOADING}
                />
              </div>

              {status === STATUS.ERROR && errorMsg && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded px-4 py-3">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === STATUS.LOADING}
                className="w-full text-white text-sm font-bold uppercase tracking-wide py-4 rounded transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#CC1111' }}
                onMouseEnter={(e) => {
                  if (status !== STATUS.LOADING) e.currentTarget.style.backgroundColor = '#aa0e0e'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#CC1111'
                }}
              >
                {status === STATUS.LOADING ? 'Enviando...' : 'Solicitar cotización'}
              </button>

              {/* Ajustado a text-gray-500 para mayor legibilidad */}
              <p className="text-gray-500 text-xs text-center">
                Al enviar aceptas ser contactado por Bombeos Duce.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}