import {combineReducers} from "redux";
import {playerReducer} from "./player";

//여러개의 reducer 통합하는 allReducer
export const allReducer = combineReducers(
  { playerReducer }
  )
