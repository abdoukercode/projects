import { createStore } from 'redux'

const initialState = {
    count: 0,
    inputValue: "Enter input here...",
    items:[],
    totalItem:0
 
}
 
const reducer = (state = initialState , action) => {

        console.log("reducer runnning", action);
  
    
    switch(action.type){
        case 'INCREMENT' : 
            //return Object.assign({},state, {count: state.count + 1});
            return {...state, count: state.count + 1};
              

        case 'DECREMENT' : 
            //return Object.assign({},state, {count: state.count - 1});
            return {...state, count: state.count - 1};
            
        
        case 'INPUTCHANGE' : 
            //return Object.assign({},state, {count: state.count - 1});
            return {...state, inputValue: action.text };
            
        case 'CLEARALL' : 
            //return Object.assign({},state, {count: state.count - 1});
            return {...state, inputValue:'' };
            
        case 'CREATEITEM' : 
           // return Object.assign({},state, {items: state.items.concat(state.inputValue)});
           return {...state, items: [state.inputValue, ...state.items]  };
            
            
        case 'DELETEITEM' : 
           // return Object.assign({},state, {items: state.items.concat(state.inputValue)});
           return {...state, items: state.items.filter(item =>
                                           item !== action.selectedItem   ) };
            
        
        default:
            return state
    }
}


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
 
