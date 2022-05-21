import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Header } from "../components/Header";
import { NFTCard } from "../components/nftCard";
import { sanityClient } from "../sanityClient";

const ExploreCollections = ({ allNFTs }) => {
  return (
    <>
      <Header />
      <Heading>explore collections</Heading>
      {allNFTs.map((nft) => (
        <NFTCard nft={nft} />
      ))}
    </>
  );
};

export default ExploreCollections;

const Heading = styled.div`
  ${tw`text-center text-4xl font-bold uppercase p-12`}
`;

export const getServerSideProps = async () => {
  const query = `* [ _type == "marketItems"] {
  _id , title , description , contractAddress
}`;
  let allNFTs = [];
  try {
    allNFTs = await sanityClient().fetch(query)[0];
  } catch (error) {
    allNFTs = [];
  }
  return {
    props: {
      allNFTs,
    },
  };
};
