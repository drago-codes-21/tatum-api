import axios from "axios";
import { useState } from "react";
import { connect } from "react-redux";
import { setNewWallet } from "../../redux/account/account.actions";
import { apiCalledCount } from "../../redux/count/count.actions";
const Wallet = ({ setNewWallet, apiCalledCount }) => {
  const [count, setCount] = useState(0);
  const handleClick = async () => {
    try {
      const response = await axios.get(
        "https://api-eu1.tatum.io/v3/bitcoin/wallet",
        {
          headers: {
            "Content-type": "application/json",
            "x-api-key": "aeac5e00-bda3-4c38-a3e6-9a02cdd8d4e2",
          },
        }
      );
      // console.log(response);
      setCount(count + 1);
      setNewWallet(response);
      apiCalledCount(count);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      Wallet
      <button onClick={() => handleClick()}>Generate Wallet</button>
    </div>
  );
};

const mapStateToProps = ({ wallet, count }) => ({
  walletData: wallet.walletData,
  counter: count.counter,
});
const mapDispatchToProps = (dispatch) => ({
  setNewWallet: (account) => dispatch(setNewWallet(account)),
  apiCalledCount: (count) => dispatch(apiCalledCount(count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
