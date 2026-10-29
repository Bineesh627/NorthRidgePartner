import { DIFFERENTIATOR_ITEMS } from '../data/content';

export default function Differentiator() {
  return (
    <section className="diff" id="differentiator">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-6">
            <span className="diff-badge">Our Differentiator</span>
            <h2 className="diff-title">Hiring doesn&rsquo;t end at the offer rollout.</h2>
            <p className="diff-text">
              We stay involved to ensure successful closure and smooth onboarding, managing
              every risk between &ldquo;Yes&rdquo; and &ldquo;Day One&rdquo;.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <div className="row g-3">
              {DIFFERENTIATOR_ITEMS.map((item) => (
                <div className="col-12 col-md-6" key={item}>
                  <div className="diff-card">
                    <i className="bi bi-check-lg"></i>
                    <span>{item}</span>
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
