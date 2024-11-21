import Hero from "@/components/OfertaZimowa/Globals/Hero/Hero";
import styles from "../../../../page.module.scss";
import MountainsTrees from "@/components/OfertaZimowa/Globals/MountainsTrees/MountainsTrees";
import Details from "@/components/OfertaZimowa/Polkolonie/Details/Details";
import Localization from "@/components/OfertaZimowa/Polkolonie/Localization/Localization";
import Schedule from "@/components/OfertaZimowa/Polkolonie/Schedule/Schedule";
import { POLKOLONIA_BIALE_SZALENSTWO_BOBOWA } from "@/utils/Winter/Polkolonie";
import Food from "@/components/OfertaZimowa/Polkolonie/Food/Food";
import PriceDetails from "@/components/OfertaZimowa/Polkolonie/PriceDetails/PriceDetails";
import Scrap2 from "@/components/Ui/Scrap/Scrap2";
import Contact from "@/components/OfertaZimowa/Globals/Contact/Contact";
const PolkoloniaBialeSzalenstwoBobowa = () => {
  return (
    <main className={styles.main} style={{ background: "white" }}>
      <Hero hero={POLKOLONIA_BIALE_SZALENSTWO_BOBOWA.hero} />
      <Details details={POLKOLONIA_BIALE_SZALENSTWO_BOBOWA.details} />
      <Contact />
      <MountainsTrees />
      <Localization
        localization={POLKOLONIA_BIALE_SZALENSTWO_BOBOWA.localization}
      />
      <Schedule schedule={POLKOLONIA_BIALE_SZALENSTWO_BOBOWA.schedule} />
      <MountainsTrees />
      <Food food={POLKOLONIA_BIALE_SZALENSTWO_BOBOWA.food} />
      <PriceDetails
        priceDetails={POLKOLONIA_BIALE_SZALENSTWO_BOBOWA.priceDetails}
      />
      <Scrap2 position="bottom" color="darkBlue" />
    </main>
  );
};

export default PolkoloniaBialeSzalenstwoBobowa;
