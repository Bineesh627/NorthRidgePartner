import logo from '../assets/herambition-logo.webp';
import bg from '../assets/herambition-bg.jpg';

const HERAMBITION_URL = 'https://her-ambition-zeta.vercel.app';

export default function HerAmbition() {
  return (
    <section className="herambition" id="herambition">
      <img className="her-bg" src={bg} alt="" aria-hidden="true" />
      <div className="her-overlay"></div>
      <div className="container-fluid p-0 h-100 her-content">
        <div className="row g-0 align-items-center h-100">
          <div className="col-12 col-lg-4 col-text ps-5">
            <p className="small-label">Our Social Initiative</p>
            <h2>HerAmbition</h2>
            <p className="mb-0" style={{ fontSize: '0.88rem' }}>
              Championing women's career comebacks and creating pathways to leadership.
            </p>
          </div>

          <div className="col-12 col-lg-4 col-img">
            <img
              className="her-logo-img"
              src={logo}
              alt="HerAmbition – Lead with Grace & Impact"
            />
          </div>

          <div className="col-12 col-lg-4 col-text pe-5">
            <p>
              We connect talented women with opportunities, support their return to the
              workplace and partner with businesses to build more inclusive teams.
            </p>
            <a href={HERAMBITION_URL} target="_blank" rel="noopener noreferrer">
              Learn More About HerAmbition <i className="bi bi-arrow-right ms-1"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
