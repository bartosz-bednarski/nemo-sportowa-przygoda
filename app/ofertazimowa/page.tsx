import VideosSection from "@/components/Globals/VideosSection";
import styles from "../page.module.scss";
import AboutCamps from "@/components/Globals/AboutCamps/AboutCamps";
const OfertaZimowaPage = () => {
  return (
    <main className={styles.main}>
      <VideosSection
        oneSticker={false}
        scrapColor="white"
        oneStickerContent={{
          title: "OFERTA",
          title2: "",
          titleStrip: "ZIMOWA",
          stripBgColor: "white",
          stripTextColor: "darkBlue",
          scale: 2,
        }}
        col1={{
          video: { src: "pool-mix-5.mov", alt: "weekendowe narty" },
          stickerH2: {
            title: "WYJAZDY",
            titleStrip: "NARCIARSKIE",
            stripBgColor: "white",
            stripTextColor: "darkBlue",
            scale: 1.15,
          },
        }}
        col2={{
          video: { src: "pool-mix-1.mov", alt: "polkolonie zimowe" },
          stickerH2: {
            title: "PÓŁKOLONIE",
            titleStrip: "ZIMOWE",
            stripBgColor: "white",
            stripTextColor: "darkBlue",
            scale: 1.15,
          },
        }}
        col3={{
          video: {
            src: "pool-mix-3.mov",
            alt: "obozy narciarskie",
          },
          stickerH2: {
            title: "OBOZY",
            titleStrip: "NARCIARSKIE",
            stripBgColor: "white",
            stripTextColor: "darkBlue",
            scale: 1.15,
          },
        }}
      />
      <AboutCamps
        stickerH2={{
          title: "PÓŁKOLONIE",
          titleStrip: "ZIMOWE",
          stripBgColor: "darkBlue",
          stripTextColor: "white",
          scale: 1.4,
          paddingBottom: 0,
          titleColor: "darkBlue",
        }}
        right={true}
        aboutLeft="Półkolonie to tygodniowy program pełen atrakcji, podczas którego dzieci mają zapewnioną opiekę od godziny 8:00 do 16:00. Każdy dzień wypełniony jest aktywnymi zajęciami, które pozwalają na rozwój zarówno fizyczny, jak i kreatywny. Uczestnicy biorą udział w grach sportowych, warsztatach plastycznych, zajęciach muzycznych, a także zabawach integracyjnych, które sprzyjają nawiązywaniu nowych przyjaźni."
        aboutRight1="Dzieci spędzają czas na świeżym powietrzu, uczestniczą w różnorodnych aktywnościach dostosowanych do ich wieku, a także odkrywają nowe zainteresowania. Podczas półkolonii organizowana jest również tematyczna wycieczka, która nawiązuje do przewodniego motywu całego turnusu. To doskonała okazja, by poprzez zabawę i aktywne zwiedzanie zgłębić ciekawe zagadnienia. Może to być np. wizyta w muzeum, parku przyrody lub wycieczka edukacyjna w terenie."
        aboutRight2="Codziennie dzieci mają również zapewnione zdrowe i pożywne posiłki, które dodają im energii do kolejnych aktywności. Półkolonie to idealna okazja do spędzenia wakacji w sposób pełen przygód, zabawy i rozwoju, pod opieką doświadczonych wychowawców."
        theme="winter"
        imgRight="winter-bg-1.png"
        imgLeft="winter-bg-2.png"
      />
    </main>
  );
};
export default OfertaZimowaPage;
