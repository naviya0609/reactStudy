import {ADD_PLAYER, CHANGE_SCORE} from "./actionTypes";

let maxId = 4;
const initialState = {
  players: [
    {name: 'LDK',   score: 10,  id: 1},
    {name: 'HONG',  score: 20,  id: 2},
    {name: 'KIM',   score: 30,  id: 3},
    {name: 'PARK',  score: 40,  id: 4},
  ]
};

//reducer는 pure function이다. 네트워크와 무관한.
//기존 state, dispatch된 action
// state = [] default
export const playerReducer = (state = initialState, action) =>{
  //로직수행
  let players;
  switch (action.type) {
    case ADD_PLAYER :
      players = [...state.players] //array 복사
      players.push({name:action.name, score:0, id:++maxId})
      return {...state, players}//state 복사 > , 중복될 시 대체됨. 1명 추가된 players 대체됨
      break;

    case CHANGE_SCORE :
      players = state.players.map(player => {
        if(player.id === action.id){
          player.score += action.delta;
        }
        return player;
      })
      return {...state, players}
      break;

  }//변형된 state 리턴
  return state;
}