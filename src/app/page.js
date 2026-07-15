import styles from "./page.module.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Track from "@/components/Track";
import Price from "@/components/Price";
import Contact from "@/components/Contact";
import Home from "@/components/Home";

export default function Page() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Home />
      <About />
      <Track />
      <Price />
      <Contact />
      <Footer />
    </main>
  );
}
