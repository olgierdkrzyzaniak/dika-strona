import styles from "./Track.module.css";
import Line from "@/components/Line";
import TrackItem from "./TrackItem";

function Track() {
  return (
    <section className={styles.TrackContainer} id="track">
      <Line />
      <div className={styles.Track}>
        <h2 className={styles.Title}>
          Jak będzie wyglądać<br></br> nasza współpraca
          <span className={styles.accent}>?</span>
        </h2>
        <div className={styles.circle} />

        <TrackItem id={1} style={{ alignSelf: "flex-start" }}>
          <h3 className={styles.SectionHeading}>Pierwsza wizyta</h3>
          <p className={styles.paragraph}>
            Na początku naszej współpracy spotkamy się na wizycie, którą
            zaplanujemy tak, abyś czuł się swobodnie i komfortowo. Rozmowa
            będzie jak luźna pogawędka – chcę dowiedzieć się o Tobie jak
            najwięcej! Opowiedz mi o swoich zwyczajach żywieniowych,
            preferencjach, a także o tym, co sprawia Ci radość. Im lepiej Cię
            poznam, tym łatwiej stworzymy spersonalizowany plan żywieniowy.
          </p>
        </TrackItem>
        <TrackItem id={2} style={{ alignSelf: "flex-end", marginTop: "100px" }}>
          <h3 className={styles.SectionHeading}>
            Opracowuję dietę dostosowaną do twoich potrzeb
          </h3>
          <p className={styles.paragraph}>
            Na podstawie naszej rozmowy i zebranych informacji, stworzę dla
            Ciebie indywidualną dietę. Chcę, aby była ona nie tylko skuteczna,
            ale też dostosowana do Twojego stylu życia. Odpowiadam na pytania i
            uwzględniam Twoje preferencje kulinarne, dzięki czemu dieta nie
            będzie tylko zdrowa, ale także smaczna i satysfakcjonująca.
          </p>
        </TrackItem>
        <TrackItem
          id={3}
          style={{
            alignSelf: "flex-start",
            marginTop: "150px",
            position: "relative",
            right: `3vw`,
          }}
        >
          <h3 className={styles.SectionHeading}>
            Przestrzegasz diety, w tym czasie możesz się ze mną konsultować
          </h3>
          <p className={styles.paragraph}>
            Kiedy już rozpoczniesz podążanie ścieżką zdrowego żywienia, nie
            zostawiam Cię samego. Jestem tutaj, abyś mógł/mogła śmiało zadawać
            pytania, dzielić się swoimi odczuciami i doświadczeniami. Możemy
            utrzymywać kontakt przez różne środki komunikacji – czy to
            wiadomości tekstowe, e-maile, czy nawet krótkie rozmowy
            telefoniczne. Twoje sukcesy są moimi sukcesami, więc czuj się
            swobodnie dzielić każdym krokiem na drodze do lepszego zdrowia.
          </p>
        </TrackItem>
        <TrackItem id={4} style={{ alignSelf: "flex-end", marginTop: "100px" }}>
          <h3 className={styles.SectionHeading}>
            Wizyta kontrolna i planowanie dalszych działań
          </h3>
          <p className={styles.paragraph}>
            Po pewnym czasie, gdy już zauważysz pierwsze pozytywne efekty,
            spotkamy się ponownie na wizycie kontrolnej. Podczas tego spotkania
            omówimy, jak idzie Ci z realizacją diety, co możemy dostosować lub
            ulepszyć. Razem będziemy planować kolejne kroki, aby utrzymać
            osiągnięte cele i być może wprowadzić nowe, gdy będziesz gotowy na
            kolejne wyzwania. Pamiętaj, jestem tu po to, aby Cię wspierać w
            każdym etapie tego fascynującego i korzystnego dla zdrowia procesu!
          </p>
        </TrackItem>
      </div>
    </section>
  );
}

export default Track;
