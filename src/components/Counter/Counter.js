"use client";
import React from "react";
import {
  animate,
  useMotionValue,
  useTransform,
  useInView,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import styles from "./Counter.module.css";

function Counter({ children, rating, plus }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = React.useRef();
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      animate(count, parseInt(children, 10), {
        type: "spring",
        stiffness: 15,
      });
    }
  }, [isInView, children, count]);

  useMotionValueEvent(rounded, "change", (latest) => {
    setValue(latest);
  });

  return (
    <h2 ref={ref} className={styles.Counter}>
      {rating ? (
        <span>
          {Math.floor(value / 10) % 10}.{value % 10}
        </span>
      ) : (
        <motion.span>{rounded}</motion.span>
      )}

      <span>{plus && "+"}</span>
    </h2>
  );
}

export default Counter;
