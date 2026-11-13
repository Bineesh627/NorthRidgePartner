import heroImg from '../assets/hero.jpg';
import { HIRING_MAILTO, handleHiringClick } from '../utils/discoveryCall';
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

            <div className="d-flex flex-column flex-wrap gap-3 mb-4">
              <a href="mailto:Recruitment@northridgepartner.com" className="btn btn-primary btn-rect w-auto">
                Contact us <i className="bi bi-arrow-right ms-1"></i>
              </a>
              <div className="text-white fw-semibold">Recruitment@northridgepartner.com</div>
              <a href={HIRING_MAILTO} className="btn btn-outline-light btn-rect px-4 w-auto" onClick={handleHiringClick}>
                Share a Hiring Requirement
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
    </section>
  );
}
