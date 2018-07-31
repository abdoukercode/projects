import { constants } from "./../../config/constants";

const initialState = {
  count: 0
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.Increase:
      // return Object.assign({},state, {count :state.count + 1})
      return { ...state, count: state.count + 1 };
    case constants.Decrease:
      // return Object.assign({},state, {count :state.count - 1})
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
