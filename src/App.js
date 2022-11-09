import { connect } from "react-redux";
import LedgerAcc from "./components/account/LedgerAcc";
import DeployAndMintNft from "./components/marketplace/DeployAndMintNft";
import Mint from "./components/marketplace/Mint";
import Address from "./components/wallet/Address";
import PrivateKey from "./components/wallet/PrivateKey";
import Wallet from "./components/wallet/Wallet";

const App = ({ walletData }) => {
  return (
    <div className="App">
      <h1>My app</h1>
      <Wallet />
      <PrivateKey />
      <Address />
      <br />
      <br />
      <br />
      <div className="account">
        <LedgerAcc />
      </div>
      <br />
      <br />
      <br />
      <div className="account">
        <DeployAndMintNft />
      </div>
      <Mint />
    </div>
  );
};
const mapStateToProps = ({ wallet }) => ({
  walletData: wallet.walletData,
});
export default connect(mapStateToProps)(App);
