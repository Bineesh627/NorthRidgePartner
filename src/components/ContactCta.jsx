import { PARTNER_CTA_LABEL } from '../data/content';
import { HIRING_MAILTO, PARTNER_MAILTO, handlePartnerClick, handleHiringClick } from '../utils/discoveryCall';

export default function ContactCta() {
  return (
    <section className="footer-cta" id="contact">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <p className="eyebrow">Let's Work Together</p>
            <h2>Ready to Build Your Next Great Team?</h2>
          </div>
          <div className="col-12 col-lg-6 text-lg-end mt-4 mt-lg-0">
            <div className="d-flex flex-column flex-sm-row justify-content-lg-end gap-3 contact-cta-buttons">
              <a href={PARTNER_MAILTO} className="btn btn-primary btn-rect px-4 py-3" onClick={handlePartnerClick}>
                {PARTNER_CTA_LABEL} <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
              </a>
              <a href={HIRING_MAILTO} className="btn btn-outline-light btn-rect px-4 py-3" onClick={handleHiringClick}>
                Share a Hiring Requirement
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
