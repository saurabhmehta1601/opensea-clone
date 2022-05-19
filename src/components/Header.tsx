import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { LoginPopup } from "./LoginPopup";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogoContainer>
        <Link href="/">
          <Image width={45} height={45} src="/opensea.png" />
        </Link>
        <StyledLogoText>OpenSea</StyledLogoText>
      </StyledLogoContainer>
      <StyledSearchBar>
        <AiOutlineSearch className="searchIcon" />
        <input placeholder="Search items , collections and accounts " />
      </StyledSearchBar>
      <NavTextLinks>
        <div>Explore</div>
        <div>Stats</div>
        <div>Resources</div>
        <div>Create</div>
      </NavTextLinks>
      <NavIconLinks>
        <LoginPopup
          trigger={
            <button>
              <CgProfile />
            </button>
          }
        />
        <MdOutlineAccountBalanceWallet />
      </NavIconLinks>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  ${tw` flex bg-gray-50 p-3 content-center text-[rgba(53, 56, 64, 0.7)]`}
`;

const StyledLogoContainer = styled.div`
  ${tw`flex  items-center col-gap-4 p-2 cursor-pointer mr-6`}
`;

const StyledLogoText = styled.div`
  ${tw` text-2xl self-stretch font-bold  grid items-center text-black `}
`;

const StyledSearchBar = styled.div`
  ${tw`bg-white h-[fit-content] self-center flex items-center p-1 pr-3 flex-1 rounded-xl bg-white flex hover:shadow-xl border-4 border-gray-600 py-2 `}
  border: 2px solid rgba(53, 56, 64, 0.1);

  .searchIcon {
    ${tw`text-gray-700 text-xl  font-bold mr-3 ml-2`}
  }
  input {
    ${tw` bg-transparent border-none outline-none text-black text-lg flex-1 `}
  }
`;

const NavLinks = styled.div`
  ${tw`flex font-light`}
  font-weight: 300;
  * {
    ${tw`flex self-center cursor-pointer`}
  }
`;
const NavTextLinks = styled(NavLinks)`
  ${tw`ml-8 col-gap-12 mr-6 text-lg font-semibold`}
`;

const NavIconLinks = styled(NavLinks)`
  ${tw`ml-2 col-gap-6 mr-6`}
  * {
    ${tw`text-4xl ml-3 col-gap-2 text-[rgba(53, 56, 64, 0.7)]`}
  }

  button {
    background: none;
    border: none;
  }
`;
