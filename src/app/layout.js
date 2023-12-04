import "./globals.css";
import { Gabarito, Nunito } from "next/font/google";

const gabarito = Gabarito({
  subsets: ["latin"],
  variable: "--font-gabarito",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "Learnium",
  description: "Learnium Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" sizes="any" type="image" />
      </head>
      <body className={`${gabarito.variable} ${nunito.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
