import { TESTIMONIALS } from '../data/content';

export default function Testimonials() {
  return (
    <section className="bg-soft" style={{ padding: '2.5rem 0' }} id="insights">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <p className="eyebrow">What Our Clients Say</p>
            <h2 className="section-title" style={{ fontSize: '1.9rem' }}>
              Trusted by
              <br />
              Growing Businesses.
            </h2>
          </div>
          <div className="col-12 col-lg-8">
            <div className="row g-3">
              {TESTIMONIALS.map((t) => (
                <div className="col-12 col-lg-4" key={t.author}>
                  <div className="testimonial-card">
                    <p>{t.quote}</p>
                    <div className="who">{t.author}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
