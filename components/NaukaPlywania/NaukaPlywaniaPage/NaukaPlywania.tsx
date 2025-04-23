'use client';
import React from 'react';
import styles from './naukaPlywania.module.scss';
import Pools from './Pools/Pools';
import {poolsType} from '@/types/NaukaPlywania/naukaPlywania';
import {COLORS} from '@/utils/UI/colors';
import Groups, {GroupsPropsType} from '../Ui/Groups/Groups';
import {customColors} from '@/types/UI/colors';
import NaukaPlywaniaAbout, {
  NaukaPływaniaAboutPropsType,
} from '../Ui/NaukaPlywaniaAbout/NaukaPlywaniaAbout';

export interface NaukaPlywaniaPropsType {
  about: NaukaPływaniaAboutPropsType;
  pools: poolsType;
  groups?: GroupsPropsType;
  backgroundColor: customColors;
}

const INFO_CARDS_DATA = [
  {
    header: 'KORZYŚCI Z ZAJĘĆ W WODZIE',
    listItems: [
      {
        header: 'Rozwój Psychofizyczny:',
        text: 'Zajęcia w wodzie wspierają koordynację ruchową, poprawiają napięcie mięśniowe i pomagają w stymulacji zmysłów, co korzystnie wpływa na rozwój malucha.',
      },
      {
        header: 'Wspomaganie Odruchów:',
        text: 'Wczesny kontakt z wodą podtrzymuje naturalne odruchy niemowlęce, takie jak kopanie czy wstrzymywanie oddechu, co ułatwia adaptację do nowego środowiska.',
      },
      {
        header: 'Budowanie Więzi:',
        text: 'Zajęcia umożliwiają rodzicom i dzieciom wspólne pokonywanie wyzwań i dzielenie się radością z postępów, co wzmacnia więzi emocjonalne.',
      },
      {
        header: 'Zdrowotne Korzyści:',
        text: 'Regularne uczestnictwo w zajęciach wzmacnia odporność, poprawia ukrwienie i pomaga redukować dolegliwości, takie jak kolki czy napięcia mięśniowe.',
      },
    ],
  },
  {
    header: 'PRZYGOTOWANIE DO ZAJĘĆ',
    listItems: [
      {
        header: 'Spokój i Wyspanie:',
        text: 'Dziecko powinno być wypoczęte i spokojne przed zajęciami, by mogło w pełni czerpać radość z nowych doświadczeń.',
      },
      {
        header: 'Dopasowanie Godziny:',
        text: 'Wybierzcie godzinę zajęć, która nie koliduje z drzemką malucha, co pozwoli mu być wypoczętym i gotowym do nauki.',
      },
      {
        header: 'Karmienie:',
        text: 'Zaleca się karmienie dziecka na około 30 minut przed zajęciami (lub karmienie piersią tuż przed), aby zapewnić mu odpowiednią sytość. Możliwe są też przerwy na karmienie w trakcie zajęć, gdy dziecko tego potrzebuje.',
      },
    ],
  },
  {
    header: 'ZAWARTOŚĆ TORBY DZIECKA',
    listItems: [
      {header: '', text: 'Ręcznik z kapturkiem i zapasowy ręcznik.'},
      {header: '', text: 'Wodoodporne pieluszki lub majteczki neoprenowe.'},
      {header: '', text: 'Zapasowe ubranko po zajęciach.'},
      {header: '', text: 'Zwykłe pieluszki oraz chusteczki nawilżające.'},
      {
        header: '',
        text: 'Kosmetyki do mycia i pielęgnacji (te używane w domu).',
      },
      {header: '', text: 'Ulubiona zabawka dla malucha.'},
      {header: '', text: 'Przekąska po zajęciach.'},
    ],
  },
  {
    header: 'ZAWARTOŚĆ TORBY RODZICA',
    listItems: [
      {header: '', text: 'Ręcznik dla siebie.'},
      {header: '', text: 'Przylegający strój kąpielowy.'},
      {header: '', text: 'Okulary pływackie.'},
      {header: '', text: 'Klapki basenowe.'},
      {header: '', text: 'Obuwie zamienne.'},
      {header: '', text: 'Kosmetyki do mycia po zajęciach.'},
    ],
  },
  {
    header: 'PODSTAWOWE INFORMACJE',
    listItems: [
      {
        header: 'Wiek dziecka:',
        text: 'Zajęcia są dedykowane dzieciom od 3. miesiąca życia, które stabilnie utrzymują główkę.',
      },
      {
        header: 'Zgoda lekarza:',
        text: 'Zalecamy przed zapisaniem dziecka na zajęcia, należy uzyskać zgodę pediatry, aby upewnić się, że nie ma przeciwwskazań do pływania.',
      },
      {
        header: 'Temperatura wody:',
        text: 'Woda na zajęciach jest podgrzewana do 30-33°C, co zapewnia komfort i bezpieczeństwo dla niemowląt.',
      },
      {
        header: 'Nieobecności:',
        text: 'W przypadku niemożności uczestnictwa w zajęciach, należy zgłosić nieobecność co najmniej 12 godzin przed zajęciami poprzez system ActiveNow.',
      },
    ],
  },
  {
    header: 'BEZPIECZEŃSTWO I KOMFORT',
    listItems: [
      {
        header: 'Wsparcie Instruktora:',
        text: 'Na każdych zajęciach instruktorzy pomagają rodzicom, pokazując, jak bezpiecznie trzymać dziecko i ułatwić mu adaptację do nowego środowiska.',
      },
      {
        header: 'Elementy Samoratownictwa:',
        text: 'Program obejmuje także naukę podstawowych umiejętności związanych z bezpieczeństwem w wodzie, takich jak świadome wstrzymywanie oddechu i pierwsze zanurzenia.',
      },
      {
        header: 'Bliskość i Zaufanie:',
        text: 'Dziecko w nowym środowisku najbardziej potrzebuje poczucia bezpieczeństwa, dlatego na zajęciach szczególny nacisk kładziemy na bliskość rodzica i jego wsparcie.',
      },
      {
        header: '',
        text: 'Zajęcia pływackie dla niemowląt to nie tylko świetny sposób na aktywne spędzanie czasu, ale także okazja do wsparcia kluczowych umiejętności rozwojowych Twojego dziecka. Razem z nami możecie odkrywać radość i korzyści płynące z przygód w wodzie, już od pierwszych miesięcy życia!',
      },
    ],
  },
];

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
          {INFO_CARDS_DATA.map((cardItem, index) => (
            <div key={index} className={styles.cardBox}>
              <h4>{cardItem.header}</h4>
              <ul>
                {cardItem.listItems.map((listItem, index) => (
                  <li key={index}>
                    {listItem.header !== '' && (
                      <p className={styles.header}>{listItem.header}</p>
                    )}
                    <p
                      className={styles.text}
                      style={{
                        textAlign: listItem.header === '' ? 'center' : 'left',
                      }}
                    >
                      {listItem.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
