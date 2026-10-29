import SectionHeader from './SectionHeader';
import { INDUSTRIES } from '../data/content';

export default function Industries() {
  return (
    <section className="section-pad bg-white pt-2" id="industries">
      <div className="container">
        <SectionHeader
          eyebrow="Industry Focus"
          title={
            <>
              Deep Expertise in
              <br />
              High-Growth Sectors.
            </>
          }
          desc="We understand the unique talent challenges in technology-driven businesses and provide tailored hiring solutions."
          link={{ href: '#industries', label: 'Our Industry Expertise' }}
        />

        <div className="row g-3">
          {INDUSTRIES.map((industry) => (
            <div className="col-12 col-lg-4" key={industry.title}>
              <div
                className="industry-card"
                style={{ backgroundImage: `url(${industry.image})` }}
              >
                <div className="industry-overlay">
                  <h4>{industry.title}</h4>
                  <p>{industry.text}</p>
                </div>
                <a href="#contact" className="circle-btn industry-btn">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
