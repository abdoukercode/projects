import React from 'react'
import { connect } from  'react-redux'
import {constants} from './../../config/constants'
const InputMirror = (props) => {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <input value={props.inputValue} onChange={props.inputChange} />  
            </form>
         
            <p>{props.inputValue}</p>
        </div>
    );
}

function mapStateToProps(state){
    return {
        inputValue: state.inputChange.inputValue
    }
    
}

function mapDispatchToProps(dispatch){
    return {
        inputChange: (e) => {
            e.preventDefault();
            const text = e.target.value
            console.log(text);
            

            const action = {type: constants.OnInputChange, text:text};
            dispatch(action);
        },
        onSubmit: (e) => {
            e.preventDefault();
            const text = e.target.value
            console.log(text);
            

            const action = {type: constants.OnInputChange, text:text};
            dispatch(action);
        }
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(InputMirror)
