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
    ];
  },
};

export default nextConfig;
