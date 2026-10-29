import { WHY_ITEMS } from '../data/content';

export default function WhyChoose() {
  return (
    <section className="why-section bg-white" id="about">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-3">
            <p className="eyebrow">Why Clients Choose Us</p>
            <h2 className="section-title" style={{ fontSize: '1.9rem' }}>
              A Partner You Can Trust.
            </h2>
          </div>
          <div className="col-12 col-lg-9">
            <div className="row g-4">
              {WHY_ITEMS.map((item) => (
                <div
                  className="col-12 col-sm-6 col-lg-3 why-item"
                  key={item.title}
                >
                  <i className={`bi ${item.icon}`}></i>
                  <div className="why-body">
                    <h6>{item.title}</h6>
                    <p>{item.text}</p>
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
