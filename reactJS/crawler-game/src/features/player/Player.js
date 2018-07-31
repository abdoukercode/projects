import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import React from "react";
import walkSprite from './player_walk.png';
import handleMovement from './movement'

const Player = (props) => (
  <div
   style={{
      position:'absolute',
      top: props.position[1],
      left: props.position[0],
      backgroundImage: `url('${walkSprite}')`,
      backgroundPosition:'0 0',
      width:'40px',
      height:'40px'
    }} />
 
);


function mapStateToProps(state) {
  return {
    ...state.playerReducer
  }
};
 Player.propTypes={
  position: PropTypes.arrayOf(PropTypes.number).isRequired
} 

export default connect(mapStateToProps)(handleMovement(Player))

