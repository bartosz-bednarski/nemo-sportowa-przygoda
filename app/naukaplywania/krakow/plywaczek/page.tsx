import styles from "../../../page.module.scss";
import VideosSection from "@/components/Globals/VideosSection";
import NaukaPlywaniaBasen from "@/components/NaukaPlywaniaBasen/NaukaPlywaniaBasen";
import Bubbles from "@/components/Ui/Bubbles/Bubbles";
import { RODZAJE_LEKCJI } from "@/utils/NaukaPlywaniaBasen/rodzajeLekcji";
import PoolNecessaryItems from "@/components/Globals/PoolNecessaryItems/PoolNecessaryItems";
import PoolTutorial from "@/components/Globals/PoolTutorial/PoolTutorial";
import PoolInformations from "@/components/Globals/PoolInformations/PoolInformations";
import Scrap2 from "@/components/Ui/Scrap/Scrap2";
import LessonTypeWrapBox from "@/components/Globals/LessonTypeWrapBox/LessonTypeWrapBox";
import {
  BASEN_PLYWACZEK_INFORMATIONS,
  BASEN_PLYWACZEK_TUTORIAL,
  NAUKA_PLYWANIA_PLYWACZEK,
} from "@/utils/NaukaPlywaniaBasen/naukaPlywaniaPlywaczek";
import GalleryLink from "@/components/Globals/GalleryLink/GalleryLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nauka pływania Kraków PŁYWACZEK",
};

const NaukaPlywaniaPlywaczek = () => {
  return (
    <div className={styles.main}>
      <VideosSection
        oneSticker={true}
        oneStickerContent={{
          title: "NAUKA ",
          title2: "PŁYWANIA",
          titleStrip: "PŁYWACZEK",
          stripBgColor: "mediumBlue",
          stripTextColor: "white",
          scale: 2.1,
        }}
        scrapColor="lightBlue"
        col1={{
          video: { src: "pool-mix-2.mp4", alt: "nauka pływania niemowlaki" },
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
          video: { src: "pool-mix-4.mp4", alt: "nauka pływania dorośli" },
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
        about={NAUKA_PLYWANIA_PLYWACZEK.dzieciMlodziez.about}
        backgroundColor={
          NAUKA_PLYWANIA_PLYWACZEK.dzieciMlodziez.backgroundColor
        }
        instructors={NAUKA_PLYWANIA_PLYWACZEK.dzieciMlodziez.instructors}
        groups={NAUKA_PLYWANIA_PLYWACZEK.dzieciMlodziez.groups}
        priceList={[]}
      />
      <Bubbles colorTop="lightBlue" colorBottom="mediumBlue" />
      <NaukaPlywaniaBasen
        about={NAUKA_PLYWANIA_PLYWACZEK.dorosli.about}
        backgroundColor={NAUKA_PLYWANIA_PLYWACZEK.dorosli.backgroundColor}
        instructors={NAUKA_PLYWANIA_PLYWACZEK.dorosli.instructors}
        groups={NAUKA_PLYWANIA_PLYWACZEK.dorosli.groups}
        priceList={[]}
      />
      <Bubbles colorTop="mediumBlue" colorBottom="darkBlue" />
      <LessonTypeWrapBox
        bgColor="darkBlue"
        bgImage="lessons-types-bg.webp"
        lessonTypes={[
          RODZAJE_LEKCJI.grupowe,
          RODZAJE_LEKCJI.indywidualne,
          RODZAJE_LEKCJI.dwuosobowe,
        ]}
      />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <PoolNecessaryItems color="darkBlue" />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <PoolTutorial poolTutorial={BASEN_PLYWACZEK_TUTORIAL} />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <PoolInformations poolInformation={BASEN_PLYWACZEK_INFORMATIONS} />
      <Scrap2 position="bottom" color="darkBlue" />
      <GalleryLink
        href="/galeria"
        img="/gallery/galleryLinks/swimming.webp"
        bgColor="darkBlue"
        textColor="white"
      />
    </div>
  );
};
export default NaukaPlywaniaPlywaczek;
