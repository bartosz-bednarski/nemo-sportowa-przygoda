import styles from "../page.module.scss";
import Gallery from "@/components/Gallery/Gallery";
import { GALLERY_MAIN } from "@/utils/Gallery/Gallery";

const GaleriaPage = () => {
  return (
    <main className={styles.main}>
      <Gallery
        title={{ title: "GALERIA", stripTitle: "ZDJĘĆ" }}
        gallery={GALLERY_MAIN}
      />
    </main>
  );
};
export default GaleriaPage;
