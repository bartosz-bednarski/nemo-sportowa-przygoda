import VideosSection from "@/components/Globals/VideosSection";
import styles from "../page.module.scss";
import AboutCamps from "@/components/Globals/AboutCamps/AboutCamps";
import ScrapWinter from "@/components/Ui/Scrap/ScrapWinter";
import SignInCamps from "@/components/Globals/SignInCamps/SignInCamps";
import CollabWinter from "@/components/Winter/CollabWinter";
import GalleryLink from "@/components/Globals/GalleryLink/GalleryLink";
import Scrap2 from "@/components/Ui/Scrap/Scrap2";
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
            scale: 1.5,
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
        right={false}
        aboutLeft="Udowadniamy, że zima to doskonały czas na aktywność! Dzieci
poznają różnorodne sporty zimowe, takie jak łyżwiarstwo, narty czy zabawy na
śniegu, a także uczą się, jak kreatywnie i zdrowo spędzać czas w chłodniejsze dni. Codziennie dzieci mają również zapewnione zdrowe i pożywne posiłki, które dodają im energii do kolejnych aktywności. Półkolonie to idealna okazja do spędzenia wakacji w sposób pełen przygód, zabawy i rozwoju, pod opieką doświadczonych wychowawców. Nasze półkolonie to nie tylko sport, ale również mnóstwo zabawy i przygód w
zimowej scenerii!
"
        theme="winter"
        imgRight="winter-bg-1.webp"
      />

      <SignInCamps
        theme="winter"
        waiting={true}
        waitingTitle="STARTUJEMY JUŻ WKRÓTCE"
      />
      <ScrapWinter bgColor="white" />
      <AboutCamps
        stickerH2={{
          title: "OBOZY",
          titleStrip: "ZIMOWE",
          stripBgColor: "darkBlue",
          stripTextColor: "white",
          scale: 1.8,
          paddingBottom: 0,
          titleColor: "darkBlue",
        }}
        right={false}
        aboutLeft="Zapraszamy na zimowe obozy

pełne adrenaliny! Uczestnicy będą mieli okazję nauczyć się lub doskonalić
umiejętności jazdy na nartach i snowboardzie pod okiem doświadczonych
instruktorów. Zajęcia odbywają się na świetnie przygotowanych stokach, zapewniając
niezapomniane wrażenia i mnóstwo frajdy. Oprócz sportu, nie zabraknie gier
integracyjnych i zabaw na śniegu, a także wieczornych spotkań przy ognisku. Idealny
sposób na aktywne ferie!"
        theme="winter"
        imgRight="winter-bg-2.webp"
      />

      <SignInCamps
        theme="winter"
        waiting={true}
        waitingTitle="STARTUJEMY JUŻ WKRÓTCE"
      />
      <CollabWinter />
      <AboutCamps
        stickerH2={{
          title: "WEEKENDOWE",
          titleStrip: "NARTY",
          stripBgColor: "darkBlue",
          stripTextColor: "white",
          scale: 1.4,
          paddingBottom: 0,
          titleColor: "darkBlue",
        }}
        right={false}
        aboutLeft="Udowadniamy, że zima to doskonały czas na aktywność! Dzieci
poznają różnorodne sporty zimowe, takie jak łyżwiarstwo, narty czy zabawy na
śniegu, a także uczą się, jak kreatywnie i zdrowo spędzać czas w chłodniejsze dni. Codziennie dzieci mają również zapewnione zdrowe i pożywne posiłki, które dodają im energii do kolejnych aktywności. Półkolonie to idealna okazja do spędzenia wakacji w sposób pełen przygód, zabawy i rozwoju, pod opieką doświadczonych wychowawców. Nasze półkolonie to nie tylko sport, ale również mnóstwo zabawy i przygód w
zimowej scenerii!
"
        theme="winter"
        imgRight="winter-bg-3.webp"
      />
      <GalleryLink
        href="/galeria"
        img="/gallery/galleryLinks/winter.webp"
        textColor="darkBlue"
        bgColor="white"
      />
      <Scrap2 position="bottom" color="darkBlue" />
    </main>
  );
};
export default OfertaZimowaPage;
