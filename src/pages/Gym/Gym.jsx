import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Card from "../../components/Card/Card";
import "./Gym.css";

const features = [
  ["Equipamiento", "Máquinas y elementos pensados para trabajar fuerza y rendimiento."],
  ["Espacio", "Un ambiente amplio, cómodo y preparado para entrenamientos individuales y grupales."],
  ["Profesionales", "Acompañamiento para ayudarte a entrenar con técnica y objetivos claros."]
];

function Gym() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">CONOCÉ STRONG CLUB CENTER</span>
          <h1>UN ESPACIO<br /><span>PARA ENTRENAR.</span></h1>
        </div>
      </section>

      <section className="section gym-intro">
        <div className="container gym-intro__grid">
          <SectionTitle
            eyebrow="NUESTRA PROPUESTA"
            title="Más que un gimnasio"
            description="Creamos un espacio donde el entrenamiento, la disciplina y el acompañamiento forman parte de la experiencia."
          />

          <div className="gym-intro__statement">
            <strong>FUERZA.</strong>
            <strong>DISCIPLINA.</strong>
            <strong>RESULTADOS.</strong>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionTitle
            eyebrow="POR QUÉ STRONG"
            title="Entrená con propósito"
          />

          <div className="gym-features">
            {features.map(([title, description]) => (
              <Card key={title} title={title} description={description} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Gym;
