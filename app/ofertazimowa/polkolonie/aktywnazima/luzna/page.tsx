import Hero from "@/components/OfertaZimowa/Globals/Hero/Hero";
import styles from "../../../../page.module.scss";
import MountainsTrees from "@/components/OfertaZimowa/Globals/MountainsTrees/MountainsTrees";
import Details from "@/components/OfertaZimowa/Globals/Details/Details";
import Localization from "@/components/OfertaZimowa/Polkolonie/Localization/Localization";
import Schedule from "@/components/OfertaZimowa/Globals/Schedule/Schedule";
import { POLKOLONIA_AKTYWNA_ZIMA_LUZNA } from "@/utils/Winter/Polkolonie";
import Food from "@/components/OfertaZimowa/Globals/Food/Food";
import PriceDetails from "@/components/OfertaZimowa/Globals/PriceDetails/PriceDetails";
import Scrap2 from "@/components/Ui/Scrap/Scrap2";
import Contact from "@/components/OfertaZimowa/Globals/Contact/Contact";
const PolkoloniaAktywnaZimaLuzna = () => {
  return (
    <main className={styles.main} style={{ background: "white" }}>
      <Hero hero={POLKOLONIA_AKTYWNA_ZIMA_LUZNA.hero} />
      <Details details={POLKOLONIA_AKTYWNA_ZIMA_LUZNA.details} />
      <Contact contact={POLKOLONIA_AKTYWNA_ZIMA_LUZNA.contact} />
      <MountainsTrees />
      <Localization localization={POLKOLONIA_AKTYWNA_ZIMA_LUZNA.localization} />
      <Schedule schedule={POLKOLONIA_AKTYWNA_ZIMA_LUZNA.schedule} />
      <MountainsTrees />
      <Food food={POLKOLONIA_AKTYWNA_ZIMA_LUZNA.food} />
      <PriceDetails priceDetails={POLKOLONIA_AKTYWNA_ZIMA_LUZNA.priceDetails} />
      <Scrap2 position="bottom" color="darkBlue" />
    </main>
  );
};

export default PolkoloniaAktywnaZimaLuzna;
