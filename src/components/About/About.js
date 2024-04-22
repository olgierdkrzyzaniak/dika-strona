import React from "react";
import styles from "./About.module.css";
import clsx from "clsx";
import Counter from "@/components/Counter";

function About({ inter, instrument }) {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.About} id="about">
        <section id={styles.Section}>
          <h2 className={clsx(styles.Title, instrument.className)}>
            Kim jestem{" "}
            <span style={{ color: "hsl(16, 96%, 50%, 100%)" }}>?</span>
          </h2>
          <p className={clsx(inter.className, styles.paragraph)}>
            Skoro to pierwszy krok w twojej podróży ku lepszemu zdrowiu dobrze
            żebyśmy się poznali :)
          </p>
          <p className={clsx(inter.className, styles.paragraph)}>
            Nazywam się Halina Krzyżaniak i prowadzę Poradnię Dietetyczną w
            Chodzieży, gdzie każdego dnia mam okazję wspierać osoby zmagające
            się z różnymi problemami zdrowotnymi, a także te, które pragną
            zmienić swoje nawyki żywieniowe na lepsze. Moja oferta skierowana
            jest do wszystkich, którzy chcą poczuć się lepiej w swoim ciele i
            cieszyć się lepszym samopoczuciem.
          </p>
        </section>
        <section>
          <h3 className={clsx(styles.SectionHeading, inter.className)}>
            Jakie są moje kwalifikacje{" "}
            <span style={{ color: "hsl(16, 96%, 50%, 100%)" }}>?</span>
          </h3>
          <p className={clsx(inter.className, styles.paragraph)}>
            Moja edukacyjna podróż rozpoczęła się na Akademii Rolniczej, gdzie z
            studiowałam Technologię Żywności i Żywienia Człowieka, potem
            kontynuowałam naukę na Uniwersytecie Przyrodniczym w Poznaniu,
            specjalizując się w Dietetyce i Planowaniu Żywienia.
          </p>
          <p className={clsx(inter.className, styles.paragraph)}>
            Ponad dwie dekady doświadczenia, w tym 12 lat poświęconych praktyce
            dietetycznej oraz wcześniejsza praca w laboratoriach badawczych,
            pozwoliły mi zgromadzić obszerną wiedzę i doświadczenie w dziedzinie
            żywności i żywienia. Ta podróż dała mi nie tylko cenne umiejętności,
            ale także możliwość współpracy z ponad 3000 osób, którym pomogłam
            odnaleźć satysfakcję i zdrowie w ich codziennym żywieniu.
          </p>
        </section>
        <section>
          <h3 className={styles.SectionHeading}>
            Jak mogę Ci pomóc{" "}
            <span style={{ color: "hsl(16, 96%, 50%, 100%)" }}>?</span>
          </h3>
          <p className={clsx(inter.className, styles.paragraph)}>
            Specjalizuję się w tworzeniu spersonalizowanych jadłospisów, które
            są dopasowane do indywidualnych potrzeb i preferencji smakowych
            moich podopiecznych. W mojej pracy opieram się o najnowszą wiedzę z
            zakresu dietetyki i żywienia człowieka, aby każda porada była nie
            tylko skuteczna, ale również bezpieczna.
          </p>
          <p className={clsx(inter.className, styles.paragraph)}>
            Rozumiem, że zmiana nawyków żywieniowych nie jest prosta i wymaga
            nie tylko wiedzy, ale także wsparcia i zrozumienia. Dlatego też, w
            mojej pracy staram się być nie tylko dietetykiem, ale także
            przyjacielem, który wspiera na każdym kroku zmierzającym do
            zdrowszego stylu życia.
          </p>
        </section>
        <p className={clsx(inter.className, styles.paragraph)}>
          Nie mogę się doczekać aby usłyszeć twoją historię. Do zobaczenia w
          Poradni! 🌱💚
        </p>
        <div className={styles.CountersGrid}>
          <div className={styles.CounterWrapper}>
            <Counter duration={10} plus>
              3000
            </Counter>
            <p className={clsx(inter.className, styles.CounterParagraph)}>
              Zadowolonych pacjentów
            </p>
          </div>
          <div className={styles.CounterWrapper}>
            <Counter duration={10} plus>
              12
            </Counter>
            <p className={clsx(inter.className, styles.CounterParagraph)}>
              Lat doświadczenia
            </p>
          </div>
          <div className={styles.CounterWrapper}>
            <Counter rating>50</Counter>
            <p className={clsx(inter.className, styles.CounterParagraph)}>
              Średnia ocen na serwisach Znany Lekarz, Google oraz Facebook
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
