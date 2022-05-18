import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { AiFillPlayCircle } from "react-icons/ai";

export const Hero = () => {
  return (
    <Wrapper>
      <HeroSection>
        <Heading>Discover , collect , and sell extraordinary NFTs</Heading>
        <SubHeading>
          OpenSea is the world&apos;s first and largest NFT marketplace
        </SubHeading>
        <ButtonGroup>
          <SolidButton>Explore</SolidButton>
          <OutlineButton>Create</OutlineButton>
        </ButtonGroup>
        <LearnMore href="https://opensea.io/#meetopensea">
          <AiFillPlayCircle className="playIcon" />
          Learn more about OpenSea
        </LearnMore>
      </HeroSection>
      <HeroImage>
        <img
          src="https://lh3.googleusercontent.com/MeGC7qi_1QJZqAHWLi78jBT8hQTFKbs_wJlUgQ0wj32EycUTmQShoyzMfeV_ydhTSLLZYYm3JrVM4ETnpDn3FXgQ_tkrI3k7TbgrGA=s550"
          alt="nft"
        />
      </HeroImage>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${tw`flex  p-8 `}
  background-color: #f6f6f6;
  background-image: linear-gradient(180deg, #bebdbd 0%, #fbfafa 74%);
`;

const HeroSection = styled.div`
  ${tw` pt-24 flex-1 pr-24 pl-4`}
`;
const HeroImage = styled.div`
  ${tw`flex-1`}
  img {
    ${tw`rounded-lg shadow-lg bg-purple-500 `}
  }
`;

const Heading = styled.div`
  ${tw`text-5xl mb-8 font-semibold`}
`;
const SubHeading = styled.div`
  ${tw`text-3xl mb-8 font-thin text-[#3f3f3f] pr-36`}
`;

const ButtonGroup = styled.div`
  ${tw`flex `}
`;
const Button = styled.div`
  ${tw`mr-4 py-4 px-16 `}
`;
const SolidButton = styled(Button)`
  ${tw`bg-blue-500 text-white font-semibold  rounded-lg`}
`;
const OutlineButton = styled(Button)`
  ${tw`bg-white text-blue-500 font-semibold  border-4 rounded-lg`}
  border: 1px solid #006ae4;
`;

const LearnMore = styled.a`
  ${tw`text-blue-500 font-semibold text-center flex items-center mt-10`}
  .playIcon {
    ${tw`text-3xl mr-2`}
  }
`;
