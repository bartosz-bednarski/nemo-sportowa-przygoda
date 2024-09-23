import NaukaPlywania from "@/components/NaukaPlywania/NaukaPlywania";
import styles from "../page.module.scss";
import React from "react";
import VideosSection from "@/components/Globals/VideosSection";
import { NAUKA_PLYWANIA } from "@/utils/NaukaPlywania/naukaPlywania";
const NaukaPlywaniaPage: React.FC = () => {
  return (
    <main className={styles.main}>
      <VideosSection
        scrapColor="lightBlue"
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
      <NaukaPlywania
        about={NAUKA_PLYWANIA.niemowlaki.about}
        instructors={NAUKA_PLYWANIA.niemowlaki.instructors}
        pools={NAUKA_PLYWANIA.niemowlaki.pools}
        backgroundColor={NAUKA_PLYWANIA.niemowlaki.backgroundColor}
      />
      <NaukaPlywania
        about={NAUKA_PLYWANIA.dzieci.about}
        instructors={NAUKA_PLYWANIA.dzieci.instructors}
        pools={NAUKA_PLYWANIA.dzieci.pools}
        backgroundColor={NAUKA_PLYWANIA.dzieci.backgroundColor}
        groups={NAUKA_PLYWANIA.dzieci.groups}
      />
      <NaukaPlywania
        about={NAUKA_PLYWANIA.dorosli.about}
        instructors={NAUKA_PLYWANIA.dorosli.instructors}
        pools={NAUKA_PLYWANIA.dorosli.pools}
        backgroundColor={NAUKA_PLYWANIA.dorosli.backgroundColor}
        groups={NAUKA_PLYWANIA.dorosli.groups}
      />
    </main>
  );
};
export default NaukaPlywaniaPage;
