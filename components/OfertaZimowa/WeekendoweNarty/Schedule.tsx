"use client";
import React from "react";
import styles from "./schedule.module.scss";
import { weekendNaStokuScheduleComponentType } from "@/types/SummerWinter/Camps";

const Schedule: React.FC<{ schedule: weekendNaStokuScheduleComponentType }> = ({
  schedule,
}) => {
  return (
    <div className={styles.schedule}>
      <div className={styles["schedule__content"]}>
        <h2 className={styles["schedule__content__header"]}>PLAN DNIA</h2>
        <div className={styles["schedule__content__list"]}>
          {schedule.list.map((listItem, index) => (
            <div
              className={styles["schedule__content__list__item"]}
              key={index}
            >
              <div
                className={styles["schedule__content__list__item__item-row"]}
              >
                <span
                  className={
                    styles["schedule__content__list__item__item-row__time"]
                  }
                >
                  {listItem.time}
                </span>
                <span
                  className={
                    styles["schedule__content__list__item__item-row__about"]
                  }
                >
                  {listItem.info}
                </span>
              </div>
              {listItem.subList !== undefined && (
                <div
                  className={styles["schedule__content__list__item__sublist"]}
                >
                  {listItem.subList.map((sublistItem, index) => (
                    <div
                      key={`sublistItem-${index}`}
                      className={
                        styles["schedule__content__list__item__sublist__item"]
                      }
                    >
                      <span
                        className={
                          styles[
                            "schedule__content__list__item__sublist__item__title"
                          ]
                        }
                      >
                        {sublistItem.title}
                      </span>
                      <span
                        className={
                          styles[
                            "schedule__content__list__item__sublist__item__about"
                          ]
                        }
                      >
                        {sublistItem.about}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Schedule;
