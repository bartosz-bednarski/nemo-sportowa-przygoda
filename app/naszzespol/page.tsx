import Boss from "@/components/NaszZespol/Boss/Boss";
import styles from "../page.module.scss";
import HeroTeam from "@/components/NaszZespol/Hero/Hero";
import InstructorsList from "@/components/NaszZespol/InstructorsList/InstructorsList";
import Scrap2 from "@/components/Ui/Scrap/Scrap2";

const NaszZespolPage = () => {
  return (
    <main className={styles.main}>
      <HeroTeam />
      <Boss />
      <InstructorsList />
      <Scrap2 position="bottom" color="darkBlue" />
    </main>
  );
};

export default NaszZespolPage;
