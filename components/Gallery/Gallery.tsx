"use client";
import React from "react";
import styles from "./gallery.module.scss";
import Image from "next/image";
import StripH1 from "../Ui/StripH1/StripH1";
import Scrap2 from "../Ui/Scrap/Scrap2";
import { GALLERY_MAIN } from "@/utils/Gallery/Gallery";
import { COLORS } from "@/utils/UI/colors";
import { galleryMainType } from "@/types/Gallery/gallery";
import Link from "next/link";

const Gallery: React.FC<{
  title: { title: string; stripTitle: string };
  gallery: galleryMainType;
}> = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles["gallery__hero"]}>
        <Image
          src="/gallery/hero.webp"
          fill={true}
          alt="gallery-hero"
          objectFit="cover"
        />
        <div className={styles["gallery__hero__title"]}>
          <h1 className={styles["gallery__hero__title__header"]}>GALERIA</h1>
          <span className={styles["gallery__hero__title__strip"]}>
            {" "}
            <StripH1
              type="h1"
              title="ZDJĘĆ"
              stripBgColor="basicOrange"
              stripTextColor="white"
              scale={1.4}
            />
          </span>
        </div>
        <Scrap2 position="bottom" color="basicOrange" />
      </div>
      <div className={styles["gallery__row-box"]}>
        {GALLERY_MAIN.map((item) => (
          <Link href={`/galeria/${item.href}`} key={item.title}>
            <div className={styles["gallery__row-box__item"]}>
              <Image
                className={styles["gallery__row-box__item__image-box"]}
                src={`/gallery/Covers/${item.coverImage}`}
                width={500}
                height={350}
                alt={item.title}
                loading="eager"
              />

              <span
                className={styles["gallery__row-box__item__title"]}
                style={{ background: COLORS[item.stripColor] }}
              >
                <svg
                  width="25"
                  height="89"
                  viewBox="0 0 25 89"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={
                    styles["gallery__row-box__item__title__scrap-left"]
                  }
                >
                  <path
                    d="M24.4601 0.805469C17.2601 0.320749 14.1932 0.348468 11.7932 0.804676C8.59325 1.43196 6.05995 3.65597 7.12662 4.96757C7.52662 5.50931 8.05994 7.64779 8.19327 9.67221C8.3266 13.2078 8.45994 13.4359 11.9266 14.5194C15.7933 15.717 16.5933 16.886 14.1933 17.8269C13.3933 18.1406 12.7266 19.3381 12.7266 20.4786C12.7266 22.4175 12.3266 22.6741 8.19327 23.7861C5.65994 24.4704 3.65992 25.2118 3.52658 25.4684C3.52658 25.725 3.12656 26.1812 2.8599 26.4949C1.52656 27.7779 0.993243 30.4296 2.05991 30.7433C4.05991 31.285 4.72658 32.5966 3.52658 33.7371C0.193251 36.9021 -0.873436 40.3521 0.859898 41.9774C2.8599 43.7167 3.5266 44.515 4.45993 46.8816C4.99327 47.9081 5.79327 48.8775 6.19327 49.0201C6.7266 49.1912 7.25992 50.1036 7.52658 51.073C7.79325 52.4987 7.12661 53.2115 4.19327 54.5801C2.3266 55.521 0.993284 56.5475 1.39328 56.8612C1.79328 57.1748 1.65995 57.4884 1.12662 57.5455C-0.206712 57.7165 0.859906 65.0729 2.32657 66.1279C2.99324 66.6126 3.92657 67.7816 4.32657 68.751C4.99324 70.0912 6.05993 70.7184 8.7266 71.3172C11.6599 72.0015 12.0599 72.3437 11.9266 73.9689C11.7933 74.9954 12.3266 76.0219 12.9933 76.25C13.7933 76.5351 13.2599 76.8772 11.1266 77.3905C7.12656 78.3029 3.79327 80.6695 4.45993 81.9526C4.85993 82.4943 5.25992 83.4637 5.52658 84.091C5.79325 84.6898 6.59325 85.2601 7.52658 85.3171C8.32658 85.3741 8.99326 85.6022 8.99326 85.8303C8.99326 86.0584 9.92659 86.315 10.9933 86.4291C12.1933 86.5146 13.9266 86.9423 14.9933 87.37C18.0599 88.6531 21.3851 88.9097 24.4599 88.9097C24.4617 86.9496 24.4609 4.96836 24.4601 0.805469Z"
                    fill={COLORS[item.stripColor]}
                  />
                </svg>

                <h4
                  style={{
                    background: COLORS[item.stripColor],
                    color: COLORS[item.stripTextColor],
                  }}
                >
                  {item.title}
                </h4>
                <svg
                  width="25"
                  height="89"
                  viewBox="0 0 25 89"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={
                    styles["gallery__row-box__item__title__scrap-right"]
                  }
                >
                  <path
                    d="M0.000796026 88.5568C7.2008 89.0416 10.2677 89.0138 12.6677 88.5576C15.8677 87.9303 18.401 85.7063 17.3343 84.3947C16.9343 83.853 16.401 81.7145 16.2677 79.6901C16.1343 76.1545 16.001 75.9264 12.5343 74.8429C8.66766 73.6453 7.86767 72.4763 10.2677 71.5354C11.0677 71.2218 11.7343 70.0242 11.7343 68.8837C11.7343 66.9448 12.1343 66.6882 16.2677 65.5762C18.801 64.8919 20.801 64.1505 20.9344 63.8939C20.9344 63.6373 21.3344 63.1811 21.601 62.8675C22.9344 61.5844 23.4677 58.9327 22.401 58.619C20.401 58.0773 19.7344 56.7657 20.9344 55.6252C24.2677 52.4602 25.3344 49.0102 23.601 47.3849C21.601 45.6456 20.9343 44.8473 20.001 42.4807C19.4677 41.4542 18.6677 40.4848 18.2677 40.3422C17.7343 40.1711 17.201 39.2587 16.9344 38.2893C16.6677 36.8636 17.3343 36.1508 20.2677 34.7822C22.1343 33.8413 23.4677 32.8148 23.0677 32.5012C22.6677 32.1875 22.801 31.8739 23.3343 31.8168C24.6676 31.6458 23.601 24.2894 22.1344 23.2345C21.4677 22.7497 20.5344 21.5807 20.1344 20.6113C19.4677 19.2712 18.401 18.6439 15.7343 18.0451C12.801 17.3608 12.401 17.0186 12.5343 15.3934C12.6677 14.3669 12.1343 13.3405 11.4677 13.1124C10.6677 12.8272 11.201 12.4851 13.3344 11.9718C17.3344 11.0594 20.6677 8.69284 20.001 7.40975C19.601 6.86801 19.201 5.89857 18.9344 5.27129C18.6677 4.67251 17.8677 4.10225 16.9344 4.04523C16.1344 3.9882 15.4677 3.76009 15.4677 3.53199C15.4677 3.30389 14.5343 3.04727 13.4677 2.93322C12.2677 2.84768 10.5343 2.41999 9.46768 1.99229C6.40101 0.709211 3.07584 0.452591 0.00100336 0.452591C-0.000787697 2.41273 1.27894e-06 84.3939 0.000796026 88.5568Z"
                    fill={COLORS[item.stripColor]}
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Gallery;
