'use client';
import React from 'react';
import styles from './groups.module.scss';
import GroupLvl, {GroupLvlPropsType} from './GroupLvl/GroupLvl';
import StickerH2, {
  StickerH2PropsType,
} from '@/components/Ui/Headers/Stickers/StickerH2/StickerH2';

export interface GroupsBySkillPropsType {
  stripH2: StickerH2PropsType;
  groups: GroupLvlPropsType[];
}

const GroupsBySkill = ({stripH2, groups}: GroupsBySkillPropsType) => {
  return (
    <div className={styles.groups}>
      <StickerH2
        titleStrip={stripH2.titleStrip}
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

export default GroupsBySkill;
