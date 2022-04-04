import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset:'production',
    appVersion: '2022-04-04',
    useCdn: true,
    token: process.env.SANITY_APP_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);