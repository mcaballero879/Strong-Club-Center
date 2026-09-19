import Hero from "../../components/Hero/Hero";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ClassCard from "../../components/ClassCard/ClassCard";
import Schedule from "../../components/Schedule/Schedule";
import TrialCTA from "../../components/TrialCTA/TrialCTA";
import Contact from "../../components/Contact/Contact";
import { classes } from "../../data/classes";
import "./Home.css";

function Home() {
  return (
    <>
      <Hero />

      <section className="section home-classes">
        <div className="container">
          <SectionTitle
            eyebrow="ENTRENAMIENTO"
            title="Entrená a tu manera"
            description="Elegí la disciplina que mejor se adapte a tus objetivos y entrená acompañado por profesionales."
          />

          <div className="home-classes__grid">
            {classes.map((item) => (
              <ClassCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

     {/* <Schedule /> */}
      <TrialCTA />
      <Contact />
    </>
  );
}

export default Home;
