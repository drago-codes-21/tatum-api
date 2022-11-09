import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";

const DeployAndMintNft = ({ walletData }) => {
  const [chain, setChain] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [key, setKey] = useState("");
  const [metadata, setMetadata] = useState("");
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://api-eu1.tatum.io/v3/nft/mint",
        {
          chain: chain,
          to: userAddress,
          fromPrivateKey: key,
          url: metadata,
          tokenId: tokenId,
          contractAddress: "0x77c7e7c2676975af8b822dd0d89a312da4e4ea74",
        },
        {
          headers: {
            "x-api-key": "40abb793-5930-4f48-9eab-79cdfd6f0e9e",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>NFT</h1>
      <br />
      <br />
      Chain:
      <input
        placeholder="Chain"
        value={chain}
        onChange={(e) => setChain(e.target.value)}
      />
      <br />
      Id
      <input
        placeholder="name"
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
      />
      <br />
      key:
      <input
        placeholder="key "
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      Metadata:
      <input
        placeholder="metadata "
        value={metadata}
        onChange={(e) => setMetadata(e.target.value)}
      />
      Address
      <input
        placeholder="To"
        value={userAddress}
        onChange={(e) => setUserAddress(e.target.value)}
      />
      <br />
      <button onClick={() => handleSubmit()}>Deploy</button>
    </div>
  );
};
const mapStateToProps = ({ wallet }) => ({
  walletData: wallet.walletData,
});
export default connect(mapStateToProps)(DeployAndMintNft);
