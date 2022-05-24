import { sanityClient } from "../sanityClient";

export const getCollections = async (contractAddress?: string) => {
  let query = "";
  if (typeof contractAddress === "string") {
    query = `* [ _type == "marketItems" && contractAddress == "${contractAddress}"] {
      _id , title , description , contractAddress,
      "collectionLogo": collectionLogo.asset->url,
      "bannerImage": bannerImage.asset->url,
      volumeTraded,
      "createrName": createdBy -> userName,
      "createrAddress": createdBy -> walletAddress
    }`;
  } else {
    query = `* [ _type == "marketItems" ] {
      _id , title , description , contractAddress,
      "collectionLogo": collectionLogo.asset->url,
      "bannerImage": bannerImage.asset->url,
      volumeTraded,
      "createrName": createdBy -> userName,
      "createrAddress": createdBy -> walletAddress
    }`;
  }
  let collections = [];
  try {
    collections = await sanityClient().fetch(query);
  } catch (error) {
    collections = [];
  }
  return collections;
};
