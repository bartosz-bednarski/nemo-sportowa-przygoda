'use client';
import React from 'react';
import styles from './naukaPlywaniaBasen.module.scss';
import {customColors} from '@/types/UI/colors';
import {COLORS} from '@/utils/UI/colors';
import PriceList, {PriceListPropsType} from '../Ui/PriceList/PriceList';
import {instructorsRowBoxType} from '@/types/Globals/globals';
import Groups, {GroupsPropsType} from '../Ui/Groups/Groups';
import NaukaPlywaniaAbout, {
  NaukaPływaniaAboutPropsType,
} from '../Ui/NaukaPlywaniaAbout/NaukaPlywaniaAbout';

export interface NaukaPlywaniaBasenPropsType {
  about: NaukaPływaniaAboutPropsType;
  backgroundColor: customColors;
  instructors: instructorsRowBoxType;
  groups: GroupsPropsType;
  priceList?: PriceListPropsType;
}

const NaukaPlywaniaBasen = ({
  about,
  backgroundColor,
  groups,
  priceList,
}: NaukaPlywaniaBasenPropsType) => {
  return (
    <div
      className={styles.naukaPlywaniaBasen}
      style={{background: COLORS[backgroundColor]}}
    >
      <NaukaPlywaniaAbout
        stickerH2={about.stickerH2}
        aboutTextPoppins={about.aboutTextPoppins}
        image={about.image}
        button={about.button}
      />
      {priceList !== undefined && <PriceList priceList={priceList} />}

      <Groups stripH2={groups.stripH2} groups={groups.groups} />
    </div>
  );
};
export default NaukaPlywaniaBasen;
