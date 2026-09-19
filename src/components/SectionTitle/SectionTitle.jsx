import "./SectionTitle.css";

function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false
}) {
  return (
    <div className={`section__header section-title-block section-title-block--${align} ${dark ? "text-dark" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export default SectionTitle;
