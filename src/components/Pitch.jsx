import { DISCOVERY_CALL_MAILTO, handleDiscoveryCallClick } from '../utils/discoveryCall';

export default function Pitch() {
  return (
    <section className="pitch" id="partnership">
      <div className="container">
        <div className="pitch-inner">
          <p className="pitch-eyebrow">Building Partnerships That Perform</p>
          <h2 className="pitch-title">
            Build High-Impact Teams for a <em>Fast-Changing</em> World.
          </h2>
          <p className="pitch-text">
            We partner with AI companies, fintech firms, and startups to solve their most
            critical challenge&mdash;hiring the right talent to scale with confidence.
          </p>
          <a href={DISCOVERY_CALL_MAILTO} className="pitch-btn" onClick={handleDiscoveryCallClick}>
            Book a Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}
