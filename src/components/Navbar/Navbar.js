"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;

    controls.start({
      background: `rgba(255, 255, 255, ${scrollY / 100})`,
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ background: "rgba(255, 255, 255, 0)" }}
      animate={controls}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ccc",
        zIndex: 1000,
      }}
    >
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        Logo
      </motion.div>
      <motion.div
        style={{
          display: "flex",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ marginRight: "20px" }}
        >
          Home
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          About
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
