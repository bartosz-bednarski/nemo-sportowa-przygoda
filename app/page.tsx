import VideosSection from "@/components/Globals/VideosSection";
import styles from "./homePage.module.scss";
import SwimmingSection from "@/components/HomePage/SwimmingSection";
import CampsSection from "@/components/HomePage/CampsSection";
import TrainersSection from "@/components/HomePage/TrainersSection";
// import colors from "../styles/fonts.module.scss";
export default function Home() {
  return (
    <main className={styles.main}>
      <VideosSection />
      <SwimmingSection />
      <CampsSection />
      <TrainersSection />
    </main>
  );
}
