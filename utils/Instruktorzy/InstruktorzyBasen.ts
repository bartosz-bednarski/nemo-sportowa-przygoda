import InstructorDefaultImg from '@/public/assets/instructors/instructor.webp';
import WiktoriaFryczekImg from '@/public/assets/instructors/wiktoria-fryczek.png';
import KingaKobakaImg from '@/public/assets/instructors/kinga_kobaka.webp';
import WeronikaMikaImg from '@/public/assets/instructors/weronika_mika.webp';
import AgataHojolImg from '@/public/assets/instructors/agata_hojol.webp';
import ZofiaGutImg from '@/public/assets/instructors/zofia_gut.webp';

import {StaticImageData} from 'next/image';

export interface InstruktorBasenType {
  img: StaticImageData;
  name: string;
  about1: string;
  about2: string;
}

export const INSTRUKTORZY_BASEN: InstruktorBasenType[] = [
  {
    img: KingaKobakaImg,
    name: 'Kinga Kobaka',
    about1:
      "Studentka III roku administracji na UKEN w Krakowie. ''Pracując na stanowisku menadżera, dbam o to, aby każda informacja docierała do Was jak najszybciej. Tworząc posty i relacje, staram się wiernie odzwierciedlać naszą podwodną przygodę i inspirować do wspólnego rozwoju!''",
    about2: 'Menadżerka ds. Socjal media',
  },
  {
    img: AgataHojolImg,
    name: 'Agata Hojoł',
    about1:
      "Od 12 lat zawodowo trenowała pływanie. Specjalizuje się w stylu motylkowym i zmiennym, a jej pasją jest dzielenie się wiedzą i doświadczeniem z innymi. ''Na moich lekcjach pomogę Ci poprawić technikę, zbudować pewność siebie w wodzie i odkryć radość z pływania. Dołącz do mnie, a pokażę Ci, jak pływać szybciej, lepiej i z uśmiechem!''",
    about2: 'Instruktorka pływania',
  },
  {
    img: ZofiaGutImg,
    name: 'Zofia Gut',
    about1:
      "Studentka filologii hiszpańskiej na UKEN w Krakowie. Sport towarzyszy jej od zawsze. Już jako dziecko trenowała pływanie, a także przez 12 lat taniec nowoczesny. Obecnie instruktorka pływania z pasją do pracy z osobami na każdym poziomie zaawansowania. ''Jestem tutaj, by pomóc pokochać pływanie i osiągnąć swoje cele w wodzie.''",
    about2: 'Instruktorka pływania',
  },
  {
    img: WeronikaMikaImg,
    name: 'Weronika Mika',
    about1:
      "Studentka ANS w Nowym Sączu i ratownik wodny na basenie. Instruktorka pływania, która skupia się głównie na pracy z dziećmi stawiającymi pierwsze kroki w wodzie. ''Każde zajęcia to nie tylko nauka pływania, ale i moment, w którym mogę przekazać młodym pływakom pewność siebie i radość z odkrywania nowych umiejętności.''",
    about2: 'Instruktorka pływania',
  },
  {
    img: InstructorDefaultImg,
    name: 'Julia Fryczek',
    about1:
      'Studentka drugiego roku wychowania fizycznego na AWF w Krakowie. Od dziecka kocha sport - przez 8 lat trenowała pływanie, a po wybraniu kierunku na studiach zrobiła kurs instruktora pływania i realizuje się w tym zawodzie od 2 lat . Jest czynną zawodniczką piłki nożnej w Wiśle Kraków . Sport ma po prostu we krwi i chce zarażać swą pasją innych.',
    about2: 'Instruktorka pływania',
  },
  {
    img: InstructorDefaultImg,
    name: 'Maksymilian Kucharski',
    about1:
      'Aktywny i ambitny student, pasjonujący się sportem. Regularnie uprawia wszelakie sporty. Pływanie stało się nie tylko jego pasją ale też częścią edukacji- odbywa praktyki z tego zakresu. Chętnie dzieli się swoją wiedzą, pomagając innym przełamywać bariery i rozwijać swoje zdolności w wodzie.',
    about2: 'Instruktor pływania',
  },
  {
    img: InstructorDefaultImg,
    name: 'Rafał Jurkowski',
    about1:
      'Aktywny student, w którego życiu sport odgrywa kluczową rolę. Jego pasja do pływania łączy się z chęcią nauczania, dlatego z zaangażowaniem prowadzi zajęcia, pomagając zarówno początkującym, jak i bardziej zaawansowanym pływakom.',
    about2: 'Instruktor pływania',
  },
];
