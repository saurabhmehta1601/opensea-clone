import { useNFTCollection } from "@thirdweb-dev/react";
import { GetServerSidePropsContext } from "next";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Card } from "../../components/Card";
import { getCollections } from "../../utils/sanity";

const statsData = [
  {
    label: "items",
    value: "4",
  },
  {
    label: "owners",
    value: "1",
  },
  {
    label: "floorPrice",
    value: "1.41",
    icon: "	https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg",
  },
  {
    label: "volumeTraded",
    value: "43",
    icon: "	https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg",
  },
];

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
        <div className="stats">
          {statsData.map((stat) => (
            <Card className="card">
              <div className="value">
                {stat.icon && (
                  <span>
                    <img src={stat.icon} alt="" className="icon" />
                  </span>
                )}{" "}
                {stat.value}
              </div>
              <div className="label">{stat.label}</div>
            </Card>
          ))}
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
    ${tw`mt-6 text-gray-700 mb-4`}
    span {
      ${tw`text-blue-600`}
    }
  }
  .stats {
    ${tw`flex rounded-lg mb-4 mx-auto  max-w-[50%]`}/* border: 2.5px solid #cfcdcd; */
  }
  .card {
    ${tw`flex-1 p-4 rounded-none `}
    &:nth-child(1) {
      ${tw`rounded-l-md`}
    }
    &:nth-child(4) {
      ${tw`rounded-r-md`}
    }
  }
  .value {
    ${tw`flex text-2xl font-semibold  justify-center items-stretch mb-1`}
    .icon {
      ${tw` -ml-10  relative top-1`}
      height: 24px;
      img {
        ${tw` self-center`}
      }
    }
  }
  .label {
    ${tw`text-gray-400`}
  }
`;
