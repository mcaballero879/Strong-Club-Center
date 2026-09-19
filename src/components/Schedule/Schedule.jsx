import { schedule } from "../../data/schedule";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";
import "./Schedule.css";

function Schedule() {
  return (
    <section className="section schedule-section">
      <div className="container">
        <SectionTitle
          eyebrow="ORGANIZÁ TU SEMANA"
          title="Horarios"
          description="Consultá nuestras actividades y encontrá el horario que mejor se adapta a vos."
        />

        <div className="schedule">
          {schedule.map((day) => (
            <div className="schedule__day" key={day.day}>
              <h3>{day.day}</h3>

              {day.items.map((item) => (
                <div className="schedule__item" key={`${day.day}-${item.time}-${item.name}`}>
                  <span>{item.time}</span>
                  <b>{item.name}</b>
                  <small>{item.instructor}</small>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="schedule__action">
          <Button to="/horarios" variant="outline">VER TODOS LOS HORARIOS</Button>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
