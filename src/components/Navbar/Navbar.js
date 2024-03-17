"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Navbar.module.css";

function Navbar() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.12], [5, 1]);
  return (
    <nav className={styles.Navbar}>
      <ul className={styles.MenuList}>
        <div className={styles.Group}>
          <li>
            <a href="#about">o poradni</a>
          </li>
          <li>
            <a href="#track">o współpracy</a>
          </li>
        </div>
        <motion.div className={styles.Logo} style={{ scale }}>
          Dika
        </motion.div>
        <div className={styles.Group}>
          <li>
            <a href="#price">oferta</a>
          </li>
          <li>
            <a href="#contact">kontakt</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
