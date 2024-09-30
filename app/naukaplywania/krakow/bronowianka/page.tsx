import React from "react";
import styles from "../../../page.module.scss";
import VideosSection from "@/components/Globals/VideosSection";
import NaukaPlywaniaBasen from "@/components/NaukaPlywaniaBasen/NaukaPlywaniaBasen";
import Bubbles from "@/components/Ui/Bubbles/Bubbles";
import LessonType from "@/components/Globals/LessonType/LessonType";
import { RODZAJE_LEKCJI } from "@/utils/NaukaPlywaniaBasen/rodzajeLekcji";
import PoolNecessaryItems from "@/components/Globals/PoolNecessaryItems/PoolNecessaryItems";
import PoolTutorial from "@/components/Globals/PoolTutorial/PoolTutorial";
import PoolInformations from "@/components/Globals/PoolInformations/PoolInformations";
import Scrap2 from "@/components/Ui/Scrap/Scrap2";

import {
  BASEN_BRONOWIANKA_INFORMATIONS,
  NAUKA_PLYWANIA_BRONOWIANKA,
} from "@/utils/NaukaPlywaniaBasen/naukaPlywaniaBronowianka";
import { BASEN_KORZENNA_TUTORIAL } from "@/utils/NaukaPlywaniaBasen/naukaPlywaniaKorzenna";
const NaukaPlywaniaBronowianka: React.FC = () => {
  return (
    <div className={styles.main}>
      <VideosSection
        oneSticker={true}
        oneStickerContent={{
          title: "NAUKA ",
          title2: "PŁYWANIA",
          titleStrip: "BRONOWIANKA",
          stripBgColor: "mediumBlue",
          stripTextColor: "white",
          scale: 1.3,
        }}
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
        about={NAUKA_PLYWANIA_BRONOWIANKA.zRodzicami.about}
        backgroundColor={NAUKA_PLYWANIA_BRONOWIANKA.zRodzicami.backgroundColor}
        instructors={NAUKA_PLYWANIA_BRONOWIANKA.zRodzicami.instructors}
        groups={NAUKA_PLYWANIA_BRONOWIANKA.zRodzicami.groups}
        priceList={NAUKA_PLYWANIA_BRONOWIANKA.zRodzicami.priceList}
      />
      <Bubbles colorTop="lightBlue" colorBottom="mediumBlue" />
      <LessonType bgColor="mediumBlue" lessonType={RODZAJE_LEKCJI.grupowe} />
      <Bubbles colorTop="mediumBlue" colorBottom="darkBlue" />
      <PoolNecessaryItems color="darkBlue" />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      {/* TU TRZEBA WSTAWIĆ PORADNIK DO BRONOWIANKI TEN JEST Z KORZENNEJ */}
      <PoolTutorial poolTutorial={BASEN_KORZENNA_TUTORIAL} />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <PoolInformations poolInformation={BASEN_BRONOWIANKA_INFORMATIONS} />
      <Scrap2 position="bottom" color="darkBlue" />
    </div>
  );
};
export default NaukaPlywaniaBronowianka;
