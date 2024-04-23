import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Poradnia Dietetyczna Dika",
  description: "Poradnia Dietetyczna Dika w Chodzieży, Halina Krzyżaniak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
