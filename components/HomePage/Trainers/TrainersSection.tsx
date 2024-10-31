"use client";
import "react";
import styles from "./trainersSection.module.scss";
import AboutTextPoppins from "@/components/Ui/AboutTextPoppins/AboutTextPoppins";
import BackgroundText from "@/components/Ui/BackgroundText/BackgroundText";
import StickerH2 from "@/components/Ui/StickerH2/StickerH2";
import InstructorBubble from "@/components/Globals/InstructorBubble/InstructorBubble";
import LinkButton from "@/components/Ui/Buttons/LinkButton";
import Scrap2 from "@/components/Ui/Scrap/Scrap2";
const TrainersSection: React.FC = () => {
  return (
    <section className={styles.trainers}>
      <BackgroundText title="NASZ ZESPÓŁ" />
      <div className={styles["trainers__about-container"]}>
        <StickerH2
          title="DOŚWIADCZENI"
          titleStrip="TRENERZY"
          stripTextColor="basicOrange"
          stripBgColor="white"
          scale={1.2}
          paddingBottom={0}
        />
        <AboutTextPoppins
          title=""
          titleColor="basicOrange"
          description="Nasz zespół to grono doświadczonych instruktorów, którzy od lat z pasją i zaangażowaniem szkolą w zakresie pływania. Każdy z naszych instruktorów to osoba, która osobiście trenowała pływanie i posiada bogate doświadczenie w tej dziedzinie. Dzięki temu możemy zapewnić profesjonalne i rzetelne podejście do każdego uczestnika – wiemy, jak wygląda trening z perspektywy pływaka, i potrafimy skutecznie przekazywać wiedzę oraz technikę."
        />
      </div>
      <div className={styles["trainers__trainers-gallery"]}>
        <InstructorBubble
          scale={1}
          img1="instructor-1.png"
          img2="instructor-1.png"
          instructorName=""
          href="/"
        />
        <InstructorBubble
          scale={0.6}
          img1="instructor-1.png"
          img2="instructor-1.png"
          instructorName=""
          href="/"
        />
        <InstructorBubble
          scale={0.8}
          img1="instructor-1.png"
          img2="instructor-1.png"
          instructorName=""
          href="/"
        />
        <InstructorBubble
          scale={0.9}
          img1="instructor-1.png"
          img2="instructor-1.png"
          instructorName=""
          href="/"
        />
        <LinkButton
          title="Nasz zespół"
          textColor="basicOrange"
          bgColor="white"
          href="/naszzespol"
        />
      </div>
      <Scrap2 color="darkBlue" position="bottom" />
    </section>
  );
};
export default TrainersSection;
