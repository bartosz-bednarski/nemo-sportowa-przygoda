import Image from 'next/image';
import styles from '../galleryPhotos.module.scss';
import {galleryItemType} from '@/types/Gallery/gallery';

interface PortraitPhotoPropsType {
  portrait: string;
  index: number;
  data: galleryItemType;
  landscapesFlatWithHref: {
    href: string;
    orientation: string;
  }[];
  showPhotoHandler: (id: number, orientation: 'landscape' | 'portrait') => void;
}

const PortraitPhoto = ({
  portrait,
  index,
  data,
  landscapesFlatWithHref,
  showPhotoHandler,
}: PortraitPhotoPropsType) => {
  if (portrait !== '') {
    return (
      <span className={styles.portrait} key={`portrait${index}`}>
        {portrait !== '' && (
          <Image
            src={`/gallery/${data.href}/portraits/${portrait}.webp`}
            alt={`${data.href}-portrait-${index}`}
            title={`${data.href}-portrait-${index}`}
            width={600}
            height={692}
            objectFit="cover"
            loading="lazy"
            id={`${landscapesFlatWithHref.length + index}`}
            onClick={() =>
              showPhotoHandler(
                Number(landscapesFlatWithHref.length + index),
                'portrait'
              )
            }
          />
        )}
      </span>
    );
  }
  return null;
};

export default PortraitPhoto;
