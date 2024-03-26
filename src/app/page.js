import Image from "next/image";
import styles from "./page.module.css";
import { Inter, Playfair_Display, Instrument_Serif } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Track from "@/components/Track";
import Price from "@/components/Price";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Title from "@/components/Title";
import SideMenu from "@/components/Menu";

import clsx from "clsx";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const inter = Inter({
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Page() {
  return (
    <main
      className={clsx(
        styles.main,
        playfair.className,
        instrument.className,
        inter.className
      )}
    >
      <Navbar font={playfair} />
      <Home />
      <About instrument={instrument} inter={inter} />
      <Track instrument={instrument} inter={inter} />
      <Price instrument={instrument} inter={inter} />
      <Contact instrument={instrument} inter={inter} />
      <Footer instrument={instrument} inter={inter} />
    </main>
  );
}
