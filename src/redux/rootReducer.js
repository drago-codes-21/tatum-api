import { combineReducers } from "redux";
import walletReducer from "./account/account.reducer";
import countReducer from "./count/count.reducer";
export default combineReducers({
  wallet: walletReducer,
  count: countReducer,
});
