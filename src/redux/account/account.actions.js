import { SET_WALLET } from "./account.utils";

export const setNewWallet = (data) => ({
  type: SET_WALLET,
  payload: data,
});
