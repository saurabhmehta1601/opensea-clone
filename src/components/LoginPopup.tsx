import "reactjs-popup/dist/index.css";
import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import tw from "twin.macro";
import {
  useAddress,
  useCoinbaseWallet,
  useMetamask,
  useWalletConnect,
} from "@thirdweb-dev/react";
import Image from "next/image";

interface IProps {
  trigger: JSX.Element;
}

export const LoginPopup = (props: IProps) => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const connectWithCoinbaseWallet = useCoinbaseWallet();

  return (
    <StyledPopup modal={true} trigger={props.trigger} position="bottom center">
      {address ? (
        <ConnectedWallet>
          <p>Connected</p> <p className="address">{address}</p>
        </ConnectedWallet>
      ) : (
        <>
          <WalletConnections>
            <div>Choose your wallet </div>
            <WalletConnectButton onClick={connectWithMetamask}>
              Metamask
            </WalletConnectButton>
            <WalletConnectButton onClick={connectWithWalletConnect}>
              Walletconnect
            </WalletConnectButton>
            <WalletConnectButton onClick={connectWithCoinbaseWallet}>
              Coinbase
            </WalletConnectButton>
          </WalletConnections>
        </>
      )}
    </StyledPopup>
  );
};

const StyledPopup = styled(Popup)``;
const WalletConnectButton = styled.div`
  ${tw`py-2 rounded-md cursor-pointer flex items-center bg-gray-800 text-white justify-center col-gap-8`}
  border: 2px solid rgba(53, 56, 64, 0.1);
  &:hover {
    ${tw`bg-white text-gray-800 `}
    border: 2px solid rgba(53, 56, 64, 0.1);
  }
`;
const ConnectedWallet = styled.div`
  ${tw`text-center `}
  .address {
    ${tw`font-semibold text-gray-600`}
  }
`;

const WalletConnections = styled.p`
  ${tw`px-24 py-8 flex flex-col  text-center`}
  div {
    ${tw`mb-6 font-bold text-xl`}
    &:hover {
    }
  }
`;
