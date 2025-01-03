import Image from 'next/image';
import styles from '../galleryPhotos.module.scss';
import {galleryItemType} from '@/types/Gallery/gallery';

interface LandscapePhotoPropsType {
  landscape: string[];
  index: number;
  landscapeId: number;
  data: galleryItemType;
  showPhotoHandler: (id: number, orientation: 'landscape' | 'portrait') => void;
}

const LandscapePhoto = ({
  landscape,
  index,
  landscapeId,
  data,
  showPhotoHandler,
}: LandscapePhotoPropsType) => {
  return (
    <div className={styles.columnContainer} key={`landscape${index}`}>
      {landscape[0] !== '' &&
        (() => {
          const currentId = landscapeId++; // Zachowaj aktualne id dla tego zdjęcia
          return (
            <span className={styles.landscape} key={currentId}>
              <Image
                src={`/gallery/${data.href}/landscapes/${landscape[0]}.webp`}
                alt={`${data.href}-landscape-${currentId}`}
                title={`${data.href}-landscape-${currentId}`}
                width={660}
                height={338}
                objectFit="cover"
                loading="eager"
                id={`${currentId}`} // Przypisanie unikalnego id
                onClick={() => showPhotoHandler(currentId, 'landscape')} // Przekazanie unikalnego id do funkcji
              />
            </span>
          );
        })()}
      {landscape[1] !== '' &&
        (() => {
          const currentId = landscapeId++; // Zachowaj aktualne id dla tego zdjęcia
          return (
            <span className={styles.landscape} key={currentId}>
              <Image
                src={`/gallery/${data.href}/landscapes/${landscape[1]}.webp`}
                alt={`${data.href}-landscape-${currentId}`}
                title={`${data.href}-landscape-${currentId}`}
                width={660}
                height={338}
                objectFit="cover"
                loading="eager"
                id={`${currentId}`} // Przypisanie unikalnego id
                onClick={() => showPhotoHandler(currentId, 'landscape')} // Przekazanie unikalnego id do funkcji
              />
            </span>
          );
        })()}
    </div>
  );
};

export default LandscapePhoto;
