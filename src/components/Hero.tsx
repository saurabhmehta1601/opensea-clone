import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";
import { AiFillPlayCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { Card } from "./Card";

export const Hero = () => {
  return (
    <Wrapper>
      <HeroSection>
        <Heading>Discover , collect , and sell extraordinary NFTs</Heading>
        <SubHeading>
          OpenSea is the world&apos;s first and largest NFT marketplace
        </SubHeading>
        <ButtonGroup>
          <SolidButton
            target="_blank"
            href="https://opensea.io/explore-collections"
          >
            Explore
          </SolidButton>
          <OutlineButton target="_blank" href="https://opensea.io/asset/create">
            Create
          </OutlineButton>
        </ButtonGroup>
        <LearnMore href="https://opensea.io/#meetopensea">
          <AiFillPlayCircle className="playIcon" />
          Learn more about OpenSea
        </LearnMore>
      </HeroSection>
      <Link href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/43764478945937012780943891887422793422743083224985803407021289801920412647437">
        <Card>
          <img
            src="https://lh3.googleusercontent.com/MeGC7qi_1QJZqAHWLi78jBT8hQTFKbs_wJlUgQ0wj32EycUTmQShoyzMfeV_ydhTSLLZYYm3JrVM4ETnpDn3FXgQ_tkrI3k7TbgrGA=s550"
            alt="nft"
          />
          <ImageInfo>
            <div className="author">
              <div className="authorLogo">
                <img
                  src="https://lh3.googleusercontent.com/owcAS4d2xgaDVNVSa05e0yZWRQM6_t3x_RgxvUypiRK4B8Zyukwk7ComKX-gdZZenl1ArK0XszTQZLr2CabbJHWl-FKWlYSjU9Qs=s80"
                  alt=""
                />
              </div>
              <div className="authorInfo">
                <div className="displayName">THREE MUSKETEERS</div>
                <div className="userName">the_mentalyst</div>
              </div>
            </div>
            <div className="info">
              <AiOutlineInfoCircle className="infoLogo" />
            </div>
          </ImageInfo>
        </Card>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${tw`flex  p-8 `}
  background-color: #f6f6f6;
  background-image: linear-gradient(180deg, #bebdbd 0%, #fbfafa 74%);
`;

const HeroSection = styled.div`
  ${tw` pt-20 flex-1 pr-24 pl-4`}
`;

const Heading = styled.div`
  ${tw`text-5xl mb-8 font-semibold leading-tight`}
`;
const SubHeading = styled.div`
  ${tw`text-2xl mb-12 font-normal text-[#3f3f3f] pr-40 leading-snug`}
`;

const ButtonGroup = styled.div`
  ${tw`flex`}
`;
const Button = styled.a`
  ${tw`mr-4 py-4 px-16 cursor-pointer`}
`;
const SolidButton = styled(Button)`
  ${tw`bg-blue-500 text-white font-semibold  rounded-lg`}
`;
const OutlineButton = styled(Button)`
  ${tw`bg-white text-blue-500 font-semibold  border-4 rounded-lg`}
  border: 1px solid #006ae4;
`;

const LearnMore = styled.a`
  ${tw`text-blue-500 font-semibold text-center flex items-center text-lg mt-10`}
  .playIcon {
    ${tw`text-3xl mr-2`}
  }
`;

const ImageInfo = styled.div`
  ${tw`flex px-4 py-2`}
  .author {
    ${tw`flex flex-1 `}
    .authorLogo {
      ${tw`flex items-center`}
      img {
        ${tw`rounded-full h-10 w-10 mr-4  `}
      }
    }
    .authorInfo {
      ${tw`font-semibold `}
      .displayName {
      }
      .userName {
        ${tw` text-blue-500 `}
      }
    }
  }
  .info {
    ${tw`flex items-center `}
    .infoLogo {
      ${tw`text-2xl text-gray-500 font-semibold`}
    }
  }
`;
