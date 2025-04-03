import type {Metadata} from 'next';
import '../styles/globals.scss';
import styles from './layout.module.scss';
import Footer from '@/components/Globals/Footer/Footer';
import {GoogleAnalytics} from '@next/third-parties/google';
import Navigation from '@/components/Globals/Navigation/Navigation';
export const metadata: Metadata = {
  title: {
    default: 'NEMO Sportowa Przygoda',
    template: '%s - NEMO Sportowa Przygoda',
  },
  description:
    'Nauka plywania | Obozy i Półkolonie - Zima/Lato | Kraków | Gorlice | Korzenna ',
  metadataBase: new URL('https://nemosportowaprzygoda.pl'),
  authors: [{name: 'Wiktoria Fryczek'}],
  publisher: 'Bartosz Bednarski',
  alternates: {
    canonical: '/',
    languages: {
      'pl-PL': '/pl-PL',
      'en-US': '/en-US',
    },
  },
  robots: {index: true, follow: true},
  openGraph: {
    images: '/og-image.png',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className={styles.main}>
          <Navigation />
          {children}
          <Footer />
        </main>
        <GoogleAnalytics gaId="G-BDJF7917NT" />
      </body>
    </html>
  );
}
