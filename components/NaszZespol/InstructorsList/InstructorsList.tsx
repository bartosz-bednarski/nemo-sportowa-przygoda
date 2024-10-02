"use client";
import React, { useState } from "react";
import styles from "./instructorsList.module.scss";
import InstructorBubble from "./InstructorBubble/InstructorBubble";
import { INSTRUKTORZY_BASEN } from "@/utils/Instruktorzy/InstruktorzyBasen";
import Image from "next/image";

const InstructorsList: React.FC = () => {
  const [showPopup, setShowPopup] = useState({
    show: false,
    instructorName: "",
    img: "wiktoria-fryczek.png",
    about1: "",
    about2: "",
  });
  const hidePopupHandler = () => {
    setShowPopup({
      show: false,
      instructorName: "",
      img: "wiktoria-fryczek.png",
      about1: "",
      about2: "",
    });
  };
  return (
    <div className={styles.instructorsList}>
      <h2>DRUŻYNA BASENOWA</h2>
      <div className={styles["instructorsList__row-box"]}>
        {INSTRUKTORZY_BASEN.map((instructor) => (
          <InstructorBubble
            img1={instructor.img}
            instructorName={instructor.nameAndSurname}
            key={instructor.nameAndSurname}
            onClick={() =>
              setShowPopup({
                show: true,
                instructorName: instructor.nameAndSurname,
                img: instructor.img,
                about1: instructor.about1,
                about2: instructor.about2,
              })
            }
          />
        ))}
      </div>
      {showPopup.show && (
        <div
          className={styles["instructorsList__popup"]}
          onClick={hidePopupHandler}
        >
          <span
            className={`${styles["instructorsList__popup__bubble"]} ${styles["instructorsList__popup__bubble-random-1"]}`}
          ></span>
          <span
            className={`${styles["instructorsList__popup__bubble"]} ${styles["instructorsList__popup__bubble-random-2"]}`}
          ></span>
          <div className={styles["instructorsList__popup__column-box"]}>
            <div
              className={`${styles["instructorsList__popup__bubble"]} ${styles["instructorsList__popup__bubble-about-image"]}`}
            >
              <Image
                src={`/assets/instructors/${showPopup.img}`}
                fill={true}
                alt={showPopup.instructorName}
              />
            </div>
            <span
              className={styles["instructorsList__popup__column-box__name"]}
            >
              {showPopup.instructorName}
            </span>
          </div>
          <div
            className={`${styles["instructorsList__popup__bubble"]} ${styles["instructorsList__popup__bubble-about-1"]}`}
          >
            <span>{showPopup.about1}</span>
          </div>

          <div
            className={`${styles["instructorsList__popup__bubble"]} ${styles["instructorsList__popup__bubble-about-2"]}`}
          >
            <span>{showPopup.about2}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstructorsList;
