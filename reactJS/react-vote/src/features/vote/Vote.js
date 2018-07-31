import Tilt from "react-tilt";
import avote from "./../../images/avote.png";
import angular from "./../../images/angular.png";
import vuejs from "./../../images/vuejs.png";
import react from "./../../images/react.png";
import ProgressBars from "./../progressBars/ProgressBars";
import constants from '../../config/constants';
import React from 'react';
import { connect } from "react-redux";

const Vote = props => {
  return (
    <div className="card rounded">
      <div className="card-header text-center">
        <img src={avote} height="50" width="190" alt="" />
      </div>
      <div className="card-body">
        <div className="vote-desc text-center">
          <h1>Please chose your favorite Technos in 2018</h1>
          <h4>just click on the logos below to vote 😆 👍 !</h4>
        </div>
        <div className="logos grid-container text-center">
          <Tilt
            className="Tilt text-center"
            options={{
              reverse: true, // reverse the tilt direction
              max: 35, // max tilt rotation (degrees)
              perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
              scale: 1.5, // 2 = 200%, 1.5 = 150%, etc..
              speed: 600, // Speed of the enter/exit transition
              transition: true, // Set a transition on enter/exit.
              axis: null, // What axis should be disabled. Can be X or Y.
              reset: true, // If the tilt effect has to be reset on exit.
              easing: "cubic-bezier(.06,.98,.52,.99)" // Easing on enter/exit.
            }}
            style={{ height: 250, width: '100%' }}
          >
            <div className="grid-item text-center Tilt-inner">
              <img src={angular} alt="angular" onClick={props.ngClick} />
            </div>
          </Tilt>
          <Tilt
            className="Tilt text-center"
            options={{
              reverse: true, // reverse the tilt direction
              max: 35, // max tilt rotation (degrees)
              perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
              scale: 1.5, // 2 = 200%, 1.5 = 150%, etc..
              speed: 600, // Speed of the enter/exit transition
              transition: true, // Set a transition on enter/exit.
              axis: null, // What axis should be disabled. Can be X or Y.
              reset: true, // If the tilt effect has to be reset on exit.
              easing: "cubic-bezier(.06,.98,.52,.99)" // Easing on enter/exit.
            }}
            style={{ height: 250, width: '100%' }}
          >
            <div className="grid-item text-center  Tilt-inner">
              <img src={vuejs} alt="vuejs"  onClick={props.vueClick} />
            </div>
          </Tilt>
          <Tilt
            className="Tilt text-center"
            options={{
              reverse: true, // reverse the tilt direction
              max: 35, // max tilt rotation (degrees)
              perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
              scale: 1.5, // 2 = 200%, 1.5 = 150%, etc..
              speed: 600, // Speed of the enter/exit transition
              transition: true, // Set a transition on enter/exit.
              axis: null, // What axis should be disabled. Can be X or Y.
              reset: true, // If the tilt effect has to be reset on exit.
              easing: "cubic-bezier(.06,.98,.52,.99)" // Easing on enter/exit.
            }}
            style={{ height: 250, width: '100%' }}
          >
            <div className="grid-item text-center  Tilt-inner ">
              <img src={react} alt="react"  onClick={props.reactClick} />
            </div>
          </Tilt>
        </div>
      </div>
      <ProgressBars />
    </div>
  );
};


function mapStateToProps(state) {
  // console.log('mapStateToProps', state);
  
return {
  angular: state.voteRec.angular,
  react: state.voteRec.react,
  vuejs: state.voteRec.vuejs
};
}

function mapDispatchToProps( dispatch ){
  return {
      ngClick: () => {
          // console.log('ng Clicked yea !!!');
           const action = {type: constants.ngPlus};
          dispatch(action) ;
      },

      vueClick: () => {
          // console.log('vueClicked you !!!');
           const action = {type: constants.vuejsPlus};
          dispatch(action); 
          
      },

      reactClick: () => {
         // console.log('react Cliked you !!!');
           const action = {type: constants.reactPlus  };
          dispatch(action); 
          
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps )(Vote);

