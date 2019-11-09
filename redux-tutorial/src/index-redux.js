import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from "redux";

//state 값 초기화안되면 undefined>> defualt = [] 빈배열
const productReducer = (state = [], action) => {
  return state;
}

const userReducer = (state = '', action) => {
  if(action.type ==='updateUser') return action.payload
  return state;
}

//결합                                  //함수선언문
const allReducer = combineReducers(
  {products :productReducer, user: userReducer })

const store = createStore(allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store, store.getState())

const action = {
  type: 'updateUser', //action type은 String.
  payload : 'Tom'
}

store.dispatch(action)


//state의 결과 {products: Array(0), user: ""}
//allReducer가 리턴한 결과









//reducer (mutent 변형자) pure function. 네트워크없이, 순수한.
//action과 state를 받아 상태 변형.
//reducer에서 거의 모든 코딩
/*
const reducer = (state, action) => {
  if (action.type === 'changeState') {
    return action.payload;
  }
  return '<State>';
}

//객체
const action = {
  type : 'changeState',
  payload:'new state'
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store, store.getState())
//파라미터 (window.__REDUX_DEVTOOLS_EXTENSION__ && window._ )
//redux devTools chrome 웹스토어 개발자도구에서 redux 탭.
//1구독
store.subscribe(()=> console.log('subscribe : ',store.getState())) //3현재 상태 로그


//2발행 옵션 설정값을 이용
store.dispatch(action)*/

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
