import {MetadataRoute} from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/regulamin'],
      },
    ],
    sitemap: 'https://nemosportowaprzygoda.pl/sitemap.xml',
  };
}
