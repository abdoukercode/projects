import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import  playerReducer   from '../features/player/reducer'
import  mapReducer   from '../features/map/reducer'

const rootReducer = combineReducers({
    playerReducer,
    mapReducer
});

const store = createStore( 
    rootReducer,
    composeWithDevTools()

);

export default store;
