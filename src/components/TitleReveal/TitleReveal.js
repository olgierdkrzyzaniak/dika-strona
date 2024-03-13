"use client";

import React from "react";
import { motion } from "framer-motion";

const TitleEmergeFromBelow = () => {
  const emergeVariant = {
    hidden: { y: 100, opacity: 0 }, // Start from below the final position
    visible: {
      y: 0, // Move to the final position
      opacity: 1,
      transition: { duration: 0.8 }, // Customize the animation duration
    },
  };

  return (
    <>
      <motion.h1 variants={emergeVariant} initial="hidden" animate="visible">
        Emerge From Below
      </motion.h1>
    </>
  );
};

export default TitleEmergeFromBelow;
