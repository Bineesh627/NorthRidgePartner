import Lines from './Lines';
import SectionHeader from './SectionHeader';
import { SOLUTIONS } from '../data/content';

export default function Solutions() {
  return (
    <section className="section-pad bg-white" id="services">
      <div className="container">
        <SectionHeader
          eyebrow="Our Solutions"
          title={
            <>
              More Than Recruitment.
              <br />
              <span>A Strategic Talent Partner.</span>
            </>
          }
          desc="We combine deep industry knowledge with a structured, people-first approach to help you hire, plan and build high-performing teams."
          link={{ href: '#process', label: 'View All Services' }}
        />

        <div className="row g-3">
          {SOLUTIONS.map((card) => (
            <div className="col-12 col-lg-4" key={card.titleLines[0]}>
              <div className="solution-card">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="solution-icon">
                    <i className={`bi ${card.icon}`}></i>
                  </div>
                  <h4>
                    <Lines lines={card.titleLines} />
                  </h4>
                </div>
                <p className="desc">{card.desc}</p>
                <ul className="check-list">
                  {card.items.map((item) => (
                    <li key={item}>
                      <i className="bi bi-check-lg"></i> {item}
                    </li>
                  ))}
                </ul>
                <div className="d-flex justify-content-between align-items-center">
                  <a href="#contact" className="learn-more">
                    Learn More <i className="bi bi-arrow-right ms-1"></i>
                  </a>
                  <a href="#contact" className="circle-btn bg-primary text-white">
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
