import axios from "axios";
import { connect } from "react-redux";

const Address = ({ walletData }) => {
  const handleClick = async () => {
    try {
      const response = await axios.get(
        `https://api-eu1.tatum.io/v3/bitcoin/address/${walletData.data.xpub}/0`,
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
      Get Address
      <button onClick={() => handleClick()}>Get Address</button>
    </div>
  );
};
const mapStateToProps = ({ wallet }) => ({
  walletData: wallet.walletData,
});
export default connect(mapStateToProps)(Address);
