import React from "react";
import styled from "styled-components";
import { Card } from "./Card";

interface IProps {
  nft: {
    contractAddress: string;
    title: string;
    description: string;
    banner: string;
  };
}

export const CollectionCard = ({ nft }: IProps) => {
  console.log("nft props ", nft);
  return (
    <Card>
        <img src={nft.banner} alt="" />
        <div>{nft.title}</div>
        <div>by {nft.title}</div>
    </Card>
  );
};

const Container = styled.div`
  .banner {
    min-height: 150px;
  }
`;
