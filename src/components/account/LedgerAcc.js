import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";

const LedgerAcc = ({ walletData }) => {
  const [currency, setCurrency] = useState("");
  const [country, setCountry] = useState("");
  const [exId, setExId] = useState("");
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://api-eu1.tatum.io/v3/ledger/account",
        {
          currency: currency,
          xpub: walletData.data.xpub,
          accountingCurrency: "INR",
          // accountCode: "HERE_WE_GO",
          customer: {
            externalId: exId,
            providerCountry: "IN",
            costumerCountry: country,
            accountingCurrency: "INR",
          },
        },
        {
          headers: {
            "x-api-key": "aeac5e00-bda3-4c38-a3e6-9a02cdd8d4e2",
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
      Ledger Account <br />
      <br />
      Currency:
      <input
        placeholder="Currency.."
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      />
      {/* <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="MATIC">MATIC</option>
        <option value="AVAX">AVAX</option>
        <option value="CELO">CELO</option>
      </select> */}
      <br />
      External Id:
      <input
        placeholder="external Id"
        value={exId}
        onChange={(e) => setExId(e.target.value)}
      />
      <br />
      Costumer Country:
      <input
        placeholder="Country ISO-3166-1 code "
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <br />
      <button onClick={() => handleSubmit()}>Create</button>
    </div>
  );
};
const mapStateToProps = ({ wallet }) => ({
  walletData: wallet.walletData,
});
export default connect(mapStateToProps)(LedgerAcc);
