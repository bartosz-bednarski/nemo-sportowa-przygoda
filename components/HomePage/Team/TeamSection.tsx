'use client';
import StickerH3 from '@/components/Ui/Headers/Stickers/StickerH3/StickerH3';
import styles from './teamSection.module.scss';
import LinkButton from '@/components/Ui/Buttons/LinkButton';
import Bubble1Img from '@/public/assets/instructors/agata_hojol.webp';
import Bubble2Img from '@/public/assets/instructors/kinga_kobaka.webp';
import Bubble3Img from '@/public/assets/instructors/wiktoria_fryczek.webp';
import Bubble4Img from '@/public/assets/instructors/weronika_mika.webp';
import Bubble5Img from '@/public/assets/instructors/zofia_gut.webp';

const TeamSection = () => {
  const bubble1Style = `${styles.insctructorBubble} ${styles.bubble1}`;
  const bubble2Style = `${styles.insctructorBubble} ${styles.bubble2}`;
  const bubble3Style = `${styles.insctructorBubble} ${styles.bubble3}`;
  const bubble4Style = `${styles.insctructorBubble} ${styles.bubble4}`;
  const bubble5Style = `${styles.insctructorBubble} ${styles.bubble5}`;
  return (
    <div className={styles.container}>
      <StickerH3
        stripTextColor="basicOrange"
        stripBgColor="white"
        titleStrip="NASZ ZESPÓŁ"
        title=""
      />
      <div className={styles.rowBox}>
        <div className={styles.contentBox}>
          <h4>POZNAJ NASZ ZESPÓŁ</h4>
          <p>
            Nasz zespół to grono doświadczonych instruktorów, którzy od lat z
            pasją i zaangażowaniem szkolą w zakresie pływania. Każdy z naszych
            instruktorów to osoba, która osobiście trenowała pływanie i posiada
            bogate doświadczenie w tej dziedzinie. Dzięki temu możemy zapewnić
            profesjonalne i rzetelne podejście do każdego uczestnika – wiemy,
            jak wygląda trening z perspektywy pływaka, i potrafimy skutecznie
            przekazywać wiedzę oraz technikę.
          </p>
          <LinkButton
            bgColor="white"
            textColor="basicOrange"
            title="Dowiedz się więcej"
            href="/naszzespol"
          />
        </div>
        <div className={styles.bubblesBox}>
          <img
            className={bubble1Style}
            src={Bubble1Img.src}
            alt="Agata Hojoł instruktorka w Szkoła Pływania Nemo Sportowa Przygoda"
            width={270}
            height={270}
            loading="lazy"
          />
          <img
            className={bubble2Style}
            src={Bubble2Img.src}
            alt="Kinga Kobaka menadżerka ds SM w Szkoła Pływania Nemo Sportowa Przygoda"
            width={270}
            height={270}
            loading="lazy"
          />
          <img
            className={bubble3Style}
            src={Bubble3Img.src}
            alt="Wiktoria Fryczek właścicielka Szkoła Pływania Nemo Sportowa Przygoda"
            width={270}
            height={270}
            loading="lazy"
          />
          <img
            className={bubble4Style}
            src={Bubble4Img.src}
            alt="Weronika Mika instruktorka w Szkoła Pływania Nemo Sportowa Przygoda"
            width={270}
            height={270}
            loading="lazy"
          />
          <img
            className={bubble5Style}
            src={Bubble5Img.src}
            alt="Zofia Gut instruktorka w Szkoła Pływania Nemo Sportowa Przygoda"
            width={270}
            height={270}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
