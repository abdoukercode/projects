import * as types from "../constants/ActionTypes";

const InitialState ={
    value: 1
}

const reducer = (state = InitialState, action) => {
  switch (action.type) {
  case types.ADD_ONE:
  return {...state, value: state.value + 1};
  case types.SUBTRACT_ONE:
  return {...state, value: state.value - 1};
  case types.DOUBLE_VALUE:
  return {...state, value: state.value * 2};
  default:
    return state;
  }
}

export default reducer;
