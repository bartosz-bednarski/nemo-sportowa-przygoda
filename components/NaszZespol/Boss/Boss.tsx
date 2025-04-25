'use client';
import React from 'react';
import styles from './boss.module.scss';
import BossImage1 from '@/public/assets/instructors/boss.webp';
import BossImage2 from '@/public/assets/instructors/boss2.webp';
const Boss: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerRow}>
        <div className={styles.contentBox}>
          <div className={styles.headerBox}>
            <h2>SZEFOWA</h2>
            <h3>WIKTORIA FRYCZEK</h3>
          </div>
          <img src={BossImage2.src} className={styles.imageLeft} />
          <p>
            {' '}
            Stworzyłam Nemo Sportową Przygodę, aby rozbudzić w ludziach pasję do
            aktywnego trybu życia – od maluszków, które mają zaledwie 3
            miesiące, aż po dorosłych! Sama przez 10 lat trenowałam pływanie, a
            teraz, jako studentka 3. roku prawa na uniwersytecie im. Komisji i
            Edukacji Narodowej, równolegle rozwijam swoje zamiłowanie do sportu,
            prowadząc zajęcia w Korzennej, Gorlicach i Krakowie. Każde spotkanie
            to dla mnie okazja, by zarażać innych radością z ruchu, pokazując,
            jak aktywność fizyczna może być źródłem zdrowia, pewności siebie i
            pozytywnej energii.
          </p>
          <p>
            {' '}
            Nic nie daje mi większej satysfakcji niż widok uśmiechniętych
            dzieci, które z każdym treningiem zdobywają nowe umiejętności i
            przełamują swoje ograniczenia. Dlatego organizujemy też półkolonie
            pełne zabawy, przygód i sportowych wyzwań – by najmłodsi mogli
            odkrywać swoje talenty, rozwijać pewność siebie i czerpać radość z
            ruchu.
          </p>
          <p>
            Nemo Sportowa Przygoda to nie tylko nauka pływania, to przestrzeń, w
            której każde dziecko i dorosły może doświadczyć, jak cudownie jest
            być aktywnym.
          </p>
          <p>
            <b>
              {' '}
              Zapraszamy do wspólnej przygody, która może zmienić nawyki na całe
              życie!
            </b>
          </p>
        </div>
        <img src={BossImage1.src} className={styles.imageRight} />
      </div>
      <div className={styles.textBoxMobile}>
        <p>
          {' '}
          Stworzyłam Nemo Sportową Przygodę, aby rozbudzić w ludziach pasję do
          aktywnego trybu życia – od maluszków, które mają zaledwie 3 miesiące,
          aż po dorosłych! Sama przez 10 lat trenowałam pływanie, a teraz, jako
          studentka 3. roku prawa na uniwersytecie im. Komisji i Edukacji
          Narodowej, równolegle rozwijam swoje zamiłowanie do sportu, prowadząc
          zajęcia w Korzennej, Gorlicach i Krakowie. Każde spotkanie to dla mnie
          okazja, by zarażać innych radością z ruchu, pokazując, jak aktywność
          fizyczna może być źródłem zdrowia, pewności siebie i pozytywnej
          energii.
        </p>
        <p>
          {' '}
          Nic nie daje mi większej satysfakcji niż widok uśmiechniętych dzieci,
          które z każdym treningiem zdobywają nowe umiejętności i przełamują
          swoje ograniczenia. Dlatego organizujemy też półkolonie pełne zabawy,
          przygód i sportowych wyzwań – by najmłodsi mogli odkrywać swoje
          talenty, rozwijać pewność siebie i czerpać radość z ruchu.
        </p>
        <p>
          Nemo Sportowa Przygoda to nie tylko nauka pływania, to przestrzeń, w
          której każde dziecko i dorosły może doświadczyć, jak cudownie jest być
          aktywnym.
        </p>
        <p>
          <b>
            {' '}
            Zapraszamy do wspólnej przygody, która może zmienić nawyki na całe
            życie!
          </b>
        </p>
      </div>
    </div>
    // <div className={styles.boss}>
    //   <div className={styles['boss__content']}>
    //     <div className={styles['boss__content__header-box']}>
    //       <div className={styles['boss__content__header-box__text-box']}>
    //         <div
    //           className={styles['boss__content__header-box__text-box__header']}
    //         >
    //           <h2>SZEFOWA</h2>
    //           <img
    //             className={styles['boss__logo']}
    //             src="/assets/logo/logo-nemo-only.webp"
    //             width={125}
    //             height={122}
    //             alt="logo nemo"
    //           />
    //         </div>
    //         <h3>WIKTORIA FRYCZEK</h3>
    //         <img
    //           className={styles['boss__logo-mobile']}
    //           src="/assets/logo/logo-nemo-only.webp"
    //           width={125}
    //           height={122}
    //           alt="logo nemo"
    //         />
    //       </div>
    //       <img
    //         className={styles['boss__image-mobile']}
    //         src="/assets/instructors/boss.webp"
    //         width={500}
    //         height={500}
    //         alt="szefowa"
    //       />
    //     </div>

    // <span>
    //   Stworzyłam Nemo Sportową Przygodę, aby rozbudzić w ludziach pasję do
    //   aktywnego trybu życia – od maluszków, które mają zaledwie 3 miesiące,
    //   aż po dorosłych! Sama przez 10 lat trenowałam pływanie, a teraz, jako
    //   studentka 3. roku prawa na uniwersytecie im. Komisji i Edukacji
    //   Narodowej, równolegle rozwijam swoje zamiłowanie do sportu, prowadząc
    //   zajęcia w Korzennej, Gorlicach i Krakowie. Każde spotkanie to dla mnie
    //   okazja, by zarażać innych radością z ruchu, pokazując, jak aktywność
    //   fizyczna może być źródłem zdrowia, pewności siebie i pozytywnej
    //   energii.
    // </span>
    // <span>
    //   Nic nie daje mi większej satysfakcji niż widok uśmiechniętych dzieci,
    //   które z każdym treningiem zdobywają nowe umiejętności i przełamują
    //   swoje ograniczenia. Dlatego organizujemy też półkolonie pełne zabawy,
    //   przygód i sportowych wyzwań – by najmłodsi mogli odkrywać swoje
    //   talenty, rozwijać pewność siebie i czerpać radość z ruchu.
    //   <br />
    //   <br /> Nemo Sportowa Przygoda to nie tylko nauka pływania, to
    //   przestrzeń, w której każde dziecko i dorosły może doświadczyć, jak
    //   cudownie jest być aktywnym. <br />
    //   <b>
    //     Zapraszamy do wspólnej przygody, która może zmienić nawyki na całe
    //     życie!
    //   </b>
    // </span>
    //   </div>
    //   <img
    //     className={styles['boss__image']}
    //     src="/assets/instructors/boss.webp"
    //     width={500}
    //     height={500}
    //     alt="szefowa"
    //   />
    // </div>
  );
};
export default Boss;
