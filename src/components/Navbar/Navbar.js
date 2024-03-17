"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Navbar.module.css";

function Navbar() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.12], [8, 1]);

  const y = useTransform(scrollYProgress, [0, 0.12], [300, 0]);
  const x = useTransform(scrollYProgress, [0, 0.12], [-30, 0]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <nav className={styles.Navbar}>
      <motion.ul
        className={styles.MenuList}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.Group}>
          <motion.li key="1" variants={item}>
            <a href="#about">o poradni</a>
          </motion.li>
          <motion.li key="2" variants={item}>
            <a href="#track">o współpracy</a>
          </motion.li>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 10,
              damping: 5,
            }}
          >
            <motion.div className={styles.Logo} style={{ scale, y, x }}>
              Dika
            </motion.div>
          </motion.div>
        </div>
        <div className={styles.Group}>
          <motion.li key="3" variants={item}>
            <a href="#price">oferta</a>
          </motion.li>
          <motion.li key="4" variants={item}>
            <a href="#contact">kontakt</a>
          </motion.li>
        </div>
      </motion.ul>
    </nav>
  );
}

export default Navbar;
