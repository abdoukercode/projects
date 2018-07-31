import { SET_GAMES } from "../pages/actions";
const nameInitialState = {
    games:[]
};

const games = (state = nameInitialState, action = {}) => {
  switch (action.type) {
    case SET_GAMES:
      return {...state,games: action.games};

    default:
      return state;
  }
};

export default games;
