import { useEffect, useState } from 'react'
import { site } from '../data.js'

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V6a2 2 0 0 1 2-2h9" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  )
}

function CopyLink({ label, value }) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 1600)
    return () => clearTimeout(timer)
  }, [copied])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
    } catch {
      // clipboard blocked (e.g. insecure context) — the address is on screen to select by hand
    }
  }

  return (
    <>
      <div className={`drawer ${open ? 'is-open' : ''}`} id="email-drawer" inert={!open}>
        <span className="drawer-value">{value}</span>
        <button type="button" className="drawer-copy" onClick={copy} aria-label={copied ? 'Copied' : `Copy ${label.toLowerCase()} address`}>
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </div>
      <button type="button" className="footer-link" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="email-drawer">
        {label}
        <span className={`link-mark ${open ? 'is-open' : ''}`} aria-hidden="true" />
      </button>
    </>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-row">
        <div>
          <p className="footer-name">
            {site.firstName} {site.lastName}
          </p>
          <p className="footer-tagline">{site.tagline}</p>
        </div>
        <ul className="footer-links">
          {site.links.map((link) => (
            <li key={link.label}>
              {link.copy ? (
                <CopyLink label={link.label} value={link.copy} />
              ) : (
                <a className="footer-link" href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                  <span className="link-mark" aria-hidden="true" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
