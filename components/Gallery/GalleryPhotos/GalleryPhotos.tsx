'use client';
import React, {useState} from 'react';
import styles from './galleryPhotos.module.scss';
import {galleryItemType} from '@/types/Gallery/gallery';
import SelectedPhoto from './SelectedPhoto/SelectedPhoto';
import TitleCart from './TitleCart/TitleCart';
import LandscapePhoto from './LandscapePhoto/LandscapePhoto';
import PortraitPhoto from './PortraitPhoto/PortraitPhoto';

export type ShowPhotoDetailsType = {
  status: boolean;
  photoId: number;
  orientation: string;
};

export type AllImagesType = {
  href: string;
  orientation: string;
}[];

const GalleryPhotos: React.FC<{data: galleryItemType}> = ({data}) => {
  const [showPhotoDetails, setShowPhotoDetails] = useState({
    status: false,
    photoId: 0,
    orientation: 'landscape',
  });

  const landscapeId = 0;

  const landscapesFlatWithHref = data.images.landscapes
    .flat()
    .filter((img) => img !== '')
    .map((item) => ({
      href: `/gallery/${data.href}/landscapes/${item}.webp`,
      orientation: 'landscape',
    }));

  const portraitsWithHref = data.images.portraits.map((item) => ({
    href: `/gallery/${data.href}/portraits/${item}.webp`,
    orientation: 'portrait',
  }));

  const allImages = [...landscapesFlatWithHref, ...portraitsWithHref];

  const showPhotoHandler = (
    id: number,
    orientation: 'landscape' | 'portrait'
  ) => {
    setShowPhotoDetails({
      status: true,
      photoId: id,
      orientation: orientation,
    });
  };

  const nextPhotoHandler = () => {
    if (showPhotoDetails.photoId === allImages.length - 1) {
      setShowPhotoDetails((state) => ({...state}));
    } else {
      setShowPhotoDetails((state) => ({
        status: true,
        photoId: state.photoId + 1,
        orientation: allImages[state.photoId + 1].orientation,
      }));
    }
  };

  const prevPhotoHandler = () => {
    if (showPhotoDetails.photoId === 0) {
      setShowPhotoDetails((state) => ({...state}));
    } else {
      setShowPhotoDetails((state) => ({
        status: true,
        photoId: state.photoId - 1,
        orientation: allImages[state.photoId - 1].orientation,
      }));
    }
  };

  const xBtnHandler = () => {
    setShowPhotoDetails((state) => ({...state, status: false}));
  };

  return (
    <div className={styles.galleryPhotos}>
      {showPhotoDetails.status && (
        <SelectedPhoto
          prevPhotoHandler={prevPhotoHandler}
          showPhotoDetails={showPhotoDetails}
          xBtnHandler={xBtnHandler}
          allImages={allImages}
          landscapeId={landscapeId}
          nextPhotoHandler={nextPhotoHandler}
        />
      )}
      <div className={styles.rowContainer}>
        <TitleCart data={data} />
        {data.images.landscapes.map((landscape, index) => (
          <LandscapePhoto
            landscape={landscape}
            index={index}
            landscapeId={landscapeId}
            data={data}
            showPhotoHandler={showPhotoHandler}
            key={index}
          />
        ))}
        {data.images.portraits.map((portrait, index) => (
          <PortraitPhoto
            portrait={portrait}
            index={index}
            data={data}
            landscapesFlatWithHref={landscapesFlatWithHref}
            showPhotoHandler={showPhotoHandler}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
export default GalleryPhotos;
