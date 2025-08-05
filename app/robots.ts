import {MetadataRoute} from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/regulamin','/_next','/favicon.ico'],
      },
    ],
    sitemap: 'https://nemosportowaprzygoda.pl/sitemap.xml',
  };
}
