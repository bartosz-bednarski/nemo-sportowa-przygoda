'use client';
import React from 'react';
import styles from './contact.module.scss';
import WebsiteIcon from '@/public/assets/ui/Icons/social/website-white.svg';
import PhoneIcon from '@/public/assets/ui/Icons/social/phone.svg';
import EmailIcon from '@/public/assets/ui/Icons/social/email.svg';

export interface ContactPropsType {
  title: string;
  phone: string;
  email: string;
  website?: string;
}

const Contact: React.FC<{contact: ContactPropsType}> = ({contact}) => {
  return (
    <div className={styles.contact}>
      <div className={styles.box}>
        <h3 className={styles.header}>{contact.title}</h3>
        {contact.website !== undefined && (
          <a href={contact.website} className={styles.text}>
            <img src={WebsiteIcon.src} alt="websiteIcon" />

            {contact.website}
          </a>
        )}

        <span className={styles.text}>
          <img
            src={PhoneIcon.src}
            alt="phoneIcon"
            title="phone"
            width={50}
            height={50}
            loading="lazy"
          />

          {contact.phone}
        </span>
        <span className={styles.text}>
          <img
            src={EmailIcon.src}
            alt="emailIcon"
            title="email"
            width={50}
            height={50}
            loading="lazy"
          />

          {contact.email}
        </span>
      </div>
    </div>
  );
};

export default Contact;
