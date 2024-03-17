"use client";

import React from "react";
import styles from "./Title.module.css"; // Import the CSS module for styling
import { motion, useScroll, useTransform, transform } from "framer-motion";
import { useMotionValue } from "framer-motion";

const Title = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.12], [1, 0.2]);
  const y = useTransform(scrollYProgress, [0, 0.12], [400, 0]);
  return (
    <div
      className={styles.Title}
      // animate={{ scale: scale, y: y }}
      // style={{ transform: `translateY(400px)` }}
    >
      <h1>Dika</h1>
    </div>
  );
};

export default Title;
