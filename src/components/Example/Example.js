"use client";
import React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import styles from "./Example.module.css";
import { Lora, Noto_Serif, Playfair_Display } from "next/font/google";
import clsx from "clsx";

const noto = Playfair_Display({ subsets: ["latin"], style: "italic" });

const ScrollReveal = () => {
  const { scrollYProgress } = useScroll();
  const [scrollYValue, setScrollYValue] = React.useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollYValue(latest * 100);
  });

  const scaleX = scrollYProgress;

  return (
    <>
      <motion.div
        className={styles.progressBar}
        style={{ scaleX: scrollYProgress }}
      />
      <div className={clsx(styles.scrollReveal, noto.className)}>
        <h1 className={styles.heading}>
          <motion.span style={{ backgroundSize: `${scrollYValue}% 100%` }}>
            -O poradni-
          </motion.span>
        </h1>
        <p className={styles.paragraph}>
          <span>
            This is the paragraph of text that we are going to be filling in
            with color as the user scrolls down the page. Yay.
          </span>
        </p>
      </div>
    </>
  );
};

export default ScrollReveal;
