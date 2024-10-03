import React from "react";
import styles from "../../page.module.scss";
import { GALLERY_MAIN } from "@/utils/Gallery/Gallery";
import GalleryPhotos from "@/components/Gallery/GalleryPhotos/GalleryPhotos";

const GalleryPhotosPage = ({ params }: { params: { galeriaid: string } }) => {
  const data = GALLERY_MAIN.find((item) => item.href === params.galeriaid);
  if (data !== undefined) {
    return (
      <main className={styles.main}>
        <GalleryPhotos data={data} />
      </main>
    );
  }
};

export default GalleryPhotosPage;
