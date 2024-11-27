import Hero from "@/components/OfertaZimowa/Globals/Hero/Hero";
import styles from "../../../../page.module.scss";
import MountainsTrees from "@/components/OfertaZimowa/Globals/MountainsTrees/MountainsTrees";
import Localization from "@/components/OfertaZimowa/Polkolonie/Localization/Localization";
import { POLKOLONIA_AKTYWNA_ZIMA_BOBOWA } from "@/utils/Winter/Polkolonie";
import Scrap2 from "@/components/Ui/Scrap/Scrap2";
import Contact from "@/components/OfertaZimowa/Globals/Contact/Contact";
import Schedule from "@/components/OfertaZimowa/Globals/Schedule/Schedule";
import Food from "@/components/OfertaZimowa/Globals/Food/Food";
import PriceDetails from "@/components/OfertaZimowa/Globals/PriceDetails/PriceDetails";
import Details from "@/components/OfertaZimowa/Globals/Details/Details";
const PolkoloniaAktywnaZimaBobowa = () => {
  return (
    <main className={styles.main} style={{ background: "white" }}>
      <Hero hero={POLKOLONIA_AKTYWNA_ZIMA_BOBOWA.hero} />
      <Details details={POLKOLONIA_AKTYWNA_ZIMA_BOBOWA.details} />
      <Contact contact={POLKOLONIA_AKTYWNA_ZIMA_BOBOWA.contact} />
      <MountainsTrees />
      <Localization
        localization={POLKOLONIA_AKTYWNA_ZIMA_BOBOWA.localization}
      />
      <Schedule schedule={POLKOLONIA_AKTYWNA_ZIMA_BOBOWA.schedule} />
      <MountainsTrees />
      <Food food={POLKOLONIA_AKTYWNA_ZIMA_BOBOWA.food} />
      <PriceDetails
        priceDetails={POLKOLONIA_AKTYWNA_ZIMA_BOBOWA.priceDetails}
      />
      <Scrap2 position="bottom" color="darkBlue" />
    </main>
  );
};

export default PolkoloniaAktywnaZimaBobowa;
