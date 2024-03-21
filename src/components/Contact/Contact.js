import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.Wrapper}>
      <h2 className={styles.Title}>
        Kontakt<span style={{ color: "hsl(16, 96%, 50%, 100%)" }}> :</span>
      </h2>
      <section className={styles.Section}>
        <h3 className={styles.SectionTitle}>Telefon</h3>
        <a href="tel:508508080">
          <p className={styles.SectionParagraph}>+48 508 508 080</p>
        </a>
      </section>
      <section className={styles.Section}>
        <h3 className={styles.SectionTitle}>E-mail</h3>
        <p className={styles.SectionParagraph}>poradniadika@wp.pl</p>
      </section>
      <section className={styles.Section}>
        <a href="" target="blank">
          <h3 className={styles.SectionTitle}>Adres</h3>
          <p className={styles.SectionParagraph}>ul. Armii Poznań 1</p>
          <p className={styles.SectionParagraph}>64-800 Chodzież</p>
          <p className={styles.SectionTip}>
            (kiedy klikniesz zostaniesz przeniesiony do Google Maps :)
          </p>
        </a>
      </section>
    </div>
  );
}

export default Contact;
