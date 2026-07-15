import styles from "./About.module.css";
import Counter from "@/components/Counter";

function About() {
  return (
    <section className={styles.Wrapper}>
      <div className={styles.About} id="about">
        <section id={styles.Section}>
          <h2 className={styles.Title}>
            Kim jestem
            <span className={styles.accent}>?</span>
          </h2>
          <p className={styles.paragraph}>
            Skoro to pierwszy krok w twojej podróży ku lepszemu zdrowiu dobrze
            żebyśmy się poznali :)
          </p>
          <p className={styles.paragraph}>
            Nazywam się Halina Krzyżaniak i prowadzę Poradnię Dietetyczną w
            Chodzieży, gdzie każdego dnia mam okazję wspierać osoby zmagające
            się z różnymi problemami zdrowotnymi, a także te, które pragną
            zmienić swoje nawyki żywieniowe na lepsze. Moja oferta skierowana
            jest do wszystkich, którzy chcą poczuć się lepiej w swoim ciele i
            cieszyć się lepszym samopoczuciem.
          </p>
        </section>
        <section>
          <h3 className={styles.SectionHeading}>
            Jakie są moje kwalifikacje{" "}
            <span className={styles.accent}>?</span>
          </h3>
          <p className={styles.paragraph}>
            Moja edukacyjna podróż rozpoczęła się na Akademii Rolniczej, gdzie
            studiowałam Technologię Żywności i Żywienia Człowieka, potem
            kontynuowałam naukę na Uniwersytecie Przyrodniczym w Poznaniu,
            specjalizując się w Dietetyce i Planowaniu Żywienia.
          </p>
          <p className={styles.paragraph}>
            Ponad trzy dekady doświadczenia, w tym 14 lat poświęconych praktyce
            dietetycznej oraz wcześniejsza praca w zakładach przemysłu
            spożywczego i laboratoriach badawczych, pozwoliły mi zgromadzić
            obszerną wiedzę i doświadczenie w dziedzinie żywności i żywienia. Ta
            podróż dała mi nie tylko cenne umiejętności, ale także możliwość
            współpracy z ponad 3500 osób, którym pomogłam odnaleźć satysfakcję i
            zdrowie w ich codziennym żywieniu.
          </p>
        </section>
        <section>
          <h3 className={styles.SectionHeading}>
            Jak mogę Ci pomóc{" "}
            <span className={styles.accent}>?</span>
          </h3>
          <p className={styles.paragraph}>
            Specjalizuję się w tworzeniu spersonalizowanych jadłospisów, które
            są dopasowane do indywidualnych potrzeb i preferencji smakowych
            moich podopiecznych. W mojej pracy opieram się o najnowszą wiedzę z
            zakresu dietetyki i żywienia człowieka, aby każda porada była nie
            tylko skuteczna, ale również bezpieczna.
          </p>
          <p className={styles.paragraph}>
            Rozumiem, że zmiana nawyków żywieniowych nie jest prosta i wymaga
            nie tylko wiedzy, ale także wsparcia i zrozumienia. Dlatego też, w
            mojej pracy staram się być nie tylko dietetykiem, ale także
            przyjacielem, który wspiera na każdym kroku zmierzającym do
            zdrowszego stylu życia.
          </p>
        </section>
        <section>
          <h3 className={styles.SectionHeading}>
            Oferuję<span className={styles.accent}>:</span>
          </h3>
          <ul className={styles.List}>
            <li className={styles.ListItem}>
              usługi z zakresu edukacji żywieniowej i doradztwa dietetycznego
            </li>
            <li className={styles.ListItem}>
              ocenę stanu odżywienia organizmu (analiza składu ciała, BMI, WHR)
            </li>
            <li className={styles.ListItem}>
              diety regulujące masę ciała (odchudzające, wspomagające przyrost
              masy)
            </li>
            <li className={styles.ListItem}>
              diety dla osób z problemami zdrowotnymi (cukrzyca, nadciśnienie,
              hipercholesterolemia, osteoporoza, choroby układu krążenia,
              schorzenia przewodu pokarmowego)
            </li>
            <li className={styles.ListItem}>
              diety dla dzieci, kobiet w ciąży, sportowców
            </li>
            <li className={styles.ListItem}>
              żywienie w alergiach i nietolerancjach pokarmowych
            </li>
            <li className={styles.ListItem}>diety dla wegetarian i wegan</li>
            <li className={styles.ListItem}>
              diety dla osób z zaburzeniami odżywiania
            </li>
            <li className={styles.ListItem}>
              żywienie w chorobach nowotworowych
            </li>
            <li className={styles.ListItem}>
              wsparcie w zmianie nawyków żywieniowych
            </li>
          </ul>
        </section>
        <p className={styles.paragraph}>
          Nie mogę się doczekać aby usłyszeć twoją historię. Do zobaczenia w
          Poradni! 🌱💚
        </p>
        <div className={styles.CountersGrid}>
          <div className={styles.CounterWrapper}>
            <Counter duration={10} plus>
              3500
            </Counter>
            <p className={styles.CounterParagraph}>Zadowolonych pacjentów</p>
          </div>
          <div className={styles.CounterWrapper}>
            <Counter duration={10} plus>
              14
            </Counter>
            <p className={styles.CounterParagraph}>
              Lat doświadczenia w pracy dietetyka i 19 lat w branży spożywczej
            </p>
          </div>
          <div className={styles.CounterWrapper}>
            <Counter rating>50</Counter>
            <p className={styles.CounterParagraph}>
              Średnia ocen na serwisach Znany Lekarz, Google oraz Facebook
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
