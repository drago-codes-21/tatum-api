import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";

// const keu = "caedf08462f0076e36b8cba58ed224d85b794aeb62a4cf22dd6feaa463e069dd";
const DeployAndMintNft = ({ walletData }) => {
  const [chain, setChain] = useState("");
  const [symbol, setSymbol] = useState("");
  const [name, setName] = useState("");
  const [key, setKey] = useState("");
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://api-eu1.tatum.io/v3/nft/deploy",
        {
          chain: chain,
          fromPrivateKey: key,
          name: name,
          symbol: symbol,
          fee: {
            gasLimit: "4000000",
            gasPrice: "10",
          },
        },
        {
          headers: {
            "x-api-key": "40abb793-5930-4f48-9eab-79cdfd6f0e9e",
          },
        }
      );
      const data = response.data;
      console.log(data.txId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      NFT <br />
      <br />
      Chain:
      <input
        placeholder="Chain"
        value={chain}
        onChange={(e) => setChain(e.target.value)}
      />
      <br />
      Name:
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      key:
      <input
        placeholder="key "
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      Symbol:
      <input
        placeholder="symb"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
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
