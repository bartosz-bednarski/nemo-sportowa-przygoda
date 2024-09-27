import VideosSection from "@/components/Globals/VideosSection";
import styles from "./page.module.scss";
import SwimmingSection from "@/components/HomePage/Swimming/SwimmingSection";
import CampsSection from "@/components/HomePage/Camps/CampsSection";
import TrainersSection from "@/components/HomePage/Trainers/TrainersSection";
// import colors from "../styles/fonts.module.scss";
export default function Home() {
  return (
    <main className={styles.main}>
      <VideosSection
        oneSticker={false}
        scrapColor="mediumBlue"
        col1={{
          image: { src: "image 80.png", alt: "nauka pływania" },
          stickerH2: {
            title: "NAUKA",
            titleStrip: "PŁYWANIA",
            stripBgColor: "mediumBlue",
            stripTextColor: "white",
            scale: 1.15,
          },
        }}
        col2={{
          image: {
            src: "image 81.png",
            alt: "obozy i półkolonie",
          },
          stickerH2: {
            title: "OBOZY",
            titleStrip: "PÓŁKOLONIE",
            stripBgColor: "basicOrange",
            stripTextColor: "white",
            scale: 1.15,
          },
        }}
        col3={{
          image: { src: "image 82.png", alt: "oferty specjalne" },
          stickerH2: {
            title: "OFERTY",
            titleStrip: "SPECJALNE",
            stripBgColor: "basicBrown",
            stripTextColor: "white",
            scale: 1.15,
          },
        }}
      />
      <SwimmingSection />
      <CampsSection />
      <TrainersSection />
    </main>
  );
}
