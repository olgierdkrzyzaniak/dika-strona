import Image from "next/image";
import styles from "./page.module.css";
import { Playfair_Display } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Track from "@/components/Track";
import Price from "@/components/Price";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Title from "@/components/Title";

import clsx from "clsx";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export default function Page() {
  return (
    <main className={clsx(styles.main, playfair.className)}>
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
