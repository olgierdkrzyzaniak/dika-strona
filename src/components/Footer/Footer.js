import React from "react";
import styles from "./Footer.module.css";
import clsx from "clsx";

function Footer({ playfair, instrument, inter }) {
  return (
    <div className={styles.Container}>
      <div className={styles.Wave}>
        <svg
          width="2264"
          height="258"
          viewBox="0 0 2264 258"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1187.5 49.5C793.89 122.823 192.833 124.5 1 49.5V257H2263.5V78.5C2008.17 13.1667 1676 -41.5 1187.5 49.5Z"
            fill="#f55004"
            stroke="#f55004"
          />
        </svg>
      </div>
      <div className={styles.Background}>
        <footer className={styles.Footer}>
          <div class={styles.Wrapper}>
            <h2 className={clsx(styles.Logo, playfair.className)}>Dika</h2>
            <div className={clsx(inter.className, styles.Contact)}>
              <h3>Kontakt:</h3>
              <p>Halina Krzyżaniak - Dietetyk</p>
              <p>tel: 508 508 080</p>
              <p>e-mail: poradniadika@wp.pl</p>
              <p>ul. Armii Poznań 1, Chodzież</p>
            </div>
            <ul className={clsx(styles.List, inter.className)}>
              <h3>Spis treści:</h3>
              <li>
                <a href="#home">Początek</a>
              </li>
              <li>
                <a href="#about">O poradni</a>
              </li>
              <li>
                <a href="#track">Oferta</a>
              </li>
              <li>
                <a href="#price">Cennik</a>
              </li>
              <li>
                <a href="#contact">Kontakt</a>
              </li>
            </ul>
          </div>
          <p className={styles.Copyright}>
            © 2024 by Olgierd Krzyżaniak. Kocham Cię mamo :).
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
