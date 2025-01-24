import styles from '../galleryPhotos.module.scss';
import {GalleryItemType} from '@/utils/Gallery/Gallery';

interface PortraitPhotoPropsType {
  portrait: string;
  index: number;
  data: GalleryItemType;
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
          <img
            src={`/gallery/${data.href}/portraits/${portrait}.webp`}
            alt={`${data.href}-portrait-${index}`}
            title={`${data.href}-portrait-${index}`}
            width={600}
            height={692}
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
