import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Card } from "./Card";

interface IProps {
  nft: {
    contractAddress: string;
    title: string;
    description: string;
    bannerImage: string;
    ownerImage: string;
    createrName: string;
  };
}

export const CollectionCard = ({ nft }: IProps) => {
  const router = useRouter();
  console.log("nft props ", nft);
  const navigateToCollection = () => {
    router.push(`collections/${nft.contractAddress}`);
  };
  return (
    <Wrapper onClick={navigateToCollection}>
      <Card>
        <BannerContainer bgImg={nft.bannerImage} ownerImg={nft.ownerImage}>
          <div className="ownerImg" />
        </BannerContainer>
        <NftDetails>
          <div className="title">{nft.title}</div>
          <div className="owner">
            by <span>{nft.createrName}</span>
          </div>
          <div className="description">{nft.description}</div>
        </NftDetails>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${tw`rounded-lg overflow-hidden text-center hover:shadow-xl`}
`;
const BannerContainer = styled.div<{ bgImg: string; ownerImg: string }>`
  ${tw`relative `}
  --banner-height: 30vh;
  --owner-logo-size: 9vh;

  height: var(--banner-height);
  background: url(${(props) => props.bgImg});
  background-size: cover;
  margin-bottom: calc(var(--owner-logo-size) - 2.5vh);
  .ownerImg {
    ${tw`absolute shadow-lg`}
    height: var(--owner-logo-size);
    width: var(--owner-logo-size);
    top: calc(100% - var(--owner-logo-size) / 2);
    left: calc(50% - var(--owner-logo-size) / 2);
    background: url(${(props) => props.ownerImg});
    background-size: 118%;
    background-position: center;
    border: 2.5px solid white;
    border-radius: 90%;
    z-index: 11;
  }
`;

const NftDetails = styled.div`
  ${tw`pb-6`}
  .title {
    ${tw`font-semibold`}
  }
  .owner {
    ${tw`text-gray-500`}
    span {
      ${tw`text-blue-600`}
    }
  }
  .description {
    ${tw`px-10 py-8 text-gray-400`}
  }
`;
