import type { Metadata } from "next";
import "../styles/globals.scss";
import styles from "./layout.module.scss";
import Footer from "@/components/Globals/Footer/Footer";
import NavBar from "@/components/Globals/Navigation/NavBar/NavBar";
export const metadata: Metadata = {
  title: {
    default: "NEMO Sportowa Przygoda",
    template: "%s - NEMO Sportowa Przygoda",
  },

  description:
    "Nauka plywania | Obozy i Półkolonie - Zima/Lato | Kraków | Gorlice | Korzenna ",
  metadataBase: new URL("https://nemosportowaprzygoda.pl"),
  alternates: {
    canonical: "/",
    languages: {
      "pl-PL": "/pl-PL",
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className={styles.main}>
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
