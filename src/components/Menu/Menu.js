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
import { motion } from "framer-motion";

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
      <Button onPress={() => setOpen(true)} className={styles.Button}>
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
                  className={styles.MenuList}
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.li key="1" variants={item} className={styles.Item}>
                    <a href="#about" onClick={close}>
                      o poradni <span className={styles.Number}>01</span>
                    </a>
                  </motion.li>
                  <motion.li key="2" variants={item} className={styles.Item}>
                    <a href="#track" onClick={close}>
                      o współpracy <span className={styles.Number}>02</span>
                    </a>
                  </motion.li>

                  <motion.li key="3" variants={item} className={styles.Item}>
                    <a href="#price" onClick={close}>
                      oferta <span className={styles.Number}>03</span>
                    </a>
                  </motion.li>
                  <motion.li key="4" variants={item} className={styles.Item}>
                    <a href="#contact" onClick={close}>
                      kontakt <span className={styles.Number}>04</span>
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
