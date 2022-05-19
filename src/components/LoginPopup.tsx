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
        <WalletConnections>
          <Button onClick={connectWithMetamask}>Metamask</Button>
          <Button onClick={connectWithWalletConnect}>Walletconnect</Button>
          <Button onClick={connectWithCoinbaseWallet}>Coinbase</Button>
        </WalletConnections>
      )}
    </StyledPopup>
  );
};

const StyledPopup = styled(Popup)``;
const Button = styled.div`
  ${tw`   py-1 rounded-md cursor-pointer flex items-center bg-gray-800 text-white justify-center col-gap-8`}
  border: 1px solid #383838;
`;
const ConnectedWallet = styled.div`
  ${tw`text-center `}
  .address {
    ${tw`font-semibold text-gray-600`}
  }
`;

const WalletConnections = styled.div`
  ${tw`px-24 py-8 flex flex-col row-gap-4`}
`;
