"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import styles from "./Track.module.css";
import { JetBrains_Mono, Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
});

function Item({ style, id, children, ...props }) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    //TODO: adjust offset
    offset: ["start end", "end end"],
  });

  return (
    <section ref={ref} className={styles.section} style={style}>
      <div className={styles.Heading}>
        <span style={{ position: "relative", left: "28px", bottom: "8px" }}>
          {id}
        </span>
        <figure className={styles.progress}>
          <svg id="progress" width="50" height="50" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className={styles.bg}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className={styles.indicator}
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
        {children}
      </div>
      <p>lorem ipsum</p>
    </section>
  );
}

function Track() {
  return (
    <div className={styles.Track}>
      <Item id={1} style={{ alignSelf: "flex-start" }}>
        <h3>Pierwsza wizyta</h3>
      </Item>
      <Item id={2} style={{ alignSelf: "flex-end" }}>
        <h3>Opracowuję dietę dostosowaną do twoich potrzeb</h3>
      </Item>
      <Item id={3} style={{ alignSelf: "flex-start" }}>
        <h3>Przestrzegasz diety, w tym czasie możesz się ze mną konsultować</h3>
      </Item>
      <Item id={4} style={{ alignSelf: "flex-end" }}>
        <h3>Wizyta kontrolna i planowanie dalszych działań</h3>
      </Item>
    </div>
  );
}

export default Track;
