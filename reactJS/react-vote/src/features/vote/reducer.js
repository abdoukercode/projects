import constants  from "./../../config/constants";

const initialState = {
  angular : null,
  vuejs: null,
  react: null
};
 const voteReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ngPlus:
      // return Object.assign({},state, {count :state.count + 1})
      return { ...state, 
        angular: state.angular + 1, 
     };
    case constants.vuejsPlus:
      // return Object.assign({},state, {count :state.count - 1})
      return { ...state, 
        vuejs: state.vuejs + 1
     };
    case constants.reactPlus:
      // return Object.assign({},state, {count :state.count - 1})
      return { ...state, 
        react: state.react + 1,
    };
    default:
      return state;
  }
};


export default voteReducer;
