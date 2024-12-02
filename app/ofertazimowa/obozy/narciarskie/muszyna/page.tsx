import Hero from "@/components/OfertaZimowa/Globals/Hero/Hero";
import styles from "../../../../page.module.scss";
import { OBOZ_NARCIARSKI_MUSZYNA } from "@/utils/Winter/Obozy";
import Details from "@/components/OfertaZimowa/Globals/Details/Details";
import LogoLarge from "@/components/OfertaZimowa/Globals/LogoLarge/LogoLarge";
import Contact from "@/components/OfertaZimowa/Globals/Contact/Contact";
import MountainsTrees from "@/components/OfertaZimowa/Globals/MountainsTrees/MountainsTrees";
import WhatsWaiting4You from "@/components/OfertaZimowa/Obozy/WhatsWaiting4You/WhatsWaiting4You";
import Accommodation from "@/components/OfertaZimowa/Obozy/Accommodation/Accommodation";
import Surroundings from "@/components/OfertaZimowa/Obozy/Surroundings/Surroundings";
import HillSides from "@/components/OfertaZimowa/Obozy/HillSides/HillSides";
import Schedule from "@/components/OfertaZimowa/Globals/Schedule/Schedule";
import Food from "@/components/OfertaZimowa/Globals/Food/Food";
import PriceDetails from "@/components/OfertaZimowa/Globals/PriceDetails/PriceDetails";
import Scrap2 from "@/components/Ui/Scrap/Scrap2";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Obóz narciarski 2025 MUSZYNA ",
  description:
    "Sprawdź naszą ofertę dla zimowego obozu narciarskiego dla dzieci i młodzieży w Muszynie - 27.01-31.01.2025. Zimowe ferie małopolskie z NEMO!",
  metadataBase: new URL(
    "https://nemosportowaprzygoda.pl/ofertazimowa/obozy/narciarskie/muszyna"
  ),
  alternates: {
    canonical:
      "https://nemosportowaprzygoda.pl/ofertazimowa/obozy/narciarskie/muszyna",
    languages: {
      "pl-PL": "/pl-PL",
    },
  },
};
const ObozNarciarskiMuszyna = () => {
  return (
    <main className={styles.main} style={{ background: "white" }}>
      <Hero hero={OBOZ_NARCIARSKI_MUSZYNA.hero} />
      <Details details={OBOZ_NARCIARSKI_MUSZYNA.details} />
      <LogoLarge company="NEMO" />
      <Contact contact={OBOZ_NARCIARSKI_MUSZYNA.contactNemo} />
      <LogoLarge company="BOM4SPORTS" />
      {OBOZ_NARCIARSKI_MUSZYNA.contactCollab !== undefined && (
        <Contact contact={OBOZ_NARCIARSKI_MUSZYNA.contactCollab} />
      )}
      <MountainsTrees />
      <WhatsWaiting4You details={OBOZ_NARCIARSKI_MUSZYNA.whatsWaiting4You} />
      <Accommodation accommodation={OBOZ_NARCIARSKI_MUSZYNA.accommodation} />
      <Surroundings surroundings={OBOZ_NARCIARSKI_MUSZYNA.surroundings} />
      <MountainsTrees />
      <HillSides hillSides={OBOZ_NARCIARSKI_MUSZYNA.hillSides} />
      <Schedule schedule={OBOZ_NARCIARSKI_MUSZYNA.schedule} />
      <Food food={OBOZ_NARCIARSKI_MUSZYNA.food} />
      <PriceDetails priceDetails={OBOZ_NARCIARSKI_MUSZYNA.priceDetails} />
      <Scrap2 color="darkBlue" position="bottom" />
    </main>
  );
};
export default ObozNarciarskiMuszyna;
