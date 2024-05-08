import styles from "./page.module.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Track from "@/components/Track";
import Price from "@/components/Price";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
// import Head from "next/head";

export default function Page() {
  return (
    <main className={styles.main}>
      {/* <Head>
        <title>Poradnia Dietetyczna Dika w Chodzieży - Halina Krzyżaniak</title>
        <meta
          name="description"
          content="Jestem dietetyczką z Chodzieży z ponad 12 latami doświadczenia w pracy z pacjentami. Oferuje wsparcie dla osób z problemami zdrowotnymi i chcących poprawić nawyki żywieniowe. Specjalizuję się w spersonalizowanych jadłospisach dopasowanych do indywidualnych potrzeb i preferencji."
          key="desc"
        />
      </Head> */}
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
