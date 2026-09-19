import { Link, useParams } from "react-router-dom";
import { classes } from "../../data/classes";
import Button from "../../components/Button/Button";
import "./ClassDetail.css";

function ClassDetail() {
  const { slug } = useParams();
  const item = classes.find((entry) => entry.slug === slug);

  if (!item) {
    return (
      <section className="section">
        <div className="container">
          <h1>Clase no encontrada</h1>
          <Link to="/clases">Volver a clases</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="class-detail">
      <div className="class-detail__image">
        <img src={item.image} alt={item.title} />
      </div>

      <div className="class-detail__content">
        <span className="eyebrow">{item.category}</span>
        <h1>{item.title}</h1>
        <p>{item.description}</p>

        <ul>
          <li>Entrenamiento guiado</li>
          <li>Profesionales especializados</li>
          <li>Adaptable a distintos niveles</li>
        </ul>

        <Button to="/dia-de-prueba">PROBAR ESTA CLASE</Button>
      </div>
    </section>
  );
}

export default ClassDetail;
