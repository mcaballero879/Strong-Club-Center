import Button from "../Button/Button";
import "./TrialCTA.css";

function TrialCTA() {
  return (
    <section className="trial-cta">
      <div className="container trial-cta__inner">
        <div>
          <span className="eyebrow">EMPEZÁ HOY</span>
          <h2>VENÍ A CONOCER<br /><span>STRONG GYM.</span></h2>
        </div>

        <div>
          <p>
            Probá nuestras instalaciones y conocé nuestra forma de entrenar.
          </p>
          <Button to="/dia-de-prueba">SOLICITAR DÍA DE PRUEBA</Button>
        </div>
      </div>
    </section>
  );
}

export default TrialCTA;
