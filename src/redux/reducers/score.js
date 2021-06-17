import { UPDATE_SCORE } from '../actions';

const INITIAL_STATE = {
  score: 0,
  assertions: 0,
};

function updateLocalStorage(score, assertions) {
  const playerInfo = window.localStorage.getItem('state');
  const playerInfoParse = JSON.parse(playerInfo);

  playerInfoParse.assertions += assertions;
  playerInfoParse.player.score += score;

  window.localStorage.setItem('state', JSON.stringify(playerInfoParse));
}

function scoreReducer(state = INITIAL_STATE, actions) {
  switch (actions.type) {
  case UPDATE_SCORE: {
    updateLocalStorage(actions.score, actions.assertions);
    return { ...state,
      score: state.score + actions.score,
      assertions: state.assertions + actions.assertions };
  }
  default: return state;
  }
}

export default scoreReducer;