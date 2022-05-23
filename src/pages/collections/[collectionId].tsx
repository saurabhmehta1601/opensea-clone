import { useWeb3 } from "@3rdweb/hooks";
import React, { useMemo } from "react";

const Collection = () => {
  const {provider} = useWeb3()
  useMemo(() => {
    if (!provider) {
      const sdk = new 
      console.log("provider", provider)
    }
  }, [provider])
  return <div>Collection</div>;
};

export default Collection;
