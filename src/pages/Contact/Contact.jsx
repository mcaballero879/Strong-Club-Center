import { useState } from "react";
import Button from "../../components/Button/Button";
import "./Contact.css";

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">ESTAMOS PARA AYUDARTE</span>
          <h1>CONTACTO<br /><span>STRONG CLUB CENTER</span></h1>
        </div>
      </section>

      <section className="section contact-page">
        <div className="container contact-page__grid">
          <div>
            <span className="eyebrow">HABLEMOS</span>
            <h2>¿TENÉS ALGUNA CONSULTA?</h2>
            <p>
              Completá el formulario y nuestro equipo se pondrá en contacto.
            </p>

            <div className="contact-page__details">
              <span>Buenos Aires, Argentina</span>
              <span>+54 9 11 2874-3528</span>
             {/* <span>info@stronggym.com.ar</span> */}
            </div>
          </div>

        {/*  <form className="form" onSubmit={handleSubmit}>
            <label>
              Nombre
              <input name="name" required placeholder="Tu nombre" />
            </label>

            <label>
              Email
              <input type="email" name="email" required placeholder="tu@email.com" />
            </label>

            <label>
              Mensaje
              <textarea name="message" required rows="5" placeholder="¿En qué podemos ayudarte?" />
            </label>

            {sent && <p className="form__success">Mensaje preparado correctamente. La conexión con el backend se incorporará en la siguiente etapa.</p>}

            <Button type="submit">ENVIAR CONSULTA</Button>
          </form> */}
        </div>
      </section>
    </>
  );
}

export default ContactPage;
