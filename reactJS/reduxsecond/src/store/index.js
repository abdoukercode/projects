import { createStore } from "redux";
import constants from '../store/constants';
const initialState = {
  searchInputValue: "what are u looking for ??...😋😛😝",
  repos: []
};



const reducer = (state = initialState, action) => {
  
  console.log("reducer runnning", action);

    switch(action.type){
        case constants.SEARCH_INPUT_CHANGE : 
            //return Object.assign({},state, {count: state.count - 1});
            return {...state, searchInputValue: action.text };
            
        case constants.CLEAR_ALL : 
            //return Object.assign({},state, {count: state.count - 1});
            return {...state, searchInputValue: '' };
        case constants.SEARCH_SUBMIT : 
            return Object.assign({},state, {repos:  action.repos});
            //return {...state, repos: [action.repos]};
            
        default:
            
    } 

  return state;
};

const store = createStore(
  reducer
);

export default store;
