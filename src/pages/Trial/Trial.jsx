import { useState } from "react";
import Button from "../../components/Button/Button";
import "./Trial.css";

function Trial() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">PRIMER PASO</span>
          <h1>DÍA DE<br /><span>PRUEBA.</span></h1>
        </div>
      </section>

      <section className="section trial-page">
        <div className="container trial-page__grid">
          <div>
            <span className="eyebrow">VENÍ A CONOCERNOS</span>
            <h2>EMPEZÁ A ENTRENAR.</h2>
            <p>
              Dejanos tus datos y coordinamos tu visita a STRONG GYM.
            </p>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <label>
              Nombre y apellido
              <input required name="name" placeholder="Nombre y apellido" />
            </label>

            <label>
              Teléfono
              <input required name="phone" placeholder="+54 11 ..." />
            </label>

            <label>
              Email
              <input required type="email" name="email" placeholder="tu@email.com" />
            </label>

            <label>
              Actividad de interés
              <select name="class">
                <option>Musculación</option>
                <option>Funcional</option>
                <option>Cross Training</option>
                <option>Boxeo</option>
                <option>Spinning</option>
                <option>HIIT</option>
              </select>
            </label>

            {sent && (
              <p className="form__success">
                Solicitud preparada correctamente. El envío al backend se conectará posteriormente.
              </p>
            )}

            <Button type="submit">SOLICITAR DÍA DE PRUEBA</Button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Trial;
