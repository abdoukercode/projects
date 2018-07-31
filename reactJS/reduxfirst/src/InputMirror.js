import React from 'react'
import {connect} from 'react-redux'   
const InputMirror = (props) => {
        return (
            <div className="mt-4">
                <form >
                    <input name="itemName" value={props.inputValue} onChange={props.inputChange} onMouseEnter={props.clearAll}/>
                    <p>{props.inputValue}</p>
                    <button type="submit" className="btn btn-info mb-2" onClick={props.CreateItem}>Create</button>
                </form>
            </div>
        )
}




function mapStateToProps(state){


        console.log('mapStateToProps', state);
  
    
    return {
        inputValue: state.inputValue,
        items: state.items,
    
    }
}

function mapDispatchToProps(dispatch) {
    return {
        inputChange: (event) => {
            console.log("input changed");
            const action = {type : 'INPUTCHANGE', text:event.target.value};
            dispatch(action)
        },

        clearAll: (e) => {
                e.preventDefault();
            console.log("clearAll changed");
            const action = {type : 'CLEARALL'};
            dispatch(action)
        },
        CreateItem: (e) => {
            e.preventDefault();
            console.log("created item");
            const action = {type : 'CREATEITEM'};
            dispatch(action)
        }
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(InputMirror);


