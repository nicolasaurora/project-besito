import { useState } from 'react'

const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

const FinalCta = () => {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async event => {
    event.preventDefault()

    if (!formEndpoint) {
      setStatus('configuration-error')
      return
    }

    const form = event.currentTarget
    setStatus('submitting')

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) throw new Error('No se pudo enviar el formulario.')

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="final-cta" id="presupuesto">
      <span className="final-cta-eyebrow">¿HABLAMOS?</span>

      <h2>Pedí besito para tu día a día, reuniones y eventos. </h2>

      <p>Contanos sobre tu empresa y armamos una propuesta a medida.</p>

      <form className="final-cta-form" onSubmit={handleSubmit}>
        <div className="final-cta-form-field">
          <label htmlFor="contact-name">Nombre y apellido</label>
          <input id="contact-name" name="nombre" type="text" autoComplete="name" required />
        </div>

        <div className="final-cta-form-field">
          <label htmlFor="company-name">Empresa</label>
          <input id="company-name" name="empresa" type="text" autoComplete="organization" required />
        </div>

        <div className="final-cta-form-field">
          <label htmlFor="corporate-email">Email corporativo</label>
          <input id="corporate-email" name="email" type="email" autoComplete="email" required />
        </div>

        <div className="final-cta-form-field">
          <label htmlFor="employees">Colaboradores aproximados</label>
          <input id="employees" name="colaboradores" type="number" min="1" inputMode="numeric" required />
        </div>

        <div className="final-cta-form-field final-cta-form-field-message">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="mensaje" rows="5" required />
        </div>

        <input className="form-honeypot" type="text" name="_gotcha" tabIndex="-1" autoComplete="off" aria-hidden="true" />

        <div className="final-cta-form-footer">
          <button className="final-cta-button" type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Enviando...' : 'Enviar propuesta'}
          </button>

          <p className="final-cta-form-status" aria-live="polite">
            {status === 'success' && '¡Gracias! Recibimos tu consulta y te contactaremos pronto.'}
            {status === 'error' && 'No pudimos enviar tu consulta. Probá nuevamente o escribinos por WhatsApp.'}
            {status === 'configuration-error' && 'El formulario todavía está siendo configurado. Escribinos por WhatsApp.'}
          </p>
        </div>
      </form>

      <span className="final-cta-message">Un poquito mejor ya es un montón.</span>
    </section>
  )
}

export default FinalCta
