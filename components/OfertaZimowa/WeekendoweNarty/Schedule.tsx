'use client';
import React from 'react';
import styles from './schedule.module.scss';

export interface WeekendNaStokuSchedulePropsType{
  title: string;
    list: {
        time: string;
        info: string;
        subList?: {
            title: string;
            about: string;
        }[];
    }[];
}

const Schedule: React.FC<{schedule: WeekendNaStokuSchedulePropsType}> = ({
  schedule,
}) => {
  return (
    <div className={styles.schedule}>
      <div className={styles.content}>
        <h2 className={styles.header}>PLAN DNIA</h2>
        <div className={styles.list}>
          {schedule.list.map((listItem, index) => (
            <div
              className={styles.item}
              key={index}
            >
              <div
                className={styles.itemRow}
              >
                <span
                  className={
                    styles.time
                  }
                >
                  {listItem.time}
                </span>
                <span
                  className={
                    styles.about
                  }
                >
                  {listItem.info}
                </span>
              </div>
              {listItem.subList !== undefined && (
                <div
                  className={styles.sublist}
                >
                  {listItem.subList.map((sublistItem, index) => (
                    <div
                      key={`sublistItem-${index}`}
                      className={
                        styles.item
                      }
                    >
                      <span
                        className={
                          styles.title
                        }
                      >
                        {sublistItem.title}
                      </span>
                      <span
                        className={
                          styles.about
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
