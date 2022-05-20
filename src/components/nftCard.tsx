import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

export const NFTCard = ({ nft }) => {
  return (
    <Container>
      <div className="banner">
        <img src={nft.banner} alt="" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  ${tw`flex flex-col`}
  border: 1.5px solid rgba(53, 56, 64, 0.1);
  &:hover {
    box-shadow: 0px 0px 4px rgba(53, 56, 64, 0.2);
  }

  .banner {
    min-height: 150px;
  }
`;
