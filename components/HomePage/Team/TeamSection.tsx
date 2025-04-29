'use client';
import StickerH3 from '@/components/Ui/Headers/Stickers/StickerH3/StickerH3';
import styles from './teamSection.module.scss';
import LinkButton from '@/components/Ui/Buttons/LinkButton';

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
          <span className={bubble1Style}></span>
          <span className={bubble2Style}></span>
          <span className={bubble3Style}></span>
          <span className={bubble4Style}></span>
          <span className={bubble5Style}></span>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
