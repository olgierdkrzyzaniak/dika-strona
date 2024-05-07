"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";
import styles from "./Line.module.css";

function Line() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    //TODO: adjust offset
    offset: ["start center", "center center"],
  });
  return (
    <div className={styles.Line} ref={ref}>
      <svg
        width="881"
        height="1908"
        viewBox="0 0 881 1908"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M93.1143 1891.48C100.004 1899.54 113.728 1912.9 113.509 1901.79C113.29 1890.69 110.832 1883.34 109.63 1881.06"
          stroke="#FA4705"
          style={{ pathLength: scrollYProgress }}
        />
        <motion.path
          d="M540 1.5C638.129 37.3576 829.396 136.087 773.228 232.656C703.019 353.367 298.463 327.329 183.5 462C88.8656 572.857 96.8664 721.814 183.5 810.5C270.134 899.186 500.873 902.901 734.223 1089.13C909.063 1228.67 943.477 913.952 734.223 855.921C533.628 800.291 594.624 1292.37 313.786 1337.53C146.342 1364.46 62.9194 1341.23 12.4177 1496.02C-27.9836 1619.85 57.5819 1790.54 108.084 1896.34"
          stroke="#FA4705"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
    </div>
  );
}

export default Line;
