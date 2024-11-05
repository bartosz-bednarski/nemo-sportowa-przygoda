import styles from "../../page.module.scss";
import VideosSection from "@/components/Globals/VideosSection";
import NaukaPlywaniaBasen from "@/components/NaukaPlywaniaBasen/NaukaPlywaniaBasen";
import {
  BASEN_KORZENNA_INFORMATIONS,
  BASEN_KORZENNA_TUTORIAL,
  NAUKA_PLYWANIA_KORZENNA,
} from "@/utils/NaukaPlywaniaBasen/naukaPlywaniaKorzenna";
import Bubbles from "@/components/Ui/Bubbles/Bubbles";
import { RODZAJE_LEKCJI } from "@/utils/NaukaPlywaniaBasen/rodzajeLekcji";
import PoolNecessaryItems from "@/components/Globals/PoolNecessaryItems/PoolNecessaryItems";
import PoolTutorial from "@/components/Globals/PoolTutorial/PoolTutorial";
import PoolInformations from "@/components/Globals/PoolInformations/PoolInformations";
import Scrap2 from "@/components/Ui/Scrap/Scrap2";
import LessonTypeWrapBox from "@/components/Globals/LessonTypeWrapBox/LessonTypeWrapBox";
import GalleryLink from "@/components/Globals/GalleryLink/GalleryLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nauka pływania KORZENNA",
};

const NaukaPlywaniaKorzenna = () => {
  return (
    <div className={styles.main}>
      <VideosSection
        oneSticker={true}
        oneStickerContent={{
          title: "NAUKA ",
          title2: "PŁYWANIA",
          titleStrip: "KORZENNA",
          stripBgColor: "mediumBlue",
          stripTextColor: "white",
          scale: 1.8,
        }}
        scrapColor="lightBlue"
        col1={{
          video: { src: "pool-mix-4.mp4", alt: "nauka pływania niemowlaki" },
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
            src: "pool-mix-2.mp4",
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
      <NaukaPlywaniaBasen
        about={NAUKA_PLYWANIA_KORZENNA.dzieciMlodziez.about}
        backgroundColor={NAUKA_PLYWANIA_KORZENNA.dzieciMlodziez.backgroundColor}
        instructors={NAUKA_PLYWANIA_KORZENNA.dzieciMlodziez.instructors}
        groups={NAUKA_PLYWANIA_KORZENNA.dzieciMlodziez.groups}
        priceList={NAUKA_PLYWANIA_KORZENNA.dzieciMlodziez.priceList}
      />
      <Bubbles colorTop="lightBlue" colorBottom="mediumBlue" />
      <NaukaPlywaniaBasen
        about={NAUKA_PLYWANIA_KORZENNA.dorosli.about}
        backgroundColor={NAUKA_PLYWANIA_KORZENNA.dorosli.backgroundColor}
        instructors={NAUKA_PLYWANIA_KORZENNA.dorosli.instructors}
        groups={NAUKA_PLYWANIA_KORZENNA.dorosli.groups}
        priceList={NAUKA_PLYWANIA_KORZENNA.dorosli.priceList}
      />
      <Bubbles colorTop="mediumBlue" colorBottom="darkBlue" />
      <LessonTypeWrapBox
        bgImage="grupowe.png"
        bgColor="darkBlue"
        lessonTypes={[
          RODZAJE_LEKCJI.grupowe,
          RODZAJE_LEKCJI.indywidualne,
          RODZAJE_LEKCJI.dwuosobowe,
          RODZAJE_LEKCJI.trzyosobowe,
        ]}
      />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <PoolNecessaryItems color="darkBlue" />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <PoolTutorial poolTutorial={BASEN_KORZENNA_TUTORIAL} />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <PoolInformations poolInformation={BASEN_KORZENNA_INFORMATIONS} />
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
export default NaukaPlywaniaKorzenna;
