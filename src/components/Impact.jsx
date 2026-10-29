import SectionHeader from './SectionHeader';
import { IMPACT_CASES } from '../data/content';

export default function Impact() {
  return (
    <section className="section-pad bg-white pt-2" id="case-studies">
      <div className="container">
        <SectionHeader
          eyebrow="Our Impact"
          title={
            <>
              Real Impact.
              <br />
              Real Results.
            </>
          }
          desc="Examples of how we've helped clients build high-performing teams."
          link={{ href: '#case-studies', label: 'View All Case Studies' }}
        />

        <div className="row g-3">
          {IMPACT_CASES.map((item) => (
            <div className="col-12 col-lg-4" key={item.title}>
              <div className="impact-card">
                <h5>{item.title}</h5>
                <p>{item.text}</p>
                <div className="row text-center stats g-0">
                  {item.stats.map((stat) => (
                    <div className="col-4" key={stat.label}>
                      <div className="stat-number">
                        {stat.value}
                        {stat.unit && (
                          <>
                            {' '}
                            <small>{stat.unit}</small>
                          </>
                        )}
                      </div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
