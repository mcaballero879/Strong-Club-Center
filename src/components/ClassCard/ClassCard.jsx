import { Link } from "react-router-dom";
import "./ClassCard.css";

function ClassCard({
  title,
  category,
  description,
  image,
  slug
}) {
  return (
    <article className="class-card">
      <Link to={`/clases/${slug}`} className="class-card__media">
        <img src={image} alt={title} />
        <span>{category}</span>
      </Link>

      <div className="class-card__body">
        <h3>{title}</h3>
        <p>{description}</p>

        <Link to={`/clases/${slug}`} className="class-card__link">
          VER CLASE <b>→</b>
        </Link>
      </div>
    </article>
  );
}

export default ClassCard;
