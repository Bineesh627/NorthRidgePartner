// Shared header used by Solutions, Process, Industries and Impact:
// eyebrow + big title on the left, short description (+ optional link) on the right.
export default function SectionHeader({ eyebrow, title, desc, descClassName = '', link }) {
  return (
    <div className="row align-items-end mb-4">
      <div className="col-12 col-lg-7">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="col-12 col-lg-5 mt-3 mt-lg-0">
        <p className={`section-desc ${descClassName}`.trim()}>{desc}</p>
        {link && (
          <a href={link.href} className="link-blue">
            {link.label} <i className="bi bi-arrow-right ms-1"></i>
          </a>
        )}
      </div>
    </div>
  );
}
