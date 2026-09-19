import Schedule from "../../components/Schedule/Schedule";

function SchedulePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">ORGANIZÁ TU ENTRENAMIENTO</span>
          <h1>HORARIOS<br /><span>STRONG GYM.</span></h1>
        </div>
      </section>
      <Schedule />
    </>
  );
}

export default SchedulePage;
