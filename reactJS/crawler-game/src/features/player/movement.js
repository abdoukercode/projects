import store from '../../config/store'
import constants from '../../config/constants'

export default function handleMovement(player) {

  function getNewPosition(oldPos, direction) {

    switch(direction) {
      case 'WEST':
        return [ oldPos[0]-constants.SPRITE_SIZE, oldPos[1] ]
      case 'EAST':
        return [ oldPos[0]+constants.SPRITE_SIZE, oldPos[1] ]
      case 'NORTH':
        return [ oldPos[0], oldPos[1]-constants.SPRITE_SIZE ]
      case 'SOUTH':
        return [ oldPos[0], oldPos[1]+constants.SPRITE_SIZE ]

        default:
        return ''
    }
  }

  function observeBoundaries(oldPos, newPos) {
    return (newPos[0] >= 0 && newPos[0] <= constants.MAP_WIDTH - constants.SPRITE_SIZE) &&
           (newPos[1] >= 0 && newPos[1] <= constants.MAP_HEIGHT - constants.SPRITE_SIZE)
  }

  function observeImpassable(oldPos, newPos) {
    const{tiles} = store.getState().mapReducer
    const y = newPos[1] / constants.SPRITE_SIZE
    const x = newPos[0] / constants.SPRITE_SIZE
    const nextTile = tiles[y][x]
    return nextTile < 5
  }

  function dispatchMove(newPos) {
    store.dispatch({
      type: 'MOVE_PLAYER',
      payload: {
        position: newPos
      }
    })
  }

  function attemptMove(direction) {
    const oldPos = store.getState().playerReducer.position
    const newPos = getNewPosition(oldPos, direction)

    if(observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos))
      dispatchMove(newPos)
  }

  function handleKeyDown(e) {
    e.preventDefault()

    switch(e.keyCode) {
      case 37:
        return attemptMove('WEST')

      case 38:
        return attemptMove('NORTH')

      case 39:
        return attemptMove('EAST')

      case 40:
        return attemptMove('SOUTH')

      default:
        return ''
    }
  }

  window.addEventListener('keydown', (e) => {
    handleKeyDown(e)
  })

  return player
}
