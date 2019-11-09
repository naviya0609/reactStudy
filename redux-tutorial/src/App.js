import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {updateUser} from "./redux/actions";

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <p>{props.products.length}</p>
      <p>{props.user}</p>
      <button onClick={() => props.updateUser('Jane')}>액션 디스패치</button>
    </div>
  );
}

//부모>자식
// subscribe: 스토어의 state를 props로 매핑하기
const mapStateToProps = (state) => ({
  // 왼쪽은 props, 오른쪽은 store의 state
  products: state.products,
  user: state.user
});

//자식>부모
//redux 라이브러리 함수
const mapActionToProps = (dispatch) => ({
  //왼쪽이 props, 오른쪽이 액션을 dispatch 하는 함수
  updateUser : (name) => dispatch(updateUser(name))
})

// Hoc: 기존 컴포넌트 인용으로 넣어서 새로운기능을 추가한 신규컴포넌트를 리턴하는 펑션,
// 커링 function :입력파라미터를 한꺼번에 넣는게 아니라 차례대로 넣는 것.
// 문법적으로는 파라메터를 차례대로 넣는 커링 펑션
// 결과적으로 만드는것은 App을 입력으로해서 새로운 HoC 컴포넌트를 만든다.
export default connect(mapStateToProps, mapActionToProps)(App);
//export default App;
