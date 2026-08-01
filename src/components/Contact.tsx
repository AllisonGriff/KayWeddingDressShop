import { useState, type FormEvent } from 'react'
import './Contact.css'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL?.trim() || 'hello@kay.studio'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    setError('')

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            date: date || 'Not specified',
            message,
            _subject: `Kay inquiry from ${name}`,
            _template: 'table',
          }),
        },
      )

      const data = (await response.json()) as { success?: string | boolean; message?: string }

      if (!response.ok || data.success === 'false' || data.success === false) {
        throw new Error(data.message || 'Could not send right now.')
      }

      setStatus('sent')
      setName('')
      setEmail('')
      setDate('')
      setMessage('')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Could not send right now.')
    }
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__layout">
        <div className="contact__intro">
          <h2 id="contact-title">Want one?</h2>
          <p>
            Custom work by appointment. Tell me about the day, the dress
            fantasy, and your timeline.
          </p>
          <a className="contact__email" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </div>

        {status === 'sent' ? (
          <p className="contact__success" role="status">
            Got it — I’ll write you back soon.
          </p>
        ) : (
          <form className="contact__form" onSubmit={onSubmit} noValidate>
            <label className="contact__field">
              <span>Name</span>
              <input
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>

            <label className="contact__field">
              <span>Email</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>

            <label className="contact__field contact__field--wide">
              <span>Wedding / event date</span>
              <input
                name="date"
                type="text"
                placeholder="Approximate is fine"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </label>

            <label className="contact__field contact__field--wide">
              <span>What’s the dress vibe?</span>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Silhouette, fabric, attitude, budget notes — whatever helps"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </label>

            {status === 'error' && (
              <p className="contact__error" role="alert">
                {error} You can also email{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            )}

            <button
              className="contact__submit"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send inquiry'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
