import React from 'react'
import Map from './../map/map';
import Player from './../player/Player';

import {tiles} from '../../data/maps/1'
import store from '../../config/store'

store.dispatch({
    type: 'ADD_TILES', payload:{
        tiles
    }
})
const Board = () =>
   <div className="board"
    style={{
        position: 'relative',
        width: '800px',
        height: '400px',
        margin: '20px auto'
    }}
   
   >
       <Map />
       <Player />
   </div>


export default Board ;
