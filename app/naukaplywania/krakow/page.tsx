import GalleryLink from "@/components/Globals/GalleryLink/GalleryLink";
import styles from "../../page.module.scss";
import VideosSection from "@/components/Globals/VideosSection";
import NaukaPlywaniaMiasto from "@/components/NaukaPlywaniaMiasto/NaukaPlywaniaMiasto";
import Scrap2 from "@/components/Ui/Scrap/Scrap2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nauka pływania KRAKÓW",
  description:
    "Zapraszamy na zajęcia pływania wszystkie niemowlaki, dzieci i młodzież oraz dorosłych w Krakowie! - Przystań Eisenberga | Bronowianka | Pływaczek.",
  metadataBase: new URL("https://nemosportowaprzygoda.pl/naukaplywania/krakow"),
  alternates: {
    canonical: "https://nemosportowaprzygoda.pl/naukaplywania/krakow",
    languages: {
      "pl-PL": "/pl-PL",
    },
  },
};

const NaukaPlywaniaKrakow = () => {
  return (
    <div className={styles.main} style={{ paddingBottom: "0rem" }}>
      <VideosSection
        oneSticker={true}
        scrapColor="lightBlue"
        oneStickerContent={{
          title: "NAUKA ",
          title2: "PŁYWANIA",
          titleStrip: "KRAKÓW",
          stripBgColor: "mediumBlue",
          stripTextColor: "white",
          scale: 1.5,
        }}
        col1={{
          video: { src: "pool-mix-1.mp4", alt: "nauka pływania niemowlaki" },
          stickerH2: {
            title: "MAŁE",
            titleStrip: "BOMBELKI",
            stripBgColor: "lightBlue",
            stripTextColor: "white",
            scale: 1.15,
          },
        }}
        col2={{
          video: {
            src: "pool-mix-3.mp4",
            alt: "nauka pływania dzieci i mlodzież",
          },
          stickerH2: {
            title: "ŚREDNIE",
            titleStrip: "BOMBELKI",
            stripBgColor: "mediumBlue",
            stripTextColor: "white",
            scale: 1.15,
          },
        }}
        col3={{
          video: { src: "pool-mix-5.mp4", alt: "nauka pływania dorośli" },
          stickerH2: {
            title: "DUŻE",
            titleStrip: "BOMBELKI",
            stripBgColor: "darkBlue",
            stripTextColor: "white",
            scale: 1.15,
          },
        }}
      />
      <NaukaPlywaniaMiasto />
      <GalleryLink
        href="/galeria"
        img="/gallery/galleryLinks/swimming.webp"
        bgColor="lightBlue"
        textColor="white"
      />
      <Scrap2 position="bottom" color="darkBlue" />
    </div>
  );
};
export default NaukaPlywaniaKrakow;
