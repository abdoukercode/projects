import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { counterReducer } from '../features/counter/reducer'
import { inputMirrorReducer } from '../features/inputMirror/reducer'
const rootReducer = combineReducers({
     counter: counterReducer,
     inputChange: inputMirrorReducer
})

const store = createStore( 
    rootReducer,
    composeWithDevTools()

)

export default store
