import Image from 'next/image';
import styles from './selectedPhoto.module.scss';
import {
  AllImagesType,
  ShowPhotoDetailsType,
} from '../../GalleryPhotos/GalleryPhotos';
import PrevPhotoButton from '@/components/Ui/Buttons/PrevPhotoButton/PrevPhotoButton';
import XPhotoButton from '@/components/Ui/Buttons/XPhotoButton/XPhotoButton';
import NextPhotoButton from '@/components/Ui/Buttons/NextPhotoButton/NextPhotoButton';

export interface SelectedPhotoPropsType {
  prevPhotoHandler: () => void;
  showPhotoDetails: ShowPhotoDetailsType;
  xBtnHandler: () => void;
  allImages: AllImagesType;
  landscapeId: number;
  nextPhotoHandler: () => void;
}

const SelectedPhoto = ({
  prevPhotoHandler,
  showPhotoDetails,
  xBtnHandler,
  allImages,
  landscapeId,
  nextPhotoHandler,
}: SelectedPhotoPropsType) => {
  return (
    <div className={styles.selectedPhoto}>
      <PrevPhotoButton onClick={prevPhotoHandler} />

      <div className={styles[`${showPhotoDetails.orientation}`]}>
        <XPhotoButton onClick={xBtnHandler} />
        <Image
          src={allImages[showPhotoDetails.photoId].href}
          alt={`photo-${showPhotoDetails.photoId}`}
          title={`photo-${showPhotoDetails.photoId}`}
          width={showPhotoDetails.orientation === 'landscape' ? 1200 : 780}
          height={showPhotoDetails.orientation === 'landscape' ? 676 : 900}
          objectFit="cover"
          loading="eager"
          id={`${landscapeId}`}
        />
      </div>
      <NextPhotoButton onClick={nextPhotoHandler} />
    </div>
  );
};

export default SelectedPhoto;
