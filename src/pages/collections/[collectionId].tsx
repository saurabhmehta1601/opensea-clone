import { useNFTCollection } from "@thirdweb-dev/react";
import { GetServerSidePropsContext } from "next";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { getCollections } from "../../utils/sanity";

const Collection = ({
  collectionMeta: {
    contractAddress,
    bannerImage,
    collectionLogo,
    title,
    createrName,
  },
}) => {
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
  return (
    <>
      <BannerContainer
        bannerImage={bannerImage}
        collectionLogo={collectionLogo}
      >
        <div className="collectionLogo"></div>
      </BannerContainer>
      <CollectionDetails>
        <div className="title">{title}</div>
        <div className="owner">
          Created by <span>{createrName}</span>
        </div>
      </CollectionDetails>
    </>
  );
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

const BannerContainer = styled.div<{
  bannerImage: string;
  collectionLogo: string;
}>`
  --bannerHeight: 38vh;
  --logoSize: 23vh;
  ${tw`relative `}
  background: url(${(props) => props.bannerImage});
  height: var(--bannerHeight);
  background-position: center;
  margin-bottom: calc(var(--logoSize) - 6vh);

  .collectionLogo {
    ${tw`absolute shadow-lg rounded-full `}
    height: var(--logoSize);
    width: var(--logoSize);
    top: calc(100% - var(--logoSize) / 2);
    left: calc(50% - var(--logoSize) / 2);
    right: 0;
    background: url(${(props) => props.collectionLogo});
    background-position: center;
    background-size: 120%;
    border: 2.5px solid gray;
  }
`;

const CollectionDetails = styled.div`
  ${tw`text-center`}
  .title {
    ${tw`text-5xl font-semibold`}
  }
  .owner {
    ${tw`mt-6 text-gray-700 mb-2`}
    span {
      ${tw`text-blue-600`}
    }
  }
`;
