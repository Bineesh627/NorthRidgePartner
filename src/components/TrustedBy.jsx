import Lines from './Lines';
import { TRUSTED_BY } from '../data/content';

export default function TrustedBy() {
  return (
    <section className="trusted">
      <div className="container">
        <p className="trusted-label">Trusted by growing businesses in</p>
        <div className="row g-4">
          {TRUSTED_BY.map((item) => (
            <div className="col-12 col-md-4 d-flex align-items-center" key={item.title}>
              <div className="icon-box me-3">
                <i className={`bi ${item.icon}`}></i>
              </div>
              <div>
                <h6>{item.title}</h6>
                <p>
                  <Lines lines={item.lines} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
