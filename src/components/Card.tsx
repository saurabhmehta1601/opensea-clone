import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

export const Card = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  ${tw`flex  flex-col  cursor-pointer rounded-md overflow-hidden`}
  border: 1.5px solid rgba(53, 56, 64, 0.1);
  &:hover {
    box-shadow: 0px 0px 4px rgba(53, 56, 64, 0.2);
  }
`;
