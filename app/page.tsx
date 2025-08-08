import VideosSection from '@/components/Globals/VideosSection/VideosSection';
import styles from './page.module.scss';
import SwimmingSection from '@/components/HomePage/Swimming/SwimmingSection';
import CampsSection from '@/components/HomePage/Camps/CampsSection';
import {Metadata} from 'next';
import Image1 from '@/public/assets/videos/pool-mix-1.webp';
import Image2 from '@/public/assets/videos/winter-mix-1.webp';
import Image3 from '@/public/assets/videos/summer-mix-1.webp';
import TeamSection from '@/components/HomePage/Team/TeamSection';
import SignInSwimming2526 from '@/components/Ui/Popups/SignInSwimming2526/SignInSwimming2526';
import SignInSliderHero from '@/components/HomePage/SignInSliderHero/SignInSliderHero';
import {headers} from 'next/headers';
import FabContact from '@/components/Ui/Buttons/FabContact/FabContact';
export const metadata: Metadata = {
  title: 'NEMO Sportowa Przygoda - Nauka pływania | Obozy i Półkolonie',
  description:
    'Rozpocznij swoją sportową przygodę z NEMO! Zajmujemy się nauką pływania od niemowlaków aż po dorosłych. Organizujemy półkolonie i obozy - Kraków | Korzenna | Gorlice.',
  metadataBase: new URL('https://nemosportowaprzygoda.pl/'),
  alternates: {
    canonical: 'https://nemosportowaprzygoda.pl/',
    languages: {
      'pl-PL': '/pl-PL',
      'en-US': '/en-US',
    },
  },
  openGraph: {
    url: 'https://nemosportowaprzygoda.pl/',
    type: 'website',
  },
};
export default async function Home() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const isMobile = /Mobile|Tablet|Mobile Safari|Mobile|Windows Phone/i.test(
    userAgent
  );
  return (
    <main className={styles.main}>
      {/* <SignInPopupSwimming /> */}
      <FabContact />
      <SignInSwimming2526 />
      <VideosSection
        isMobile={isMobile}
        oneSticker={false}
        scrapColor="mediumBlue"
        col1={{
          video: {src: 'pool-mix-1.mp4', alt: 'nauka pływania', image: Image1},
          stickerH2: {
            title: 'OFERTA',
            titleStrip: 'BASENY',
            stripBgColor: 'mediumBlue',
            stripTextColor: 'white',
          },
        }}
        col2={{
          video: {
            src: 'winter-mix-1.mp4',
            alt: 'obozy i półkolonie',
            image: Image2,
          },
          stickerH2: {
            title: 'OFERTA',
            titleStrip: 'ZIMOWA',
            stripBgColor: 'basicOrange',
            stripTextColor: 'white',
          },
        }}
        col3={{
          video: {
            src: 'summer-mix-1.mp4',
            alt: 'oferty specjalne',
            image: Image3,
          },
          stickerH2: {
            title: 'OFERTA',
            titleStrip: 'LETNIA',
            stripBgColor: 'basicGreen',
            stripTextColor: 'white',
          },
        }}
      />
      <SignInSliderHero />
      <SwimmingSection />
      <TeamSection />
      <CampsSection />
    </main>
  );
}
