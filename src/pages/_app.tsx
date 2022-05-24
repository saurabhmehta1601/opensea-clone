import "../styles/tailwind.css";
import "../styles/globals.css";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { Header } from "../components/Header";

const desiredChainId = ChainId.Rinkeby;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <Header />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
