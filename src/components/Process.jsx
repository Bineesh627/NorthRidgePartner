import SectionHeader from './SectionHeader';
import { PROCESS_STEPS } from '../data/content';

export default function Process() {
  return (
    <section className="section-pad bg-white pt-2" id="process">
      <div className="container">
        <SectionHeader
          eyebrow="Our Process"
          title={
            <>
              A Structured Approach
              <br />
              for Better Hiring Outcomes.
            </>
          }
          desc="A proven four-step process designed to deliver the right talent, faster and with greater long-term impact."
          descClassName="mb-0"
        />

        <div className="row mt-4 pt-1">
          {PROCESS_STEPS.map((step, i) => (
            <div className="col-6 col-lg-3 process-step mb-4 mb-lg-0" key={step.number}>
              <div className="process-icon-wrap">
                <span className="step-number">{step.number}</span>
                <div className="process-icon">
                  <i className={`bi ${step.icon}`}></i>
                </div>
              </div>
              {i < PROCESS_STEPS.length - 1 && (
                <span className="process-arrow">
                  <i className="bi bi-arrow-right"></i>
                </span>
              )}
              <h5>{step.title}</h5>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
