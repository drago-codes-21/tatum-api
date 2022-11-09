import { API_CALLED } from "./count.util";

export const apiCalledCount = (count) => ({
  type: API_CALLED,
  payload: count,
});
