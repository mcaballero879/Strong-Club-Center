import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ClassCard from "../../components/ClassCard/ClassCard";
import { classes } from "../../data/classes";
import "./Classes.css";

function Classes() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">STRONG CLUB CENTER</span>
          <h1>NUESTRAS<br /><span>CLASES.</span></h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="ELEGÍ TU ENTRENAMIENTO"
            title="Encontrá tu disciplina"
            description="Distintas modalidades, un mismo objetivo: ayudarte a entrenar mejor."
          />

          <div className="classes-page__grid">
            {classes.map((item) => (
              <ClassCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Classes;
