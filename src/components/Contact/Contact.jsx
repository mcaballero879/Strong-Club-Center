import Button from "../Button/Button";
import "./Contact.css";

function Contact() {
  return (
    <section className="section contact-section">
      <div className="container contact">
        <div>
          <SectionLabel />
          <h2>ENTRENÁ<br /><span>CON NOSOTROS.</span></h2>
          <p>
            Estamos listos para ayudarte a empezar. Escribinos y te contamos
            cómo formar parte de STRONG CLUB CENTER.
          </p>
          <Button to="https://wa.link/lmsssu">CONTACTANOS</Button>
        </div>

        <div className="contact__info">
          <div>
            <small>DIRECCIÓN</small>
            <strong>Buenos Aires, Argentina</strong>
          </div>
          <div>
            <small>HORARIO</small>
            <strong>Lunes a Viernes · 08:00 - 22:00</strong>
          </div>
          <div>
            { /* <small>WHATSAPP</small> */}
            { /* <strong>< a href="https://wa.link/lmsssu">Quiero más información</a> </strong> */}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel() {
  return <span className="eyebrow">CONTACTO</span>;
}

export default Contact;
