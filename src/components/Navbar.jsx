import { NAV_LINKS } from '../data/content';
import logo from '../assets/logo-mark.png';

export default function Navbar({ activeId, menuOpen, setMenuOpen }) {
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img className="brand-logo" src={logo} alt="North Ridge Partner" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0" id="navList">
            {NAV_LINKS.map((link) => (
              <li className="nav-item" key={link.href}>
                <a
                  className={`nav-link${activeId === link.href ? ' active' : ''}`}
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary btn-rect">
            Book a Call <i className="bi bi-arrow-right ms-1"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}
