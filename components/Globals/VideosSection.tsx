import "react";
import styles from "./videosSection.module.scss";
import Image from "next/image";
const VideosSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles["container__image"]}
        src="/assets/videos/image 80.png"
        loading="eager"
        width={600}
        height={1080}
        alt="123"
      />
      <Image
        className={styles["container__image"]}
        src="/assets/videos/image 81.png"
        loading="eager"
        width={600}
        height={1080}
        alt="123"
      />{" "}
      <Image
        className={styles["container__image"]}
        src="/assets/videos/image 82.png"
        loading="eager"
        width={600}
        height={1080}
        alt="123"
      />
    </div>
  );
};
export default VideosSection;
