import Image from "next/image";
import styles from "./page.module.css";
import { Inter, Playfair_Display, Lora } from "next/font/google";

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

const inter = Inter({
  subsets: ["latin"],
});

const lora = Lora({
  subsets: ["latin"],
});

export default function Page() {
  return (
    <main
      className={clsx(
        styles.main,
        playfair.className,
        lora.className,
        inter.className
      )}
    >
      <Navbar font={playfair} />
      <Home />
      <About lora={lora} inter={inter} />
      <Track lora={lora} inter={inter} />
      <Price inter={inter} />
      <Contact />
      <Footer />
    </main>
  );
}
