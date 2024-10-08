import styles from "../page.module.scss";
import Gallery from "@/components/Gallery/Gallery";
import Scrap2 from "@/components/Ui/Scrap/Scrap2";
import { GALLERY_MAIN } from "@/utils/Gallery/Gallery";

const GaleriaPage = () => {
  return (
    <main className={styles.main}>
      <Gallery
        title={{ title: "GALERIA", stripTitle: "ZDJĘĆ" }}
        gallery={GALLERY_MAIN}
      />
      <Scrap2 color="darkBlue" position="bottom" />
    </main>
  );
};
export default GaleriaPage;
