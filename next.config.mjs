// /** @type {import('next').NextConfig} */
//STATIC EXPORT
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/ofertazimowa/obozy/narciarskie/muszyna',
        destination: '/ofertazimowa',
        permanent: true,
      },
      {
        source: '/ofertazimowa/polkolonie/aktywnazima/bobowa',
        destination: '/ofertazimowa',
        permanent: true,
      },
      {
        source: '/ofertazimowa/polkolonie/aktywnazima/korzenna',
        destination: '/ofertazimowa',
        permanent: true,
      },
      {
        source: '/ofertazimowa/polkolonie/aktywnazima/luzna',
        destination: '/ofertazimowa',
        permanent: true,
      },
      {
        source: '/ofertazimowa/polkolonie/bialeszalenstwo/bobowa',
        destination: '/ofertazimowa',
        permanent: true,
      },
      {
        source: '/ofertazimowa/polkolonie/bialeszalenstwo/korzenna',
        destination: '/ofertazimowa',
        permanent: true,
      },
      {
        source: '/ofertazimowa/weekend-na-stoku/termin-1',
        destination: '/ofertazimowa',
        permanent: true,
      },
      {
        source: '/ofertazimowa/weekend-na-stoku/termin-2',
        destination: '/ofertazimowa',
        permanent: true,
      },
      {
        source: '/ofertazimowa/weekend-na-stoku/termin-3',
        destination: '/ofertazimowa',
        permanent: true,
      },
      {
        source: '/ofertazimowa/weekend-na-stoku/termin-4',
        destination: '/ofertazimowa',
        permanent: true,
      },
      {
        source: '/naukaplywania/chelmiec',
        destination: '/naukaplywania',
        permanent: true,
      },
      {
        source: '/naukaplywania/krakow/ccz-nowa-huta',
        destination: '/naukaplywania',
        permanent: true,
      },
       {
        source: '/naukaplywania/krakow/ccz-prokocim',
        destination: '/naukaplywania',
        permanent: true,
      },
       {
        source: '/naukaplywania/krakow/eisenberga',
        destination: '/naukaplywania',
        permanent: true,
      },
       {
        source: '/naukaplywania/krakow/fabryczna',
        destination: '/naukaplywania',
        permanent: true,
      },
       {
        source: '/naukaplywania/krakow/strakowa',
        destination: '/naukaplywania',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
