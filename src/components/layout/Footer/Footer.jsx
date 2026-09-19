import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Link to="/" className="footer__logo">
            STRONG <span>CLUB CENTER</span>
          </Link>
          <p className="footer__text">
            Fuerza, disciplina y rendimiento. Un espacio pensado para
            entrenar en serio.
          </p>
        </div>

        <div>
          <h3>STRONG CLUB CENTER</h3>
          <Link to="/clases">Clases</Link>
          <Link to="/gimnasio">Nuestro gimnasio</Link>
        </div>

        <div>
          <h3>CONTACTO</h3>
          <span>Buenos Aires, Alsina 1569 CABA</span>
          <span>+54 9 11 2874-3528</span>
          { /*<span>info@stronggym.com.ar</span> */}
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} STRONG CLUB CENTER</span>
        <span>Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}

export default Footer;
