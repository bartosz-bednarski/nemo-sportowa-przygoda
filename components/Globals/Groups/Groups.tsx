'use client';
import React from 'react';
import styles from './groups.module.scss';
import {groupsType} from '@/types/NaukaPlywania/naukaPlywania';
import GroupLvl from '@/components/Globals/GroupLvl/GroupLvl';
import StripH2 from '@/components/Ui/Strips/StripH2/StripH2';

const Groups: React.FC<groupsType> = ({stripH2, groups}) => {
  return (
    <div className={styles.groups}>
      <StripH2
        type="h2"
        title={stripH2.title}
        stripBgColor={stripH2.stripBgColor}
        stripTextColor={stripH2.stripTextColor}
      />
      <div className={styles['groups__row-box']}>
        {groups.length > 0 &&
          groups.map((group, index) => (
            <GroupLvl
              key={index}
              stickerH4={group.stickerH4}
              aboutTextPoppins={group.aboutTextPoppins}
              skills={group.skills}
            />
          ))}
      </div>
    </div>
  );
};
export default Groups;
