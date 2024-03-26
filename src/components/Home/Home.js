import React from "react";
import styles from "./Home.module.css";
import clsx from "clsx";

import { Instrument_Serif } from "next/font/google";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
});

const Home = () => {
  return (
    <div className={styles.home} id="home">
      <h2 className={clsx(styles.Heading1, instrument.className)}>
        poradnia dietetyczna
      </h2>
      <h1 className={styles.Title}>dika</h1>
      <h2 className={clsx(styles.Heading2, instrument.className)}>
        w Chodzieży
      </h2>
    </div>
  );
};

export default Home;
