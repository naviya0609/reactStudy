//action creartor
//동적으로 작동> action creartor , action을 만드는 function
// action creator: 액션을 동적으로 생성하는 펑션

import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER} from "./reducers/actionTypes";

export const addPlayer = (name) => {
  return {
    type : ADD_PLAYER,
    name
  }
}

export const changeScore = (id, delta) => {
  return {
    type : CHANGE_SCORE,
    id,
    delta
  }
}

export const removePlayer = (id) => {
  return {
    type : REMOVE_PLAYER,
    id
  }
}