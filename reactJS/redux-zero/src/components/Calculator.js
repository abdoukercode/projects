import React from "react";
import { connect } from "react-redux";
import mapDispatchToProps from '../actions/index'


const Calculator = props => {
    console.log(props);
    const {Increment,Decrement,doubleValue,value} = props;
  return (
    <div className="calculator">
      <h3>Here's the Calculator</h3>
      <p>{value}</p>
      <button onClick={Increment}>+1</button>
      <button onClick={Decrement}>-1</button>
      <button onClick={doubleValue}>{String.fromCharCode(215)}2</button>
    </div>
  );
};

const mapStateToProps =  state => {return {value: state.value}}

export default  connect(mapStateToProps,mapDispatchToProps)(Calculator);
