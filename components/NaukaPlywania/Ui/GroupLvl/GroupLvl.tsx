'use client';
import React, {useState} from 'react';
import styles from './groupLvl.module.scss';
import {StickerH4PropsType} from '@/components/Ui/Headers/Stickers/StickerH4/StickerH4';
import {AboutTextPoppinsPropsType} from '@/components/Ui/AboutTextPoppins/AboutTextPoppins';
import {COLORS} from '@/utils/UI/colors';

export interface GroupLvlPropsType {
  stickerH4: StickerH4PropsType;
  aboutTextPoppins: AboutTextPoppinsPropsType;
  skills: string[];
}

const GroupLvl = ({stickerH4, aboutTextPoppins, skills}: GroupLvlPropsType) => {
  const h4Styles = {
    backgroundColor: stickerH4.stripBgColor
      ? COLORS[stickerH4.stripBgColor]
      : COLORS.basicOrange,
    color: stickerH4.stripTextColor
      ? COLORS[stickerH4.stripTextColor]
      : COLORS.white,
  };
  const [showSkills, setShowSkills] = useState(false);

  const showSkillsHandler = () => {
    setShowSkills((prevState) => !prevState);
  };
  if (skills.length > 0) {
    return (
      <div className={styles.container} onClick={showSkillsHandler}>
        {!showSkills && (
          <>
            <h4 style={h4Styles}>
              {stickerH4.title} {stickerH4.titleStrip}
            </h4>
            <h5>{aboutTextPoppins.title}</h5>
            <p>{aboutTextPoppins.description}</p>
          </>
        )}
        {showSkills && (
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        )}
        <span className={styles.button}>
          {!showSkills ? 'Pokaż umiejętności' : 'Pokaż opis'}
        </span>
      </div>
    );
  }
  if (skills.length === 0) {
    return (
      <div className={styles.container}>
        <>
          <h4 style={h4Styles}>
            {stickerH4.title} {stickerH4.titleStrip}
          </h4>
          <h5>{aboutTextPoppins.title}</h5>
        </>
        <p>{aboutTextPoppins.description}</p>
      </div>
    );
  }

  // <div className={styles.containerCol}>
  //   <StickerH4
  //     titleStrip={stickerH4.titleStrip}
  //     title={stickerH4.title}
  //     stripTextColor={stickerH4.stripTextColor}
  //     stripBgColor={stickerH4.stripBgColor}
  //   />
  //   <AboutTextPoppins
  //     title={aboutTextPoppins.title}
  //     titleColor={aboutTextPoppins.titleColor}
  //     description={aboutTextPoppins.description}
  //     alignItems="center"
  //     textAlign="center"
  //   />
  //   {skills.length > 0 && (
  //     <>
  //       <button
  //         className={styles.button}
  //         style={{flexDirection: showSkills ? 'column-reverse' : 'column'}}
  //         onClick={() => setShowSkills(!showSkills)}
  //       >
  //         Umiejętności
  //         <svg
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //           style={{
  //             transform: showSkills ? 'rotate(180deg)' : '',
  //           }}
  //         >
  //           <path
  //             fillRule="evenodd"
  //             clipRule="evenodd"
  //             d="M4.4545 7.8295C4.89384 7.39017 5.60616 7.39017 6.0455 7.8295L12 13.784L17.9545 7.8295C18.3938 7.39017 19.1062 7.39017 19.5455 7.8295C19.9848 8.26884 19.9848 8.98116 19.5455 9.4205L12.7955 16.1705C12.3562 16.6098 11.6438 16.6098 11.2045 16.1705L4.4545 9.4205C4.01517 8.98116 4.01517 8.26884 4.4545 7.8295Z"
  //             fill="#ff914c"
  //           />
  //         </svg>
  //       </button>
  //     </>
  //   )}

  //   {showSkills && (
  //     <>
  //       <ul style={{opacity: showSkills ? '1' : '0'}}>
  //         {skills.length > 0 &&
  //           skills.map((skill, index) => <li key={index}>{skill}</li>)}
  //       </ul>
  //     </>
  //   )}
  // </div>
};

export default GroupLvl;
