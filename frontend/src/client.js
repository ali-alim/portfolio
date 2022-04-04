import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'qpo76l1c',
    dataset:'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);