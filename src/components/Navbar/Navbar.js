"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Navbar.module.css";
import Menu from "../Menu";
import LinkButton from "../LinkButton";
import { staggerContainer, staggerItem } from "@/lib/animations";

function Navbar() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.04], [8, 1]);

  const y = useTransform(scrollYProgress, [0, 0.04], [300, 0]);
  const x = useTransform(scrollYProgress, [0, 0.04], [15, 0]);

  return (
    <nav className={styles.Navbar}>
      <div className={styles.NarrowNav}>
        <Menu />
        <div className={styles.NarrowLogo}>
          {" "}
          <a href="#home">dika</a>
        </div>
        <div>
          <a href="#contact" className={styles.Contact}>
            kontakt
          </a>
        </div>
      </div>
      <motion.div
        className={styles.MenuList}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.LinksWrapper}>
          <motion.div key="1" variants={staggerItem}>
            <LinkButton>
              <a className={styles.Link} href="#about">
                o poradni
              </a>
            </LinkButton>
          </motion.div>
          <motion.div key="2" variants={staggerItem}>
            <LinkButton>
              <a className={styles.Link} href="#track">
                o współpracy
              </a>
            </LinkButton>
          </motion.div>
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
          <motion.div key="3" variants={staggerItem}>
            <LinkButton>
              <a className={styles.Link} href="#price">
                oferta
              </a>
            </LinkButton>
          </motion.div>
          <motion.div key="4" variants={staggerItem}>
            <LinkButton>
              <a className={styles.Link} href="#contact">
                kontakt
              </a>
            </LinkButton>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
