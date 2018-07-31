import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import constants from '../../config/constants'
import './style.css'

function getTileSprite(type){
    switch (type) {
        case 0:
            return 'grass'
        case 5:
            return 'rock'
        case 6:
            return 'tree'
   
    
        default:
            return ''
    }
}

function MapTile(props){
    return (
        <div 
            className ={`tile ${getTileSprite(props.tile)}`}
            style={{
                height: constants.SPRITE_SIZE,
                width: constants.SPRITE_SIZE
            }}
        
        />
  
    )

}

function MapRow(props){
return  (
<div className="row">
            {
             props.tiles.map((tile,i) => <MapTile tile={tile} key={i}/>)
            } 
        </div>
)
}

const Map = (props) =>      
  
<div
    style={{
    position: 'relative',
    width:800,
    height: 480,
    backgroundColor: 'green',
    border: '4px solid white',
    margin: '10px auto'
 
    }} >
        { props.tiles.map((row,i) => <MapRow tiles={row} key={ i } /> )}
    </div>

 function mapStateToProps(state){
    return {
        tiles :state.mapReducer.tiles
    }
}


export default connect(mapStateToProps)(Map)
