import {LessonType} from '@/components/NaukaPlywania/Ui/LessonsByMembersAmount/LessonsByMembersAmount';

type RodzajeLekcjiType = {
  indywidualne: LessonType;
  dwuosobowe: LessonType;
  trzyosobowe: LessonType;
  grupowe: LessonType;
};

export const RODZAJE_LEKCJI: RodzajeLekcjiType = {
  indywidualne: {
    img: 'lessons-types-bg.webp',
    stickerH4: {
      title: 'LEKCJE',
      titleStrip: 'INDYWIDUALNE',
      stripBgColor: 'white',
      stripTextColor: 'basicOrange',
    },
    aboutTextPoppins: {
      title: '',
      titleColor: 'basicOrange',
      description:
        'Lekcje indywidualne to zajęcia dostosowane w pełni do indywidualnych potrzeb ucznia. Instruktor pracuje wyłącznie z jednym uczestnikiem, co pozwala na szybkie postępy i maksymalne skupienie na rozwijaniu umiejętności. Jest to idealny wybór dla osób, które mają konkretne cele, potrzebują intensywnego wsparcia lub chcą przełamać barierę lęku przed wodą. Trener na bieżąco koryguje technikę i dostosowuje ćwiczenia do poziomu oraz tempa ucznia, dzięki czemu nauka jest efektywna i precyzyjnie ukierunkowana.',
      textAlign: 'left',
      alignItems: 'flex-start',
    },
  },
  dwuosobowe: {
    img: 'lessons-types-bg.webp',
    stickerH4: {
      title: 'LEKCJE',
      titleStrip: 'DWUOSOBOWE',
      stripBgColor: 'basicOrange',
      stripTextColor: 'mediumBlue',
    },
    aboutTextPoppins: {
      title: '',
      titleColor: 'mediumBlue',
      description:
        'Lekcje dwuosobowe pozwalają dwóm uczestnikom uczyć się razem, co sprzyja wzajemnej motywacji i wprowadza element współpracy. To świetna opcja dla par, przyjaciół czy rodzeństw, którzy chcą wspólnie doskonalić umiejętności pływackie. Instruktor dostosowuje ćwiczenia i techniki do potrzeb obu uczestników, dzięki czemu każdy z nich osiąga postępy w przyjaznej atmosferze. Taka forma jest bardziej ekonomiczna niż lekcje indywidualne, a jednocześnie zapewnia dużo uwagi instruktora.',
      textAlign: 'left',
      alignItems: 'flex-start',
    },
  },
  trzyosobowe: {
    img: 'lessons-types-bg.webp',
    stickerH4: {
      title: 'LEKCJE',
      titleStrip: 'TRZYOSOBOWE',
      stripBgColor: 'mediumBlue',
      stripTextColor: 'white',
    },
    aboutTextPoppins: {
      title: '',
      titleColor: 'mediumBlue',
      description:
        'Nasze zajęcia na basenie dla trzyosobowych grup to doskonała okazja do nauki i doskonalenia pływania w kameralnej atmosferze. Dzięki małej liczbie uczestników, każdy otrzymuje indywidualne wsparcie instruktora, który dopasowuje program do poziomu grupy. To idealne rozwiązanie dla osób, które chcą uczyć się w przyjaznym, bezpiecznym środowisku i w pełni korzystać z czasu spędzonego na basenie.',
      textAlign: 'left',
      alignItems: 'flex-start',
    },
  },
  grupowe: {
    img: 'lessons-types-bg.webp',
    stickerH4: {
      title: 'LEKCJE',
      titleStrip: 'GRUPOWE',
      stripBgColor: 'mediumBlue',
      stripTextColor: 'basicOrange',
    },
    aboutTextPoppins: {
      title: '',
      titleColor: 'basicOrange',
      description:
        'Lekcje grupowe to zajęcia w kilkuosobowej grupie o zbliżonym poziomie umiejętności. Tego typu zajęcia sprzyjają integracji oraz rozwijają umiejętność współpracy i rywalizacji w przyjaznej atmosferze. Instruktor prowadzi różnorodne ćwiczenia, angażując całą grupę i dostosowując tempo do jej poziomu. Zajęcia grupowe są idealne dla osób, które lubią uczyć się w towarzystwie innych i cenią sobie dynamikę grupy. Jest to również najbardziej przystępna cenowo opcja, oferująca przy tym bogaty program ćwiczeń i technik pływackich.',
      textAlign: 'left',
      alignItems: 'flex-start',
    },
  },
};
