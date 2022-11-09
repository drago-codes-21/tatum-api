import { SET_WALLET } from "./account.utils";
const INITIAL_STATE = {
  walletData: null,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_WALLET:
      return {
        ...state,
        walletData: action.payload,
      };
    default:
      return state;
  }
};

export default walletReducer;
