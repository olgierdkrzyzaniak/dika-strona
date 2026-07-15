"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import styles from "./Track.module.css";
import { JetBrains_Mono } from "next/font/google";
import clsx from "clsx";

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
});

function TrackItem({ style, id, children }) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  return (
    <article ref={ref} className={styles.section} style={style}>
      <div className={styles.Heading}>
        <span className={clsx(jetbrains_mono.className, styles.id)}>{id}</span>
        <figure className={styles.progress}>
          <svg id="progress" width="50" height="50" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="20"
              pathLength="1"
              className={styles.bg}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="20"
              pathLength="1"
              className={styles.indicator}
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
        {children[0]}
      </div>
      {children[1]}
    </article>
  );
}

export default TrackItem;
