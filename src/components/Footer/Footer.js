import React from "react";
import styles from "./Footer.module.css";
import clsx from "clsx";

function Footer({ playfair, instrument, inter }) {
  return (
    <div className={styles.Wrapper}>
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
          <div>
            <h2 className={clsx(styles.Logo, playfair.className)}>Dika</h2>
            <ul>
              Spis treści:
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
            <p>© 2024 by Olgierd Krzyżaniak. Kocham Cię mamo :).</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
