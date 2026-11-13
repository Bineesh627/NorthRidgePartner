import { NAV_LINKS, LINKEDIN_URL, CONTACT_EMAIL } from '../data/content';
import logo from '../assets/logo-full.png';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row align-items-center pb-3 mb-3 border-bottom footer-main-row">
          <div className="col-12 col-lg-3 text-center text-lg-start mb-3 mb-lg-0">
            <a className="navbar-brand" href="#home">
              <img className="brand-logo brand-logo-footer" src={logo} alt="North Ridge Partner – Building partnerships that perform" />
            </a>
          </div>

          <div className="col-12 col-lg-7">
            <nav className="footer-links d-flex justify-content-center gap-4" aria-label="Footer navigation">
              {NAV_LINKS.map((link, i) => (
                <a href={link.href} className={i === 0 ? 'active' : undefined} key={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="col-12 col-lg-2 text-center text-lg-end mt-3 mt-lg-0">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="social-sq me-2" style={{ background: '#0a66c2' }} aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>{' '}
            <a href="#" className="social-sq" style={{ background: 'var(--navy)' }} aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-contact text-center mb-3">
          <strong>Contact Us</strong>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>

        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
            <span className="copy">&copy; 2024 Northridge Partners. All rights reserved.</span>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end legal">
            <a href="#" className="me-4">Privacy Policy</a>{' '}
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
