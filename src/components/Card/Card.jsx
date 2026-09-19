import "./Card.css";

function Card({
  children,
  image,
  title,
  description,
  className = ""
}) {
  return (
    <article className={`card ${className}`}>
      {image && (
        <div className="card__image">
          <img src={image} alt="" />
        </div>
      )}

      <div className="card__body">
        {title && <h3 className="card__title">{title}</h3>}
        {description && <p className="card__description">{description}</p>}
        {children}
      </div>
    </article>
  );
}

export default Card;
