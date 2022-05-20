const client = require("@sanity/client");

export const sanityClient = client({
  projectId: "2qvcitr3",
  dataset: "production",
  apiVersion: "2022-05-20", // use current UTC date - see "specifying API version"!
  token: "", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});
