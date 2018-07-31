import { constants } from "./../../config/constants";

const initialState = {
  inputValue: " "
};

export const inputMirrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.OnInputChange:
      return { ...state, inputValue: action.text };

    default:
      return state;
  }
};
