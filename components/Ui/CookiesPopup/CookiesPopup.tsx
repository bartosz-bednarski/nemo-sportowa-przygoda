'use client';
import React, {useEffect, useState} from 'react';
import styles from './popup.module.scss';
import {hasCookie, setCookie} from 'cookies-next';
import Link from 'next/link';
import {COLORS} from '@/utils/UI/colors';

const CookiesPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (hasCookie('cookies-accept') === false) {
       const timer = setTimeout(() => {
      setShowPopup(true);}, 5000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const closePopupHandler = () => {
    const now = new Date();
    const time = now.getTime();
    const expireTime = time + 1000 * 3600 * 144;
    now.setTime(expireTime);
    setCookie('cookies-accept', 0, {expires: now});
    setShowPopup(false);
  };

  return (
    <div
      className={styles.popup}
      style={{display: showPopup ? 'flex' : 'none'}}
    >
      <span className={styles.cookiesAbout}>
        Używamy plików cookies, aby zapewnić lepszą obsługę. Kontynuuj
        korzystanie z witryny jeśli się z tym zgadzasz, lub dowiedz się,
        <a href="https://www.google.com/search?q=jak+wy%C5%82%C4%85czy%C4%87+pliki+cookies&sca_esv=5ed3572dacaed608&ei=5VNAaMjJKKawwPAP6eyy6Q0&oq=jak+wy%C5%82%C4%85czy%C4%87+pliki+&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIhZqYWsgd3nFgsSFY3p5xIcgcGxpa2kgKgIIADIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5I3C5QAFjjJ3AAeAGQAQCYAVWgAYAKqgECMTm4AQPIAQD4AQGYAhOgAtQKwgILEAAYgAQYsQMYgwHCAg4QLhiABBixAxjRAxjHAcICBBAuGAPCAggQABiABBixA8ICCxAuGIAEGLEDGIMBwgIIEC4YgAQYsQPCAg4QLhiABBixAxiDARiKBcICChAAGIAEGEMYigXCAgUQLhiABMICCBAuGIAEGNQCwgIOEC4YgAQYsQMYgwEY1ALCAgoQLhiABBhDGIoFwgIOEAAYgAQYsQMYgwEYyQPCAgsQABiABBiSAxiKBcICCxAuGIAEGLEDGNQCwgIKEAAYgAQYyQMYCsICBxAAGIAEGArCAgsQABiABBixAxiLA8ICFxAuGIAEGLEDGIMBGNQCGKQDGKgDGIsDwgIIEAAYgAQYiwOYAwCSBwIxOaAHu9oBsgcCMTm4B9QKwgcEMi0xOcgHTg&sclient=gws-wiz-serp">
          {' '}
          jak wyłączyć pliki cookies
        </a>
        .
      </span>
      <div className={styles.rowBox}>
        <Link
          className={styles.linkButton}
          href="/assets/statues/NEMO_polityka-prywatnosci.pdf"
        >
          <span>Polityka prywatności</span>{' '}
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.4545 5.21439C12.8938 4.77505 13.6062 4.77505 14.0455 5.21439L20.7955 11.9644C21.2348 12.4037 21.2348 13.116 20.7955 13.5554L14.0455 20.3054C13.6062 20.7447 12.8938 20.7447 12.4545 20.3054C12.0152 19.866 12.0152 19.1537 12.4545 18.7144L17.284 13.8849H5.375C4.75368 13.8849 4.25 13.3812 4.25 12.7599C4.25 12.1386 4.75368 11.6349 5.375 11.6349H17.284L12.4545 6.80538C12.0152 6.36604 12.0152 5.65373 12.4545 5.21439Z"
              fill={COLORS['white']}
            />
          </svg>
        </Link>
        <button className={styles.linkButton} onClick={closePopupHandler}>
          <span>Akceptuję</span>
        </button>
      </div>
    </div>
  );
};

export default CookiesPopup;
