import React from "react";
import { connect } from "react-redux";
import { constants } from '../../config/constants'
function Counter(props) {
    console.log(props);
    
  return (
    <div>
            <h1>I am the counter</h1>
            <p>Count : {props.count}</p>
            <button type="submit" onClick={props.increaseCount}>Increase</button>
            <button type="submit" onClick={props.decreaseCount}>Decrease</button>
    </div>
  );
}

function mapStateToProps(state) {
    console.log('mapStateToProps', state.list);
    
  return {
    count: state.counter.count
  };
}

function mapDispatchToProps(dispatch){
    return {
        increaseCount: () => {
            console.log('increasing yea !!!');
            const action = {type: constants.Increase,  };
            dispatch(action);
        },

        decreaseCount: () => {
            console.log('Decreasing you !!!');
            const action = {type: constants.Decrease,  };
            dispatch(action);
            
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(Counter);
