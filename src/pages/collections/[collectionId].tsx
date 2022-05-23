import { useNFTCollection } from "@thirdweb-dev/react";
import { GetServerSidePropsContext } from "next";
import React, { useEffect, useState } from "react";
import { getCollections } from "../../utils/sanity";

const Collection = ({ collectionMeta: { contractAddress } }) => {
  const [collectionItems, setCollectionItems] = useState([]);
  const nftCollection = useNFTCollection(contractAddress);
  useEffect(() => {
    (async function setAllNfs() {
      const response = await nftCollection.getAll();
      const nftsInCollection = response.map((nft) => {
        const { description, image, name } = nft.metadata;
        return {
          owner: nft.owner,
          description,
          image,
          name,
        };
      });
      setCollectionItems(nftsInCollection);
    })();
  }, []);
  return <div>Collection</div>;
};

export default Collection;

// get collection metadata from sanity
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { collectionId } = context.query;

  const collectionMeta = await getCollections(collectionId as string);
  return {
    props: { collectionMeta: collectionMeta[0] },
  };
};
