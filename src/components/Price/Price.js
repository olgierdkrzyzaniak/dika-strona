import React from "react";
import styles from "./Price.module.css";

function Price() {
  return (
    <section className={styles.Wrapper} id="price">
      <h2 className={styles.Title}>
        Ceny usług<span style={{ color: "hsl(16, 96%, 50%, 100%)" }}> : </span>
      </h2>
      <article className={styles.Section}>
        <div className={styles.SectionHeading}>
          <h3 className={styles.SectionTitle}>Pierwsza wizyta</h3>
          <h3 className={styles.Price}>230 zł</h3>
        </div>
        <p className={styles.SectionParagraph}>
          Pierwsza wizyta to badania antropometryczne, analiza składu ciała,
          wywiad żywieniowy, zalecenia żywieniowe, dieta na 7 dni
        </p>
      </article>
      <article className={styles.Section}>
        <div className={styles.SectionHeading}>
          <h3 className={styles.SectionTitle}>Wizyta kontrolna </h3>
          <h3 className={styles.Price}>80 zł</h3>
        </div>
        <p className={styles.SectionParagraph}>
          Wizyta kontrolna to badanie antropometryczne, analiza składu ciała
          wprowadzenie zmian w diecie i dalsze wskazówki odnośnie żywienia
        </p>
      </article>
      <article className={styles.Section}>
        <div className={styles.SectionHeading}>
          <h3 className={styles.SectionTitle}>Wizyta kontrolna z dietą</h3>
          <h3 className={styles.Price}>170 zł</h3>
        </div>
        <p className={styles.SectionParagraph}>
          Wizyta kontrolna z jadłospisem to dodatkowy tydzień diety, badanie
          antropometryczne, analiza składu ciała wprowadzenie ewentualnych zmian
          w poprzedniej diecie i dalsze wskazówki odnośnie żywienia
        </p>
      </article>
      <article className={styles.Section}>
        <div className={styles.SectionHeading}>
          <h3 className={styles.SectionTitle}>Analiza składu ciała</h3>
          <h3 className={styles.Price}>70 zł</h3>
        </div>
        <p className={styles.SectionParagraph}>
          Pomiar masy ciała, wzrostu, analiza składu ciała i omówienie wyniku
        </p>
      </article>
    </section>
  );
}

export default Price;
