"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Navbar.module.css";
import Menu from "../Menu";
import LinkButton from "../LinkButton";

function Navbar() {
  //TODO: Use Ref from Home to track the scroll
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.04], [8, 1]);

  const y = useTransform(scrollYProgress, [0, 0.04], [300, 0]);
  const x = useTransform(scrollYProgress, [0, 0.04], [15, 0]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChWildren: 0.5,
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
      <div className={styles.NarrowNav}>
        <Menu />
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
              dika
            </motion.div>
          </motion.div>
        </div>
        <div>
          <a href="#contact" className={styles.Contact}>
            kontakt
          </a>
        </div>
      </div>
      <motion.div
        className={styles.MenuList}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.LinksWrapper}>
          <motion.article key="1" variants={item}>
            <LinkButton>
              <a className={styles.Link} href="#about">
                o poradni
              </a>
            </LinkButton>
          </motion.article>
          <motion.article key="2" variants={item}>
            <LinkButton>
              <a className={styles.Link} href="#track">
                o współpracy
              </a>
            </LinkButton>
          </motion.article>
        </div>
        <div className={styles.LogoWrapper}>
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
              dika
            </motion.div>
          </motion.div>
        </div>
        <div className={styles.LinksWrapper}>
          <motion.article key="3" variants={item}>
            <LinkButton>
              <a className={styles.Link} href="#price">
                oferta
              </a>
            </LinkButton>
          </motion.article>
          <motion.article key="4" variants={item}>
            <LinkButton>
              <a className={styles.Link} href="#contact">
                kontakt
              </a>
            </LinkButton>
          </motion.article>
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
