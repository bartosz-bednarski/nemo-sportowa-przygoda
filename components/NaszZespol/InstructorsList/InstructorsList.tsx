"use client";
import React, { useState } from "react";
import styles from "./instructorsList.module.scss";
import InstructorBubble from "./InstructorBubble/InstructorBubble";
import { INSTRUKTORZY_BASEN } from "@/utils/Instruktorzy/InstruktorzyBasen";
import Image from "next/image";
import { COLORS } from "@/utils/UI/colors";

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
      <div
        className={styles.bubbles}
        style={{
          background: `linear-gradient(180deg,${COLORS["mediumBlue"]} 0%, ${COLORS["darkBlue"]} 100%)`,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1921"
          height="416"
          viewBox="0 0 1921 416"
          fill="none"
        >
          <g id="bubble-1">
            <rect
              x="434.742"
              y="249.934"
              width="59"
              height="59"
              rx="29.5"
              stroke="white"
              strokeWidth="2"
            />
            <circle
              cx="484.742"
              cy="271.934"
              r="10"
              fill="white"
              fillOpacity="0.62"
            />
          </g>
          <g id="bubble-2">
            <rect
              x="1443"
              y="102.434"
              width="59"
              height="59"
              rx="29.5"
              stroke="white"
              strokeWidth="2"
            />
            <circle
              cx="1493"
              cy="124.434"
              r="10"
              fill="white"
              fillOpacity="0.62"
            />
          </g>
          <g id="bubble-3">
            <rect
              x="1466"
              y="233.934"
              width="59"
              height="59"
              rx="29.5"
              stroke="white"
              strokeWidth="2"
            />
            <circle
              cx="1516"
              cy="255.934"
              r="10"
              fill="white"
              fillOpacity="0.62"
            />
          </g>
          <g id="bubble-4">
            <rect
              x="1211.5"
              y="99.4336"
              width="59"
              height="59"
              rx="29.5"
              stroke="white"
              strokeWidth="2"
            />
            <circle
              cx="1261.5"
              cy="121.434"
              r="10"
              fill="white"
              fillOpacity="0.62"
            />
          </g>
          <g id="bubble-5">
            <rect
              x="321"
              y="232.434"
              width="72"
              height="72"
              rx="36"
              stroke="white"
              strokeWidth="2"
            />
            <circle
              cx="366.872"
              cy="250.305"
              r="5.87152"
              fill="white"
              fillOpacity="0.62"
            />
          </g>
          <g id="bubble-6">
            <rect
              x="605"
              y="295.434"
              width="77"
              height="76"
              rx="38"
              stroke="white"
              strokeWidth="2"
            />
            <circle
              cx="655"
              cy="317.434"
              r="10"
              fill="white"
              fillOpacity="0.62"
            />
          </g>
          <g id="bubble-7">
            <rect
              x="789.875"
              y="241.434"
              width="77"
              height="76"
              rx="38"
              stroke="white"
              strokeWidth="2"
            />
            <circle
              cx="839.875"
              cy="263.434"
              r="10"
              fill="white"
              fillOpacity="0.62"
            />
          </g>
          <g id="bubble-8">
            <rect
              x="1584"
              y="193.434"
              width="49"
              height="49"
              rx="24.5"
              stroke="white"
              strokeWidth="2"
            />
            <circle
              cx="1599.25"
              cy="208.684"
              r="6.25"
              fill="white"
              fillOpacity="0.62"
            />
          </g>
          <g id="bubble-9">
            <rect
              x="373.742"
              y="106.934"
              width="77"
              height="76"
              rx="38"
              stroke="white"
              strokeWidth="2"
            />
            <circle
              cx="423.742"
              cy="128.934"
              r="10"
              fill="white"
              fillOpacity="0.62"
            />
          </g>
          <g id="bubble-10">
            <rect
              x="757"
              y="132.934"
              width="77"
              height="76"
              rx="38"
              stroke="white"
              strokeWidth="2"
            />
            <circle
              cx="807"
              cy="154.934"
              r="10"
              fill="white"
              fillOpacity="0.62"
            />
          </g>
          <g id="bubble-11">
            <rect
              x="935.5"
              y="106.934"
              width="77"
              height="76"
              rx="38"
              stroke="white"
              strokeWidth="2"
            />
            <circle
              cx="985.5"
              cy="128.934"
              r="10"
              fill="white"
              fillOpacity="0.62"
            />
          </g>
          <g id="bubble-12">
            <rect
              x="1163"
              y="287.434"
              width="77"
              height="76"
              rx="38"
              stroke="white"
              strokeWidth="2"
            />
            <circle
              cx="1213"
              cy="309.434"
              r="10"
              fill="white"
              fillOpacity="0.62"
            />
          </g>
          <g id="bubble-13">
            <rect
              x="935.5"
              y="249.934"
              width="77"
              height="76"
              rx="38"
              stroke="white"
              strokeWidth="2"
            />
            <circle
              cx="985.5"
              cy="271.934"
              r="10"
              fill="white"
              fillOpacity="0.62"
            />
          </g>
          <g id="bubble-14">
            <rect
              x="1042"
              y="54.9336"
              width="77"
              height="76"
              rx="38"
              stroke="white"
              strokeWidth="2"
            />
            <circle
              cx="1092"
              cy="76.9336"
              r="10"
              fill="white"
              fillOpacity="0.62"
            />
          </g>
          <g id="bubble-15">
            <rect
              x="526"
              y="145.934"
              width="77"
              height="76"
              rx="38"
              stroke="white"
              strokeWidth="2"
            />
            <circle
              cx="576"
              cy="167.934"
              r="10"
              fill="white"
              fillOpacity="0.62"
            />
          </g>
          <g id="bubble-16">
            <rect
              x="1600.25"
              y="294.934"
              width="77"
              height="76"
              rx="38"
              stroke="white"
              strokeWidth="2"
            />
            <circle
              cx="1650.25"
              cy="316.934"
              r="10"
              fill="white"
              fillOpacity="0.62"
            />
          </g>
          <g id="bubble-17">
            <rect
              x="1277"
              y="206.434"
              width="77"
              height="76"
              rx="38"
              stroke="white"
              strokeWidth="2"
            />
            <circle
              cx="1327"
              cy="228.434"
              r="10"
              fill="white"
              fillOpacity="0.62"
            />
          </g>
          <g id="bubble-18">
            <rect
              x="143"
              y="97.4336"
              width="59"
              height="58"
              rx="29"
              stroke="white"
              strokeWidth="2"
            />
            <circle
              cx="189.211"
              cy="115.644"
              r="6.21069"
              fill="white"
              fillOpacity="0.62"
            />
          </g>
          <g id="bubble-19">
            <rect
              x="143"
              y="265.434"
              width="61"
              height="59"
              rx="29.5"
              stroke="white"
              strokeWidth="2"
            />
            <circle
              cx="193"
              cy="287.434"
              r="10"
              fill="white"
              fillOpacity="0.62"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default InstructorsList;
