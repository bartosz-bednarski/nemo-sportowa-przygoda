import "react";
import styles from "./trainersSection.module.scss";
import AboutTextPoppins from "@/components/Ui/AboutTextPoppins/AboutTextPoppins";
import BackgroundText from "@/components/Ui/BackgroundText/BackgroundText";
import StickerH2 from "@/components/Ui/StickerH2/StickerH2";
import InstructorBubble from "@/components/Globals/InstructorBubble/InstructorBubble";
import MainButton from "@/components/Ui/Buttons/MainButton";
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
          title="Lorem ipsum dolor sit amet consectetur"
          titleColor="basicOrange"
          description="Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu. Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu."
        />
      </div>
      <div className={styles["trainers__trainers-gallery"]}>
        <InstructorBubble scale={1} />
        <InstructorBubble scale={0.6} />
        <InstructorBubble scale={0.8} />
        <InstructorBubble scale={0.9} />
        <MainButton
          title="Nasz zespół"
          textColor="basicOrange"
          bgColor="white"
        />
      </div>
    </section>
  );
};
export default TrainersSection;
