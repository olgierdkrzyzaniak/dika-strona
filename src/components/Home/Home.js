import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home} id="home">
      <h2 className={styles.Heading1}>poradnia dietetyczna</h2>
      <h1 className={styles.Title}>dika</h1>
      <h2 className={styles.Heading2}>w Chodzieży</h2>
    </div>
  );
};

export default Home;
