import {createStore} from "redux";
import {allReducer} from "./reducers";

//chrome 확장 개발툴 볼수 있게함.
export const store = createStore(allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__());