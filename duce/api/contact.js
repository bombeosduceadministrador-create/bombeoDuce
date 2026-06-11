import nodemailer from 'nodemailer'

const ALLOWED_WORK_TYPES = ['Residencial', 'Comercial', 'Industrial', '']

function sanitize(str = '') {
  return String(str)
    .trim()
    .replace(/[&<>"'\/]/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
    }[char]))
    .slice(0, 500)
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isValidPhone(phone) {
  return /^[\d\s\-\+\(\)]{7,20}$/.test(phone)
}

export default async function handler(req, res) {
  const origin = req.headers.origin || ''
  const allowedOrigins = [
    process.env.ALLOWED_ORIGIN,
    'http://localhost:5173',
    'http://localhost:3000',
  ].filter(Boolean)

  const originAllowed = allowedOrigins.some((allowed) => origin.startsWith(allowed))
  if (!originAllowed) {
    return res.status(403).json({ error: 'Origen no permitido' })
  }

  res.setHeader('Access-Control-Allow-Origin', origin)
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' })
  }

  const requiredEnv = ['GMAIL_USER', 'GMAIL_APP_PASSWORD', 'CONTACT_EMAIL']
  const missingEnv = requiredEnv.filter((name) => !process.env[name])
  if (missingEnv.length > 0) {
    console.error('[contact] Faltan variables de entorno:', missingEnv.join(', '))
    return res.status(500).json({ error: 'Configuración del servidor incompleta' })
  }

  const { name, phone, email, workType, details, _trap } = req.body

  // Honeypot
  if (_trap && _trap.trim() !== '') {
    return res.status(200).json({ ok: true })
  }

  // Validación server-side
  const cleanName = sanitize(name)
  const cleanPhone = sanitize(phone)
  const cleanEmail = sanitize(email)
  const cleanWorkType = sanitize(workType)
  const cleanDetails = sanitize(details)

  const errors = []
  if (!cleanName || cleanName.length < 2) errors.push('Nombre inválido')
  if (!cleanPhone || !isValidPhone(cleanPhone)) errors.push('Teléfono inválido')
  if (cleanEmail && !isValidEmail(cleanEmail)) errors.push('Correo electrónico inválido')
  if (cleanWorkType && !ALLOWED_WORK_TYPES.includes(cleanWorkType)) errors.push('Tipo de obra inválido')
  if (cleanDetails.length > 1000) errors.push('Los detalles son demasiado largos')

  if (errors.length > 0) {
    return res.status(400).json({ error: errors.join('. ') })
  }

  const ip =
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.socket?.remoteAddress ||
    'unknown'

  // Transporter de Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Formulario Bombeos Duce" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: cleanEmail || process.env.GMAIL_USER,
      subject: `Nueva cotización: ${cleanWorkType || 'Sin tipo'} — ${cleanName}`,
      text: `Nueva solicitud de cotización\n\nNombre: ${cleanName}\nTeléfono: ${cleanPhone}\n${cleanEmail ? `Correo: ${cleanEmail}\n` : ''}${cleanWorkType ? `Tipo de obra: ${cleanWorkType}\n` : ''}${cleanDetails ? `Detalles:\n${cleanDetails}\n` : ''}\nIP: ${ip}\nFecha: ${new Date().toLocaleString('es-MX', { timeZone: 'America/Tijuana' })}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #CC1111; margin-bottom: 4px;">Nueva solicitud de cotización</h2>
          <p style="color: #666; font-size: 13px; margin-top: 0;">Recibida desde el formulario web de Bombeos Duce</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; color: #999; width: 140px; vertical-align: top;">Nombre</td>
              <td style="padding: 10px 0; color: #111; font-weight: 600;">${cleanName}</td>
            </tr>
            <tr style="background: #fafafa;">
              <td style="padding: 10px 0; color: #999; vertical-align: top;">Teléfono</td>
              <td style="padding: 10px 0; color: #111; font-weight: 600;">${cleanPhone}</td>
            </tr>
            ${cleanEmail ? `
            <tr>
              <td style="padding: 10px 0; color: #999; vertical-align: top;">Correo</td>
              <td style="padding: 10px 0; color: #111;">${cleanEmail}</td>
            </tr>` : ''}
            ${cleanWorkType ? `
            <tr style="background: #fafafa;">
              <td style="padding: 10px 0; color: #999; vertical-align: top;">Tipo de obra</td>
              <td style="padding: 10px 0; color: #111;">${cleanWorkType}</td>
            </tr>` : ''}
            ${cleanDetails ? `
            <tr>
              <td style="padding: 10px 0; color: #999; vertical-align: top;">Detalles</td>
              <td style="padding: 10px 0; color: #333; white-space: pre-wrap;">${cleanDetails}</td>
            </tr>` : ''}
          </table>

          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 11px; color: #bbb;">IP: ${ip} · ${new Date().toLocaleString('es-MX', { timeZone: 'America/Tijuana' })}</p>
        </div>
      `,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('[contact] Error al enviar correo:', err)
    return res.status(500).json({
      error: 'No se pudo enviar tu solicitud. Por favor contáctanos directamente por WhatsApp.',
    })
  }
}