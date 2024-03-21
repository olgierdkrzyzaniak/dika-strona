import React from "react";
import styles from "./Footer.module.css";

function Footer() {
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
            fill="#FA4705"
            stroke="#FA4705"
          />
        </svg>
      </div>
      <div className={styles.Background}>
        <footer className={styles.Footer}>
          <div>
            <h2>Stopka strony</h2>
            <p>Jakiś bezsens</p>
            <p>Ktoś w ogóle to czyta?</p>
            <p>
              © 2024 by Olgierd Krzyżaniak. Kocham Cię mamo, zrobiłem najlepiej
              jak umiem :).
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
