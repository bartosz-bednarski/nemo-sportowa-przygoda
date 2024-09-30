import React from "react";
import styles from "../../page.module.scss";
import VideosSection from "@/components/Globals/VideosSection";
import NaukaPlywaniaMiasto from "@/components/NaukaPlywaniaMiasto/NaukaPlywaniaMiasto";
import Scrap2 from "@/components/Ui/Scrap/Scrap2";
const NaukaPlywaniaKrakow: React.FC = () => {
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
          scale: 1.15,
        }}
        col1={{
          image: { src: "image 80.png", alt: "nauka pływania niemowlaki" },
          stickerH2: {
            title: "MAŁE",
            titleStrip: "BOMBELKI",
            stripBgColor: "lightBlue",
            stripTextColor: "white",
            scale: 1.15,
          },
        }}
        col2={{
          image: {
            src: "image 81.png",
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
          image: { src: "image 82.png", alt: "nauka pływania dorośli" },
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
      <Scrap2 position="bottom" color="darkBlue" />
    </div>
  );
};
export default NaukaPlywaniaKrakow;
