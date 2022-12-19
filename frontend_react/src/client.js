//this file is to connect our react app with the sanity io backend
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    //always keep in mind that in the projectId d should always be small it has caused a lot of problem to me
    dataset: 'production',
    apiVersion:'2022-02-01',
    useCdn:true,
    token:process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
