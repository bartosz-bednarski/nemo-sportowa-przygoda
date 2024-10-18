"use client";
import React, { useState } from "react";
import styles from "./galleryPhotos.module.scss";
import { galleryItemType } from "@/types/Gallery/gallery";
import Image from "next/image";
import LogoMainBlack from "@/components/Globals/Logo/LogoMainBlack";
import { COLORS } from "@/utils/UI/colors";
import Link from "next/link";

const GalleryPhotos: React.FC<{ data: galleryItemType }> = ({ data }) => {
  const [showPhotoDetails, setShowPhotoDetails] = useState({
    status: false,
    photoId: 0,
    orientation: "landscape",
  });

  let landscapeId = 0;

  const landscapesFlatWithHref = data.images.landscapes
    .flat()
    .filter((img) => img !== "")
    .map((item) => ({
      href: `/gallery/${data.href}/landscapes/${item}.webp`,
      orientation: "landscape",
    }));
  const portraitsWithHref = data.images.portraits.map((item) => ({
    href: `/gallery/${data.href}/portraits/${item}.webp`,
    orientation: "portrait",
  }));
  const allImages = [...landscapesFlatWithHref, ...portraitsWithHref];

  const showPhotoHandler = (
    id: number,
    orientation: "landscape" | "portrait"
  ) => {
    setShowPhotoDetails({
      status: true,
      photoId: id,
      orientation: orientation,
    });
  };

  const nextPhotoHandler = () => {
    if (showPhotoDetails.photoId === allImages.length - 1) {
      setShowPhotoDetails((state) => ({ ...state }));
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
      setShowPhotoDetails((state) => ({ ...state }));
    } else {
      setShowPhotoDetails((state) => ({
        status: true,
        photoId: state.photoId - 1,
        orientation: allImages[state.photoId - 1].orientation,
      }));
    }
  };
  return (
    <div className={styles.galleryPhotos}>
      {showPhotoDetails.status && (
        <div className={styles["galleryPhotos__selected-photo-overlay"]}>
          <button
            className={styles["galleryPhotos__selected-photo-overlay__button"]}
            onClick={prevPhotoHandler}
          >
            {" "}
            <svg
              width="218"
              height="320"
              viewBox="0 0 218 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M146.882 59.3934C150.873 65.2513 150.873 74.7487 146.882 80.6066L92.7952 160L146.882 239.393C150.873 245.251 150.873 254.749 146.882 260.607C142.891 266.464 136.421 266.464 132.431 260.607L71.118 170.607C67.1273 164.749 67.1273 155.251 71.118 149.393L132.431 59.3934C136.421 53.5355 142.891 53.5355 146.882 59.3934Z"
                fill="#FF914C"
              />
            </svg>
          </button>

          <div
            className={
              styles[
                `galleryPhotos__selected-photo-overlay__${showPhotoDetails.orientation}`
              ]
            }
          >
            {" "}
            <button
              className={styles["galleryPhotos__selected-photo-overlay__x-btn"]}
              onClick={() =>
                setShowPhotoDetails((state) => ({ ...state, status: false }))
              }
            >
              Zamknij{" "}
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7017 20.8739L30.1236 13.452C30.4758 13.1004 30.6739 12.6232 30.6744 12.1255C30.6748 11.6278 30.4775 11.1503 30.1259 10.7981C29.7743 10.4458 29.2971 10.2477 28.7994 10.2473C28.3017 10.2468 27.8242 10.4441 27.472 10.7957L20.0501 18.2176L12.6283 10.7957C12.276 10.4435 11.7983 10.2456 11.3001 10.2456C10.802 10.2456 10.3242 10.4435 9.972 10.7957C9.61976 11.148 9.42188 11.6257 9.42188 12.1239C9.42188 12.622 9.61976 13.0997 9.972 13.452L17.3939 20.8739L9.972 28.2957C9.61976 28.648 9.42188 29.1257 9.42188 29.6239C9.42188 30.122 9.61976 30.5997 9.972 30.952C10.3242 31.3042 10.802 31.5021 11.3001 31.5021C11.7983 31.5021 12.276 31.3042 12.6283 30.952L20.0501 23.5301L27.472 30.952C27.8242 31.3042 28.302 31.5021 28.8001 31.5021C29.2983 31.5021 29.776 31.3042 30.1283 30.952C30.4805 30.5997 30.6784 30.122 30.6784 29.6239C30.6784 29.1257 30.4805 28.648 30.1283 28.2957L22.7017 20.8739Z"
                  fill="white"
                />
              </svg>
            </button>
            <Image
              src={allImages[showPhotoDetails.photoId].href}
              alt={`photo-${showPhotoDetails.photoId}`}
              title={`photo-${showPhotoDetails.photoId}`}
              width={showPhotoDetails.orientation === "landscape" ? 1200 : 780}
              height={showPhotoDetails.orientation === "landscape" ? 676 : 900}
              objectFit="cover"
              loading="eager"
              id={`${landscapeId}`}
            />
          </div>
          <button
            className={styles["galleryPhotos__selected-photo-overlay__button"]}
            onClick={nextPhotoHandler}
          >
            {" "}
            <svg
              width="218"
              height="320"
              viewBox="0 0 218 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M71.118 260.607C67.1273 254.749 67.1273 245.251 71.118 239.393L125.205 160L71.118 80.6066C67.1273 74.7487 67.1273 65.2513 71.118 59.3934C75.1087 53.5355 81.5788 53.5355 85.5695 59.3934L146.882 149.393C150.873 155.251 150.873 164.749 146.882 170.607L85.5695 260.607C81.5788 266.464 75.1087 266.464 71.118 260.607Z"
                fill="#FF914C"
              />
            </svg>
          </button>
        </div>
      )}
      <div className={styles["galleryPhotos__row-container"]}>
        <div
          className={styles["galleryPhotos__row-container__custom-portrait"]}
          style={{ background: COLORS[data.stripColor] }}
        >
          <h1
            className={
              styles["galleryPhotos__row-container__custom-portrait__title"]
            }
            style={{ color: COLORS[data.stripTextColor] }}
          >
            {data.title}
          </h1>
          <LogoMainBlack width="80%" height="auto" />
          {data.collab && (
            <Link
              href={data.collabHref}
              style={{ alignSelf: "center", textAlign: "center" }}
            >
              {data.collabHref !== "" && (
                <Image
                  src={`/gallery/collab/${data.collabLogo}`}
                  style={{ width: "80%", height: "auto" }}
                  width="190"
                  height="152"
                  alt={data.collabLogo}
                />
              )}
            </Link>
          )}
        </div>
        {data.images.landscapes.map((landscape, index) => {
          return (
            <div
              className={styles["galleryPhotos__row-container__column"]}
              key={`landscape${index}`}
            >
              {landscape[0] !== "" &&
                (() => {
                  const currentId = landscapeId++; // Zachowaj aktualne id dla tego zdjęcia
                  return (
                    <span
                      className={styles["galleryPhotos__landscape"]}
                      key={currentId}
                    >
                      <Image
                        src={`/gallery/${data.href}/landscapes/${landscape[0]}.webp`}
                        alt={`${data.href}-landscape-${currentId}`}
                        title={`${data.href}-landscape-${currentId}`}
                        width={660}
                        height={338}
                        objectFit="cover"
                        loading="eager"
                        id={`${currentId}`} // Przypisanie unikalnego id
                        onClick={() => showPhotoHandler(currentId, "landscape")} // Przekazanie unikalnego id do funkcji
                      />
                    </span>
                  );
                })()}
              {landscape[1] !== "" &&
                (() => {
                  const currentId = landscapeId++; // Zachowaj aktualne id dla tego zdjęcia
                  return (
                    <span
                      className={styles["galleryPhotos__landscape"]}
                      key={currentId}
                    >
                      <Image
                        src={`/gallery/${data.href}/landscapes/${landscape[1]}.webp`}
                        alt={`${data.href}-landscape-${currentId}`}
                        title={`${data.href}-landscape-${currentId}`}
                        width={660}
                        height={338}
                        objectFit="cover"
                        loading="eager"
                        id={`${currentId}`} // Przypisanie unikalnego id
                        onClick={() => showPhotoHandler(currentId, "landscape")} // Przekazanie unikalnego id do funkcji
                      />
                    </span>
                  );
                })()}
            </div>
          );
        })}
        {data.images.portraits.map((portrait, index) => (
          <span
            className={styles["galleryPhotos__portrait"]}
            key={`portrait${index}`}
          >
            {portrait !== "" && (
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
                    "portrait"
                  )
                }
              />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};
export default GalleryPhotos;
