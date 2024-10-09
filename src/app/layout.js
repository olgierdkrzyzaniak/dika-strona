import { Inter, Playfair_Display, Instrument_Serif } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import RespectMotionPreferences from "@/components/RespectMotionPreferences";

const titleFont = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: "variable",
  variable: "--font-title",
});

const mainFont = Inter({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font",
});

const headingFont = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
});

export const metadata = {
  title: "Poradnia Dietetyczna Dika w Chodzieży - Halina Krzyżaniak",
  description:
    "Jestem dietetyczką z Chodzieży z ponad 12 latami doświadczenia w pracy z pacjentami. Oferuje wsparcie dla osób z problemami zdrowotnymi i chcących poprawić nawyki żywieniowe. Specjalizuję się w spersonalizowanych jadłospisach dopasowanych do indywidualnych potrzeb i preferencji.",
  keywords:
    "dietetyk, dieta, jadłospis, poradnia, dika, chodzież, piła, budzyń, kaczory, Halina Krzyżaniak, odchudzanie, żywienie, dla cukrzyków, dla dzieci, dla kobiet w ciąży, dla sportowców, dieta wegetariańska, dieta wegańska, zaburzenia odżywiania, alergie pokarmowe, nadwaga, otyłość",
};

export default function RootLayout({ children }) {
  return (
    <RespectMotionPreferences>
      <html lang="en">
        <body
          className={clsx(
            titleFont.variable,
            mainFont.variable,
            headingFont.variable
          )}
        >
          {children}
        </body>
      </html>
    </RespectMotionPreferences>
  );
}
