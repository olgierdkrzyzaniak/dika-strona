"use client";
import React from "react";
import {
  animate,
  useMotionValue,
  useTransform,
  useInView,
  motion,
} from "framer-motion";
import styles from "./Counter.module.css"; // Adjust the import path as necessary

function Counter({ children, rating, plus }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = React.useRef();
  const isInView = useInView(ref, { once: true }); // Configuring it to trigger only once

  React.useEffect(() => {
    if (isInView) {
      // Only start the animation if the element is in view
      animate(count, parseInt(children, 10), {
        type: "spring",
        stiffness: 15,
        onComplete: (v) => {},
      });
    }
  }, [isInView, children]); // Reacting to changes in isInView and children

  return (
    <h2 ref={ref} className={styles.Counter}>
      {rating && <span>0.</span>}
      <motion.span>{rounded}</motion.span>
      <span>{plus && "+"}</span>
    </h2>
  );
}

export default Counter;
