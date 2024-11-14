import styles from "../../page.module.scss";
import { GALLERY_MAIN } from "../../../utils/Gallery/Gallery";
import GalleryPhotos from "../../../components/Gallery/GalleryPhotos/GalleryPhotos";
import Scrap2 from "../../../components/Ui/Scrap/Scrap2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria zdjęć",
  description:
    "Sprawdź nasze zdjęcia! - Nauka pływania | Bobowska Przygoda | Wakacyjna Frajda | Wyjazd na Narty | Kreatywne Laboratorium.",
  alternates: {
    languages: {
      "pl-PL": "/pl-PL",
      "en-US": "/en-US",
    },
  },
};
// Generowanie statycznych ścieżek
export async function generateStaticParams() {
  return GALLERY_MAIN.map((item) => ({
    galeriaid: item.href,
  }));
}

// Strona dla dynamicznego id galerii
const GalleryPhotosPage = ({ params }: { params: { galeriaid: string } }) => {
  const data = GALLERY_MAIN.find((item) => item.href === params.galeriaid);
  return (
    <main className={styles.main}>
      {data !== undefined && <GalleryPhotos data={data} />}

      <Scrap2 color="darkBlue" position="bottom" />
    </main>
  );
};

export default GalleryPhotosPage;
