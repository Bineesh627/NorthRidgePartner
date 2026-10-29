import heroImg from '../assets/hero.jpg';
import { HERO_STATS } from '../data/content';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <img
        className="hero-photo"
        src={heroImg}
        alt="Recruiter in conversation with a candidate"
      />
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="row">
          <div className="col-lg-7">
            <p className="hero-tagline">
              <span>Strategic Talent</span> Partner for a Brighter Tomorrow.
            </p>
            <h1 className="hero-title">
              Build the Right Teams.
              <br />
              <span>Scale with Confidence.</span>
            </h1>
            <p className="hero-text">
              Strategic recruitment, talent advisory and HR solutions for IT, fintech and
              high-growth startups.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-4">
              <a href="#contact" className="btn btn-primary btn-rect">
                Discuss a Hiring Requirement <i className="bi bi-arrow-right ms-1"></i>
              </a>
              <a href="#services" className="btn btn-outline-light btn-rect px-4">
                Explore Our Services
              </a>
            </div>

            <div className="d-flex flex-wrap gap-4 pt-2">
              {HERO_STATS.map((stat) => (
                <div className="hero-stat d-flex align-items-center gap-2" key={stat.title}>
                  <i className={`bi ${stat.icon}`}></i>
                  <div>
                    <div className="t">{stat.title}</div>
                    <div className="s">{stat.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="decorative-text">
        People
        <br />
        <span className="mid">Potential</span>
        <br />
        <span className="under">Progress</span>
      </div>
    </section>
  );
}
