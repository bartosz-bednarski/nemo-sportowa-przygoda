'use client';
import React from 'react';
import styles from './naukaPlywania.module.scss';
import Pools from './Pools/Pools';
import {poolsType} from '@/types/NaukaPlywania/naukaPlywania';
import {COLORS} from '@/utils/UI/colors';
import Groups, {GroupsPropsType} from '../Ui/Groups/Groups';
import {customColors} from '@/types/UI/colors';
import StickerH4 from '@/components/Ui/Stickers/StickerH4/StickerH4';
import NaukaPlywaniaAbout, {
  NaukaPływaniaAboutPropsType,
} from '../Ui/NaukaPlywaniaAbout/NaukaPlywaniaAbout';

export interface NaukaPlywaniaPropsType {
  about: NaukaPływaniaAboutPropsType;
  pools: poolsType;
  groups?: GroupsPropsType;
  backgroundColor: customColors;
}

const NaukaPlywania = ({
  about,
  pools,
  groups,
  backgroundColor,
}: NaukaPlywaniaPropsType) => {
  return (
    <div
      className={styles.containerCol}
      style={{background: COLORS[backgroundColor]}}
    >
      <NaukaPlywaniaAbout
        stickerH2={about.stickerH2}
        aboutTextPoppins={about.aboutTextPoppins}
        image={about.image}
      />
      {about.stickerH2.titleStrip === 'Z RODZICAMI' && (
        <div className={styles.rowBox} id="tips">
          <div className={styles.columnBox}>
            <StickerH4
              title="KORZYŚCI Z ZAJĘĆ"
              titleStrip="W WODZIE"
              stripBgColor="basicOrange"
              stripTextColor="darkBlue"
            />
            <ul>
              <li>
                <b>Rozwój Psychofizyczny:</b> Zajęcia w wodzie wspierają
                koordynację ruchową, poprawiają napięcie mięśniowe i pomagają w
                stymulacji zmysłów, co korzystnie wpływa na rozwój malucha.
              </li>
              <li>
                <b>Wspomaganie Odruchów:</b> Wczesny kontakt z wodą podtrzymuje
                naturalne odruchy niemowlęce, takie jak kopanie czy
                wstrzymywanie oddechu, co ułatwia adaptację do nowego
                środowiska.
              </li>
              <li>
                <b>Budowanie Więzi:</b> Zajęcia umożliwiają rodzicom i dzieciom
                wspólne pokonywanie wyzwań i dzielenie się radością z postępów,
                co wzmacnia więzi emocjonalne.
              </li>
              <li>
                <b>Zdrowotne Korzyści:</b> Regularne uczestnictwo w zajęciach
                wzmacnia odporność, poprawia ukrwienie i pomaga redukować
                dolegliwości, takie jak kolki czy napięcia mięśniowe.
              </li>
            </ul>
          </div>
          <div className={styles.columnBox}>
            <StickerH4
              title="PRZYGOTOWANIE "
              titleStrip="DO ZAJĘĆ"
              stripBgColor="basicOrange"
              stripTextColor="darkBlue"
            />
            <ul>
              <li>
                <b>
                  Przygotowując się do zajęć na basenie, warto zadbać o kilka
                  kluczowych aspektów, aby zapewnić komfort dziecku i sobie.
                </b>
              </li>
              <li>
                <b>Spokój i Wyspanie:</b> Dziecko powinno być wypoczęte i
                spokojne przed zajęciami, by mogło w pełni czerpać radość z
                nowych doświadczeń.
              </li>
              <li>
                <b>Dopasowanie Godziny:</b> Wybierzcie godzinę zajęć, która nie
                koliduje z drzemką malucha, co pozwoli mu być wypoczętym i
                gotowym do nauki.
              </li>
              <li>
                <b>Karmienie: </b>Zaleca się karmienie dziecka na około 30 minut
                przed zajęciami (lub karmienie piersią tuż przed), aby zapewnić
                mu odpowiednią sytość. Możliwe są też przerwy na karmienie w
                trakcie zajęć, gdy dziecko tego potrzebuje.
              </li>
            </ul>
          </div>
          <div className={styles.columnBox}>
            <StickerH4
              title="ZAWARTOŚĆ TORBY"
              titleStrip="DZIECKA"
              stripBgColor="basicOrange"
              stripTextColor="darkBlue"
            />
            <ul>
              <li>Ręcznik z kapturkiem i zapasowy ręcznik.</li>
              <li>Wodoodporne pieluszki lub majteczki neoprenowe.</li>
              <li>Zapasowe ubranko po zajęciach.</li>
              <li>Zwykłe pieluszki oraz chusteczki nawilżające.</li>
              <li>Kosmetyki do mycia i pielęgnacji (te używane w domu).</li>
              <li>Ulubiona zabawka dla malucha.</li>
              <li>Przekąska po zajęciach.</li>
            </ul>
          </div>
          <div className={styles.columnBox}>
            <StickerH4
              title="ZAWARTOŚĆ TORBY"
              titleStrip="RODZICA"
              stripBgColor="basicOrange"
              stripTextColor="darkBlue"
            />
            <ul>
              <li>Ręcznik dla siebie.</li>
              <li>Przylegający strój kąpielowy.</li>
              <li>Okulary pływackie.</li>
              <li>Klapki basenowe.</li>
              <li>Obuwie zamienne.</li>
              <li>Kosmetyki do mycia po zajęciach.</li>
            </ul>
          </div>
          <div className={styles.columnBox}>
            <StickerH4
              title="PODSTAWOWE"
              titleStrip="INFORMACJE"
              stripBgColor="basicOrange"
              stripTextColor="darkBlue"
            />
            <ul>
              <li>
                <b>Wiek dziecka:</b> Zajęcia są dedykowane dzieciom od 3.
                miesiąca życia, które stabilnie utrzymują główkę.
              </li>
              <li>
                <b>Zgoda lekarza:</b> Zalecamy przed zapisaniem dziecka na
                zajęcia, należy uzyskać zgodę pediatry, aby upewnić się, że nie
                ma przeciwwskazań do pływania.
              </li>
              <li>
                <b>Temperatura wody:</b> Woda na zajęciach jest podgrzewana do
                30-33°C, co zapewnia komfort i bezpieczeństwo dla niemowląt.
              </li>
              <li>
                <b>Nieobecności:</b> W przypadku niemożności uczestnictwa w
                zajęciach, należy zgłosić nieobecność co najmniej 12 godzin
                przed zajęciami poprzez system ActiveNow.
              </li>
            </ul>
          </div>
          <div className={styles.columnBox}>
            <StickerH4
              title="BEZPIECZEŃSTWO"
              titleStrip="I KOMFORT"
              stripBgColor="basicOrange"
              stripTextColor="darkBlue"
            />
            <ul>
              <li>
                <b>Wsparcie Instruktora:</b> Na każdych zajęciach instruktorzy
                pomagają rodzicom, pokazując, jak bezpiecznie trzymać dziecko i
                ułatwić mu adaptację do nowego środowiska.
              </li>
              <li>
                <b>Elementy Samoratownictwa:</b> Program obejmuje także naukę
                podstawowych umiejętności związanych z bezpieczeństwem w wodzie,
                takich jak świadome wstrzymywanie oddechu i pierwsze zanurzenia.
              </li>
              <li>
                <b>Bliskość i Zaufanie:</b> Dziecko w nowym środowisku
                najbardziej potrzebuje poczucia bezpieczeństwa, dlatego na
                zajęciach szczególny nacisk kładziemy na bliskość rodzica i jego
                wsparcie.
              </li>
              <li>
                <b>
                  Zajęcia pływackie dla niemowląt to nie tylko świetny sposób na
                  aktywne spędzanie czasu, ale także okazja do wsparcia
                  kluczowych umiejętności rozwojowych Twojego dziecka. Razem z
                  nami możecie odkrywać radość i korzyści płynące z przygód w
                  wodzie, już od pierwszych miesięcy życia!
                </b>
              </li>
            </ul>
          </div>
        </div>
      )}

      <Pools
        stripH3={pools.stripH3}
        backgroundText={pools.backgroundText}
        swimmingPools={pools.swimmingPools}
      />
      {groups !== undefined && (
        <Groups stripH2={groups.stripH2} groups={groups.groups} />
      )}
    </div>
  );
};

export default NaukaPlywania;
