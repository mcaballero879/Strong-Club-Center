import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <span className="eyebrow">ERROR 404</span>
        <h1>PÁGINA<br /><span>NO ENCONTRADA.</span></h1>
        <Button to="/">VOLVER AL INICIO</Button>
      </div>
    </section>
  );
}

export default NotFound;
