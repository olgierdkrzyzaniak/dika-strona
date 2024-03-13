import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Example from "@/components/Example";
import TitleReveal from "@/components/TitleReveal";
import Footer from "@/components/Footer";

export default function Home() {
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
