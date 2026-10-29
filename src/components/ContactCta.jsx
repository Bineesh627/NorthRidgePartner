export default function ContactCta() {
  return (
    <section className="footer-cta" id="contact">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-7">
            <p className="eyebrow">Let's Work Together</p>
            <h2>Ready to Build Your Next Great Team?</h2>
          </div>
          <div className="col-12 col-lg-5 text-lg-end mt-4 mt-lg-0">
            <div className="d-flex flex-column flex-sm-row justify-content-lg-end gap-3">
              <a href="#contact" className="btn btn-primary btn-rect px-4 py-3">
                Book a 30-Minute Discovery Call
              </a>
              <a href="#contact" className="btn btn-outline-light btn-rect px-4 py-3">
                Submit a Hiring Brief
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
