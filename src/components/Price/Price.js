import styles from "./Price.module.css";

const PRICE_ITEMS = [
  {
    title: "Pierwsza wizyta",
    price: "270 zł",
    description:
      "Pierwsza wizyta to badania antropometryczne, analiza składu ciała, wywiad żywieniowy, zalecenia żywieniowe, dieta na 7 dni",
  },
  {
    title: "Wizyta kontrolna",
    price: "80 zł",
    description:
      "Wizyta kontrolna to badanie antropometryczne, analiza składu ciała wprowadzenie zmian w diecie i dalsze wskazówki odnośnie żywienia",
  },
  {
    title: "Spotkanie po latach",
    price: "220 zł",
    description:
      "Aktualizacja danych, analiza wyników badań, analiza składu ciała, zalecenia żywieniowe i dieta na 7 dni",
  },
  {
    title: "Wizyta kontrolna z dietą",
    price: "180 zł",
    description:
      "Wizyta kontrolna z jadłospisem to dodatkowy tydzień diety, badanie antropometryczne, analiza składu ciała wprowadzenie ewentualnych zmian w poprzedniej diecie i dalsze wskazówki odnośnie żywienia",
  },
  {
    title: "Analiza składu ciała",
    price: "70 zł",
    description:
      "Pomiar masy ciała, wzrostu, analiza składu ciała i omówienie wyniku",
  },
];

function PriceCard({ title, price, description }) {
  return (
    <article className={styles.Section}>
      <div className={styles.SectionHeading}>
        <h3 className={styles.SectionTitle}>{title}</h3>
        <h3 className={styles.Price}>{price}</h3>
      </div>
      <p className={styles.SectionParagraph}>{description}</p>
    </article>
  );
}

function Price() {
  return (
    <section className={styles.Wrapper} id="price">
      <h2 className={styles.Title}>
        Ceny usług<span className={styles.accent}> : </span>
      </h2>
      {PRICE_ITEMS.map((item) => (
        <PriceCard key={item.title} {...item} />
      ))}
    </section>
  );
}

export default Price;
