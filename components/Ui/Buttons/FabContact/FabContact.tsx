'use client';
import styles from './fabContact.module.scss';
import PhoneIcon from '@/public/assets/ui/Icons/social/phone.svg';
import LocationIcon from '@/public/assets/ui/Icons/location-white.svg';
import CrossIcon from '@/public/assets/ui/Icons/x.svg';
import {useState} from 'react';

interface FabContactProps {
  contactKrakow: boolean;
  contactMalopolska: boolean;
}
const FabContact = ({contactKrakow, contactMalopolska}: FabContactProps) => {
  const [showContact, setShowContact] = useState(false);

  const toggleContactHandler = () => {
    setShowContact((state) => !state);
  };

  if (contactKrakow && contactMalopolska) {
    return (
      <>
        <div className={styles.buttonPcContainer}>
          <div className={styles.buttonPcBox}>
            <img
              className={styles.locationIcon}
              alt="Zapisy basen Kraków"
              width={36}
              height={36}
              loading="eager"
              fetchPriority="high"
              src={LocationIcon.src}
            />
            <div className={styles.textBox}>
              <p>Zapisy Baseny Kraków</p>
              <p>+48 789 246 614</p>
            </div>
            <span className={styles.phoneBox}>
              <img
                alt="Skontakuj się zapisy Kraków"
                width={32}
                height={32}
                loading="eager"
                fetchPriority="high"
                src={PhoneIcon.src}
              />
            </span>
          </div>
          <div className={styles.buttonPcBox}>
            <img
              className={styles.locationIcon}
              alt="Zapisy baseny Małopolska"
              width={36}
              height={36}
              loading="eager"
              fetchPriority="high"
              src={LocationIcon.src}
            />
            <div className={styles.textBox}>
              <p>Zapisy Baseny Małopolska</p>
              <p>+48 519 625 894</p>
            </div>
            <span className={styles.phoneBox}>
              <img
                alt="Skontakuj się zapisy Małopolska"
                width={32}
                height={32}
                loading="eager"
                fetchPriority="high"
                src={PhoneIcon.src}
              />
            </span>
          </div>
          <button
            onClick={toggleContactHandler}
            className={styles.phoneButtonBox1000px}
          >
            <img
              alt="Kontakt zapisy baseny"
              width={36}
              height={36}
              loading="eager"
              fetchPriority="high"
              src={!showContact ? PhoneIcon.src : CrossIcon.src}
            />
          </button>
          <button
            onClick={toggleContactHandler}
            style={{bottom: showContact ? '6.5rem' : '2rem'}}
            className={styles.phoneButtonBox500px}
          >
            <img
              alt="Kontakt zapisy baseny"
              width={24}
              height={24}
              loading="eager"
              fetchPriority="high"
              src={!showContact ? PhoneIcon.src : CrossIcon.src}
            />
          </button>
          <div
            style={{bottom: showContact ? '0px' : '-200px'}}
            className={styles.locationContainerMobile}
          >
            <a href="tel:+48 789 246 614" className={styles.rowBox}>
              <img
                alt="Skontakuj się zapisy Kraków"
                width={32}
                height={32}
                loading="eager"
                fetchPriority="high"
                className={styles.phoneIcon}
                src={PhoneIcon.src}
              />
              <div className={styles.columnBox}>
                <p>Zapisy Baseny Kraków</p>
                <p>+48 789 246 614</p>
              </div>
            </a>
            <a href="tel:+48 519 625 894" className={styles.rowBox}>
              <img
                alt="Skontakuj się zapisy Małopolska"
                width={32}
                height={32}
                loading="eager"
                fetchPriority="high"
                className={styles.phoneIcon}
                src={PhoneIcon.src}
              />
              <div className={styles.columnBox}>
                <p>Zapisy Baseny Małopolska</p>
                <p>+48 519 625 894</p>
              </div>
            </a>
          </div>
        </div>
      </>
    );
  }
  if (contactKrakow) {
    return (
      <>
        <div className={styles.buttonPcContainer}>
          <div className={styles.buttonPcBox}>
            <img
              className={styles.locationIcon}
              alt="Zapisy basen Kraków"
              width={36}
              height={36}
              loading="eager"
              fetchPriority="high"
              src={LocationIcon.src}
            />
            <div className={styles.textBox}>
              <p>Zapisy Baseny Kraków</p>
              <p>+48 789 246 614</p>
            </div>
            <span className={styles.phoneBox}>
              <img
                alt="Skontakuj się zapisy Kraków"
                width={32}
                height={32}
                loading="eager"
                fetchPriority="high"
                src={PhoneIcon.src}
              />
            </span>
          </div>
          <button
            onClick={toggleContactHandler}
            className={styles.phoneButtonBox1000px}
          >
            <img
              alt="Kontakt zapisy baseny"
              width={36}
              height={36}
              loading="eager"
              fetchPriority="high"
              src={!showContact ? PhoneIcon.src : CrossIcon.src}
            />
          </button>
          <button
            onClick={toggleContactHandler}
            style={{bottom: showContact ? '6.5rem' : '2rem'}}
            className={styles.phoneButtonBox500px}
          >
            <img
              alt="Kontakt zapisy baseny"
              width={24}
              height={24}
              loading="eager"
              fetchPriority="high"
              src={!showContact ? PhoneIcon.src : CrossIcon.src}
            />
          </button>
          <div
            style={{bottom: showContact ? '0px' : '-200px'}}
            className={styles.locationContainerMobile}
          >
            <a href="tel:+48 789 246 614" className={styles.rowBox}>
              <img
                alt="Skontakuj się zapisy Kraków"
                width={32}
                height={32}
                loading="eager"
                fetchPriority="high"
                className={styles.phoneIcon}
                src={PhoneIcon.src}
              />
              <div className={styles.columnBox}>
                <p>Zapisy Baseny Kraków</p>
                <p>+48 789 246 614</p>
              </div>
            </a>
          </div>
        </div>
      </>
    );
  }
  if (contactMalopolska) {
    return (
      <>
        <div className={styles.buttonPcContainer}>
          <div className={styles.buttonPcBox}>
            <img
              className={styles.locationIcon}
              alt="Zapisy baseny Małopolska"
              width={36}
              height={36}
              loading="eager"
              fetchPriority="high"
              src={LocationIcon.src}
            />
            <div className={styles.textBox}>
              <p>Zapisy Baseny Małopolska</p>
              <p>+48 519 625 894</p>
            </div>
            <span className={styles.phoneBox}>
              <img
                alt="Skontakuj się zapisy Małopolska"
                width={32}
                height={32}
                loading="eager"
                fetchPriority="high"
                src={PhoneIcon.src}
              />
            </span>
          </div>
          <button
            onClick={toggleContactHandler}
            className={styles.phoneButtonBox1000px}
          >
            <img
              alt="Kontakt zapisy baseny"
              width={36}
              height={36}
              loading="eager"
              fetchPriority="high"
              src={!showContact ? PhoneIcon.src : CrossIcon.src}
            />
          </button>
          <button
            onClick={toggleContactHandler}
            style={{bottom: showContact ? '6.5rem' : '2rem'}}
            className={styles.phoneButtonBox500px}
          >
            <img
              alt="Kontakt zapisy baseny"
              width={24}
              height={24}
              loading="eager"
              fetchPriority="high"
              src={!showContact ? PhoneIcon.src : CrossIcon.src}
            />
          </button>
          <div
            style={{bottom: showContact ? '0px' : '-200px'}}
            className={styles.locationContainerMobile}
          >
            <a href="tel:+48 519 625 894" className={styles.rowBox}>
              <img
                alt="Skontakuj się zapisy Małopolska"
                width={32}
                height={32}
                loading="eager"
                fetchPriority="high"
                className={styles.phoneIcon}
                src={PhoneIcon.src}
              />
              <div className={styles.columnBox}>
                <p>Zapisy Baseny Małopolska</p>
                <p>+48 519 625 894</p>
              </div>
            </a>
          </div>
        </div>
      </>
    );
  }
};
export default FabContact;
