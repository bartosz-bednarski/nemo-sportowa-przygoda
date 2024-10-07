import NaukaPlywania from "@/components/NaukaPlywania/NaukaPlywania";
import styles from "../page.module.scss";
import React from "react";
import VideosSection from "@/components/Globals/VideosSection";
import { NAUKA_PLYWANIA } from "@/utils/NaukaPlywania/naukaPlywania";
import Bubbles from "@/components/Ui/Bubbles/Bubbles";
import ScrapFooter from "@/components/Ui/Scrap/ScrapFooter";
const NaukaPlywaniaPage: React.FC = () => {
  return (
    <main className={styles.main} style={{ paddingBottom: "3rem" }}>
      <VideosSection
        oneSticker={false}
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
        about={NAUKA_PLYWANIA.zRodzicami.about}
        instructors={NAUKA_PLYWANIA.zRodzicami.instructors}
        pools={NAUKA_PLYWANIA.zRodzicami.pools}
        backgroundColor={NAUKA_PLYWANIA.zRodzicami.backgroundColor}
        groups={NAUKA_PLYWANIA.zRodzicami.groups}
      />
      <Bubbles colorTop="lightBlue" colorBottom="mediumBlue" />
      <NaukaPlywania
        about={NAUKA_PLYWANIA.dzieciMlodziez.about}
        instructors={NAUKA_PLYWANIA.dzieciMlodziez.instructors}
        pools={NAUKA_PLYWANIA.dzieciMlodziez.pools}
        backgroundColor={NAUKA_PLYWANIA.dzieciMlodziez.backgroundColor}
        groups={NAUKA_PLYWANIA.dzieciMlodziez.groups}
      />
      <Bubbles colorTop="mediumBlue" colorBottom="darkBlue" />
      <NaukaPlywania
        about={NAUKA_PLYWANIA.dorosli.about}
        instructors={NAUKA_PLYWANIA.dorosli.instructors}
        pools={NAUKA_PLYWANIA.dorosli.pools}
        backgroundColor={NAUKA_PLYWANIA.dorosli.backgroundColor}
        groups={NAUKA_PLYWANIA.dorosli.groups}
      />
      <ScrapFooter color="darkBlue" />
    </main>
  );
};
export default NaukaPlywaniaPage;
