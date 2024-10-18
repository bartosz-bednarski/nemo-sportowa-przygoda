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
          video: { src: "pool-mix-1.mp4", alt: "nauka pływania" },
          stickerH2: {
            title: "NAUKA",
            titleStrip: "PŁYWANIA",
            stripBgColor: "mediumBlue",
            stripTextColor: "white",
            scale: 1.15,
          },
        }}
        col2={{
          video: {
            src: "winter-mix-1.mp4",
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
          video: { src: "summer-mix-1.mp4", alt: "oferty specjalne" },
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
