import {MetadataRoute} from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/naszzespol', '/regulamin'],
      },
    ],
    sitemap: 'https://nemosportowaprzygoda.pl/sitemap.xml',
  };
}
