import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/shared/Header";

const roboto = Roboto({ subsets: ["latin"], weight: ['100', '300', '400', '500', '700', '900'] });

export const metadata = {
  title: "Event Registration Checkout",
  description: "Event Management firm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
