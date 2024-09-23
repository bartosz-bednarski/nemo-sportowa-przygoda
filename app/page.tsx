import VideosSection from "@/components/Globals/VideosSection";
import styles from "./page.module.scss";
import SwimmingSection from "@/components/HomePage/Swimming/SwimmingSection";
import CampsSection from "@/components/HomePage/Camps/CampsSection";
import TrainersSection from "@/components/HomePage/Trainers/TrainersSection";
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
