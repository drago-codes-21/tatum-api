import { API_CALLED } from "./count.util";

const INITAL_STATE = {
  count: 0,
};

const countReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case API_CALLED:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default countReducer;
