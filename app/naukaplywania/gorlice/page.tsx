import React from "react";
import styles from "../../page.module.scss";
import VideosSection from "@/components/Globals/VideosSection";
import NaukaPlywaniaBasen from "@/components/NaukaPlywaniaBasen/NaukaPlywaniaBasen";
import { NAUKA_PLYWANIA_GORLICE } from "@/utils/NaukaPlywaniaBasen/naukaPlywaniaGorlice";
import LessonType from "@/components/Globals/LessonType/LessonType";
import { RODZAJE_LEKCJI } from "@/utils/NaukaPlywaniaBasen/rodzajeLekcji";
import PoolNecessaryItems from "@/components/Globals/PoolNecessaryItems/PoolNecessaryItems";
import Bubbles from "@/components/Ui/Bubbles/Bubbles";
import PoolTutorial from "@/components/Globals/PoolTutorial/PoolTutorial";
import PoolInformations from "@/components/Globals/PoolInformations/PoolInformations";
import Scrap2 from "@/components/Ui/Scrap/Scrap2";
const NaukaPlywaniaGorlice: React.FC = () => {
  return (
    <div className={styles.main}>
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
      <NaukaPlywaniaBasen
        about={NAUKA_PLYWANIA_GORLICE.niemowlaki.about}
        backgroundColor={NAUKA_PLYWANIA_GORLICE.niemowlaki.backgroundColor}
        instructors={NAUKA_PLYWANIA_GORLICE.niemowlaki.instructors}
      />
      <LessonType
        bgColor="lightBlue"
        lessonType={RODZAJE_LEKCJI.indywidualne}
      />
      <LessonType bgColor="lightBlue" lessonType={RODZAJE_LEKCJI.grupowe} />
      <PoolNecessaryItems color="lightBlue" />
      <Bubbles colorTop="lightBlue" colorBottom="mediumBlue" />
      <PoolTutorial color="mediumBlue" />
      <Bubbles colorTop="mediumBlue" colorBottom="darkBlue" />
      <PoolInformations color="darkBlue" />
      <Scrap2 position="bottom" color="mediumBlue" />
    </div>
  );
};
export default NaukaPlywaniaGorlice;
