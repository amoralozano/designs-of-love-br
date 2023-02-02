import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "cf6xr51l",
  dataset: "production",
  apiVersion: "2022-12-31",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // this is what is going to let the user connect to sanity trough the front end.
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
