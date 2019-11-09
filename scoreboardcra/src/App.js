import React from 'react';
import './App.css';
import {Header} from "./component/Header";
import {Players} from "./component/Players";
import AddPlayerForm from "./component/AddPlayerForm";
import {connect} from "react-redux";
import {playerReducer} from "./redux/reducers/player";

class App extends React.Component {

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  }
  //immutable 원본배열 건드리지 말고 변경후 새로운 배열로 리턴

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.props.players} />{/*배열넘김*/}

        {/*Players List*/}
        { this.props.players.map(item => <Players name={item.name}
                                                 score={item.score}
                                                 key={item.id.toString()}
                                                 removePlayer={this.handleRemovePlayer}
                                                 id={item.id} />)
        }
        <AddPlayerForm/>
      </div>
    );
  }
}

//부모>자식
// subscribe: 스토어의 state를 props로 매핑하기
const mapStateToProps = (state) => ({
  // 왼쪽은 props, 오른쪽은 store의 state
  players : state.playerReducer.players //state = json 안의 players key값
});
//this.state>> this.props.

/*********************************************************************************/

// Hoc: 기존 컴포넌트 인용으로 넣어서 새로운기능을 추가한 신규컴포넌트를 리턴하는 펑션,
// 커링 function :입력파라미터를 한꺼번에 넣는게 아니라 차례대로 넣는 것.
// 문법적으로는 파라메터를 차례대로 넣는 커링 펑션
// 결과적으로 만드는것은 App을 입력으로해서 새로운 HoC 컴포넌트를 만든다.
export default connect(mapStateToProps, null)(App);
//export default App;
