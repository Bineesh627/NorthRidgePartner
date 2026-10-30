import {
  DISCOVERY_CALL_MAILTO,
  handleDiscoveryCallClick,
  HIRING_BRIEF_MAILTO,
  handleHiringBriefClick,
} from '../utils/discoveryCall';

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
            <div className="d-flex flex-column flex-sm-row justify-content-lg-end gap-3">
              <a href={DISCOVERY_CALL_MAILTO} className="btn btn-primary btn-rect px-4 py-3" onClick={handleDiscoveryCallClick}>
                Talk to our Talent Partner or Talent Strategist
              </a>
              <a href={HIRING_BRIEF_MAILTO} className="btn btn-outline-light btn-rect px-4 py-3" onClick={handleHiringBriefClick}>
                Submit a Hiring Brief
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
