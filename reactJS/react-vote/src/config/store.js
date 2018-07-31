import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import voteReducer from '../features/vote/reducer'

const rootReducer = combineReducers({
    voteRec : voteReducer
});

const store = createStore( 
    rootReducer,
    composeWithDevTools()

);

export default store;
