import type { Metadata } from "next";
import "../styles/globals.scss";
import styles from "./layout.module.scss";
import Footer from "@/components/Globals/Footer/Footer";
import NavBar from "@/components/Globals/Navigation/NavBar/NavBar";
export const metadata: Metadata = {
  title: "NEMO Sportowa Przygoda",
  description:
    "Nauka plywania | Obozy i Półkolonie - Zima/Lato | Kraków | Gorlice | Korzenna ",
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
