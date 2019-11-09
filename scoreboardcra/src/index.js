import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {Root} from "./pages/Root";

//redux store <Provider store={store}>로 감쌈.
ReactDOM.render(<Provider store={store}><Root /></Provider>, document.getElementById('root'));

//store 생성 후 action 받기전의 state 값은 무엇인가?
//allReducer의 상태는 {player : undefined}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
