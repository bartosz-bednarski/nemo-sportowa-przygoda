import AboutCamps from "@/components/Globals/AboutCamps/AboutCamps";
import styles from "../page.module.scss";
import VideosSection from "@/components/Globals/VideosSection";
import SignInCamps from "@/components/Globals/SignInCamps/SignInCamps";
import { POLKOLONIE_LATO_COVERS } from "@/utils/Summer/Polkolonie";
import Scrap2 from "@/components/Ui/Scrap/Scrap2";
import CollabSummer from "@/components/Summer/CollabSummer";
import GalleryLink from "@/components/Globals/GalleryLink/GalleryLink";
const OfertaLetniaPage = () => {
  return (
    <main className={styles.main}>
      <VideosSection
        oneSticker={true}
        scrapColor="basicGreen"
        oneStickerContent={{
          title: "OFERTA",
          title2: "",
          titleStrip: "LETNIA",
          stripBgColor: "basicGreen",
          stripTextColor: "white",
          scale: 2,
        }}
        col1={{
          video: { src: "pool-mix-1.mov", alt: "nauka pływania niemowlaki" },
          stickerH2: {
            title: "MAŁE",
            titleStrip: "BOMBELKI",
            stripBgColor: "lightBlue",
            stripTextColor: "white",
            scale: 1.15,
          },
        }}
        col2={{
          video: {
            src: "pool-mix-3.mov",
            alt: "nauka pływania dzieci i mlodzież",
          },
          stickerH2: {
            title: "ŚREDNIE",
            titleStrip: "BOMBELKI",
            stripBgColor: "mediumBlue",
            stripTextColor: "white",
            scale: 1.15,
          },
        }}
        col3={{
          video: { src: "pool-mix-5.mov", alt: "nauka pływania dorośli" },
          stickerH2: {
            title: "DUŻE",
            titleStrip: "BOMBELKI",
            stripBgColor: "darkBlue",
            stripTextColor: "white",
            scale: 1.15,
          },
        }}
      />
      <AboutCamps
        stickerH2={{
          title: "PÓŁKOLONIE",
          titleStrip: "LETNIE",
          stripBgColor: "white",
          stripTextColor: "basicGreen",
          scale: 1.4,
          paddingBottom: 0,
        }}
        right={true}
        aboutLeft="Półkolonie to tygodniowy program pełen atrakcji, podczas którego dzieci mają zapewnioną opiekę od godziny 8:00 do 16:00. Każdy dzień wypełniony jest aktywnymi zajęciami, które pozwalają na rozwój zarówno fizyczny, jak i kreatywny. Uczestnicy biorą udział w grach sportowych, warsztatach plastycznych, zajęciach muzycznych, a także zabawach integracyjnych, które sprzyjają nawiązywaniu nowych przyjaźni."
        aboutRight1="Dzieci spędzają czas na świeżym powietrzu, uczestniczą w różnorodnych aktywnościach dostosowanych do ich wieku, a także odkrywają nowe zainteresowania. Podczas półkolonii organizowana jest również tematyczna wycieczka, która nawiązuje do przewodniego motywu całego turnusu. To doskonała okazja, by poprzez zabawę i aktywne zwiedzanie zgłębić ciekawe zagadnienia. Może to być np. wizyta w muzeum, parku przyrody lub wycieczka edukacyjna w terenie."
        aboutRight2="Codziennie dzieci mają również zapewnione zdrowe i pożywne posiłki, które dodają im energii do kolejnych aktywności. Półkolonie to idealna okazja do spędzenia wakacji w sposób pełen przygód, zabawy i rozwoju, pod opieką doświadczonych wychowawców."
        theme="summer"
        imgRight="summer-bg-1.png"
        imgLeft="summer-bg-2.png"
      />
      <SignInCamps
        theme="summer"
        waiting={false}
        activeCampsCoversList={POLKOLONIE_LATO_COVERS}
      />
      <AboutCamps
        stickerH2={{
          title: "OBOZY",
          titleStrip: "LETNIE",
          stripBgColor: "white",
          stripTextColor: "basicGreen",
          scale: 1.4,
          paddingBottom: 0,
        }}
        right={false}
        aboutLeft="Nasze obozy organizowane są we współpracy z zaprzyjaźnioną firmą Bom4Sport, która specjalizuje się w aktywnym wypoczynku dla dzieci i młodzieży. Oferujemy zarówno letnie obozy rowerowe, jak i zimowe obozy narciarskie oraz snowboardowe. Każdy program jest starannie przygotowany, aby uczestnicy nie tylko rozwijali swoje umiejętności sportowe, ale także spędzili czas w przyjaznej atmosferze, pełnej przygód i dobrej zabawy. Pod okiem doświadczonych instruktorów dzieci mają szansę na bezpieczną naukę oraz doskonalenie swoich umiejętności na rowerze, nartach lub snowboardzie."
        theme="summer"
        imgRight="summer-bg-3.png"
      />
      <CollabSummer />
      <SignInCamps
        theme="summer"
        waiting={true}
        waitingTitle="STARTUJEMY JUŻ WIOSNĄ"
      />
      <GalleryLink
        href="/galeria"
        img="/assets/summer/gallery.png"
        color="basicGreen"
      />
      <Scrap2 position="bottom" color="darkBlue" />
    </main>
  );
};
export default OfertaLetniaPage;
