import { SITE_NAME } from '../data/site'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__brand">{SITE_NAME}</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
