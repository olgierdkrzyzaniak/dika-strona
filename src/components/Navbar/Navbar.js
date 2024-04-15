"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Navbar.module.css";
import clsx from "clsx";
import Menu from "../Menu";
import { Inter } from "next/font/google";
import LinkButton from "../LinkButton";

const inter = Inter({
  subsets: ["latin"],
});

function Navbar({ font }) {
  //TODO: Use Ref from Home to track the scroll
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.04], [8, 1]);

  const y = useTransform(scrollYProgress, [0, 0.04], [300, 0]);
  const x = useTransform(scrollYProgress, [0, 0.04], [-5, 0]);

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
    <nav className={clsx(styles.Navbar, font.className)}>
      <div class={styles.NarrowNav}>
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
          <a href="#contact" className={clsx(styles.Contact, inter.className)}>
            kontakt
          </a>
        </div>
      </div>
      <motion.ul
        className={styles.MenuList}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.Group}>
          <motion.li key="1" variants={item}>
            <LinkButton>
              <a className={styles.Link} href="#about">
                o poradni
              </a>
            </LinkButton>
          </motion.li>
          <motion.li key="2" variants={item}>
            <LinkButton>
              <a className={styles.Link} href="#track">
                o współpracy
              </a>
            </LinkButton>
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
              dika
            </motion.div>
          </motion.div>
        </div>
        <div className={styles.Group}>
          <motion.li key="3" variants={item}>
            <LinkButton>
              <a className={styles.Link} href="#price">
                oferta
              </a>
            </LinkButton>
          </motion.li>
          <motion.li key="4" variants={item}>
            <LinkButton>
              <a className={styles.Link} href="#contact">
                kontakt
              </a>
            </LinkButton>
          </motion.li>
        </div>
      </motion.ul>
    </nav>
  );
}

export default Navbar;
