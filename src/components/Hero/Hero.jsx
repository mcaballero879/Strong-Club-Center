import Button from "../Button/Button";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay" />

      <div className="container hero__content">
        <span className="eyebrow">ENTRENÁ MÁS FUERTE</span>
        <h1>
          TU MEJOR
          <span> VERSIÓN</span>
        </h1>

        <p>
          Un gimnasio diseñado para quienes buscan fuerza,
          rendimiento y resultados.
        </p>

        <div className="hero__actions">
          <Button to="/dia-de-prueba">DÍA DE PRUEBA</Button>
          <Button to="/clases" variant="outline">VER CLASES</Button>
        </div>
      </div>

      <div className="hero__scroll">SCROLL</div>
    </section>
  );
}

export default Hero;
