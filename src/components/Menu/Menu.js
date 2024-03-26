"use client";
import React from "react";
import {
  ModalOverlay,
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
} from "react-aria-components";

import styles from "./Menu.module.css";
import { motion, Variants } from "framer-motion";

import clsx from "clsx";
import { Instrument_Serif, Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400"],
});

function SideMenu() {
  let [isOpen, setOpen] = React.useState(false);
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
    <DialogTrigger>
      <Button
        onPress={() => setOpen(true)}
        className={clsx(styles.Button, inter.className)}
      >
        Menu
      </Button>
      <ModalOverlay className={styles.Overlay}>
        <Modal className={styles.Modal}>
          <Dialog className={styles.Dialog}>
            {({ close }) => (
              <>
                <Button onPress={close} className={styles.Close}>
                  Wróć
                </Button>

                <Heading slot="title" className={styles.Heading}>
                  Menu
                </Heading>
                <motion.ul
                  className={clsx(styles.MenuList, instrument.className)}
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.li
                    key="1"
                    variants={item}
                    className={clsx(styles.Item)}
                  >
                    <a href="#about">
                      o poradni{" "}
                      <span className={clsx(styles.Number, inter.className)}>
                        01
                      </span>
                    </a>
                  </motion.li>
                  <motion.li
                    key="2"
                    variants={item}
                    className={clsx(styles.Item)}
                  >
                    <a href="#track">
                      o współpracy{" "}
                      <span className={clsx(styles.Number, inter.className)}>
                        02
                      </span>
                    </a>
                  </motion.li>

                  <motion.li
                    key="3"
                    variants={item}
                    className={clsx(styles.Item)}
                  >
                    <a href="#price">
                      oferta{" "}
                      <span className={clsx(styles.Number, inter.className)}>
                        03
                      </span>
                    </a>
                  </motion.li>
                  <motion.li
                    key="4"
                    variants={item}
                    className={clsx(styles.Item)}
                  >
                    <a href="#contact">
                      kontakt{" "}
                      <span className={clsx(styles.Number, inter.className)}>
                        04
                      </span>
                    </a>
                  </motion.li>
                </motion.ul>
              </>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}

export default SideMenu;
