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
  BASEN_EISENBERGA_INFORMATIONS,
  NAUKA_PLYWANIA_EISENBERGA,
} from "@/utils/NaukaPlywaniaBasen/naukaPlywaniaEisenberga";
const NaukaPlywaniaEisenberga: React.FC = () => {
  return (
    <div className={styles.main}>
      <VideosSection
        oneSticker={true}
        oneStickerContent={{
          title: "NAUKA ",
          title2: "PŁYWANIA",
          titleStrip: "EISENBERGA",
          stripBgColor: "mediumBlue",
          stripTextColor: "white",
          scale: 1.15,
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
        about={NAUKA_PLYWANIA_EISENBERGA.dzieci.about}
        backgroundColor={NAUKA_PLYWANIA_EISENBERGA.dzieci.backgroundColor}
        instructors={NAUKA_PLYWANIA_EISENBERGA.dzieci.instructors}
        groups={NAUKA_PLYWANIA_EISENBERGA.dzieci.groups}
        priceList={NAUKA_PLYWANIA_EISENBERGA.dzieci.priceList}
      />
      <Bubbles colorTop="lightBlue" colorBottom="mediumBlue" />
      <NaukaPlywaniaBasen
        about={NAUKA_PLYWANIA_EISENBERGA.mlodziez.about}
        backgroundColor={NAUKA_PLYWANIA_EISENBERGA.mlodziez.backgroundColor}
        instructors={NAUKA_PLYWANIA_EISENBERGA.mlodziez.instructors}
        groups={NAUKA_PLYWANIA_EISENBERGA.mlodziez.groups}
        priceList={NAUKA_PLYWANIA_EISENBERGA.mlodziez.priceList}
      />
      <Bubbles colorTop="mediumBlue" colorBottom="darkBlue" />
      <NaukaPlywaniaBasen
        about={NAUKA_PLYWANIA_EISENBERGA.dorosli.about}
        backgroundColor={NAUKA_PLYWANIA_EISENBERGA.dorosli.backgroundColor}
        instructors={NAUKA_PLYWANIA_EISENBERGA.dorosli.instructors}
        groups={NAUKA_PLYWANIA_EISENBERGA.dorosli.groups}
        priceList={NAUKA_PLYWANIA_EISENBERGA.dorosli.priceList}
      />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <LessonType bgColor="darkBlue" lessonType={RODZAJE_LEKCJI.grupowe} />
      <LessonType bgColor="darkBlue" lessonType={RODZAJE_LEKCJI.indywidualne} />
      <LessonType bgColor="darkBlue" lessonType={RODZAJE_LEKCJI.dwuosobowe} />
      <LessonType bgColor="darkBlue" lessonType={RODZAJE_LEKCJI.trzyosobowe} />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <PoolNecessaryItems color="darkBlue" />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <PoolTutorial color="darkBlue" />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <PoolInformations poolInformation={BASEN_EISENBERGA_INFORMATIONS} />
      <Scrap2 position="bottom" color="mediumBlue" />
    </div>
  );
};
export default NaukaPlywaniaEisenberga;
