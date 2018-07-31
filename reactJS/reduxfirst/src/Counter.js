import React from 'react'
import {connect} from 'react-redux'   
import {debounce} from 'lodash'

/* 👆 connect redux_react*/
 function Counter(props){
     console.log('render', props);
        return (

            <div className="card">
                <h3 className="card-header">Redux Train</h3>
                <div className="card-block pt-4">
                    <h4 className="card-title"> {props.count}</h4>
                <div className="card-text pb-4 ">
                    <button onClick={props.onIncrementClick} className="btn btn-success mr-2">👆</button>
                    <button onClick={props.onDecrementClick} className=" btn btn-danger">👇</button>
                </div>
                </div>
            </div>

        )
    }
    
/* 👉 map each state to props*/

function mapStateToProps(state){
    debounce(function() {
        console.log('mapStateToProps', state);
    }, 3000);
    //console.log('mapStateToProps', state);
    return {
        count: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementClick: () => {
            console.log("clicked increment");
            const action = {type : 'INCREMENT'};
            dispatch(action)
        },

        onDecrementClick: () => {
            console.log("clicked decrement");
            const action = {type : 'DECREMENT'};
            dispatch(action)
        }
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Counter);
