import Logo from './Logo.jsx'
import { site } from '../data.js'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-logo">
        <Logo />
      </div>
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
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <span className="arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
