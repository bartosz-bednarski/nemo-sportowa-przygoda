'use client';
import React from 'react';
import styles from './groups.module.scss';
import StripH2 from '@/components/Ui/Strips/StripH2/StripH2';
import GroupLvl, {GroupLvlPropsType} from '../GroupLvl/GroupLvl';
import {stripH2Type} from '@/types/UI/stickerStripStrap';

export interface GroupsPropsType {
  stripH2: stripH2Type;
  groups: GroupLvlPropsType[];
}

const Groups = ({stripH2, groups}: GroupsPropsType) => {
  return (
    <div className={styles.groups}>
      <StripH2
        type="h2"
        title={stripH2.title}
        stripBgColor={stripH2.stripBgColor}
        stripTextColor={stripH2.stripTextColor}
      />
      <div className={styles.rowBox}>
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
