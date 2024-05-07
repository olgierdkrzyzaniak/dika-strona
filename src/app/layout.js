import { Inter, Playfair_Display, Instrument_Serif } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

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
  title: "Poradnia Dietetyczna Dika",
  description: "Poradnia Dietetyczna Dika w Chodzieży, Halina Krzyżaniak",
};

export default function RootLayout({ children }) {
  return (
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
  );
}
