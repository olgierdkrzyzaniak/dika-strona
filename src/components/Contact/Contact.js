import React from "react";
import styles from "./Contact.module.css";
import clsx from "clsx";
import CopyToClipboard from "../CopyToClipboard";

function Contact({ instrument }) {
  const contact = `Halina Krzyżaniak - Dietetyk
tel: 508 508 080
e-mail: poradniadika@wp.pl
ul. Armii Poznań 1, Chodzież`;
  return (
    <div className={styles.Wrapper} id="contact">
      <CopyToClipboard content={contact}>
        <h2 className={clsx(styles.Title, instrument.className)}>
          Kontakt<span style={{ color: "hsl(16, 96%, 50%, 100%)" }}> :</span>
        </h2>
      </CopyToClipboard>
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
        <a href="https://maps.app.goo.gl/SxwAK792MrCLKf9s8" target="blank">
          <h3 className={styles.SectionTitle}>Adres</h3>
          <p className={styles.SectionParagraph}>ul. Armii Poznań 1</p>
          <p className={styles.SectionParagraph}>64-800 Chodzież</p>
          <p className={styles.SectionTip}>
            (kliknięcie przeniesie Cię strony Google Maps :)
          </p>
        </a>
      </section>
    </div>
  );
}

export default Contact;
