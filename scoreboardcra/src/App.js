import React from 'react';
import './App.css';
import {Header} from "./component/Header";
import {Player} from "./component/Player";
import {AddPlayerForm} from "./component/AddPlayerForm";

let maxId = 5;
class App extends React.Component {
  state = {
    players: [
      {name: 'LDK',   score: 10,  id: 1},
      {name: 'HONG',  score: 20,  id: 2},
      {name: 'KIM',   score: 30,  id: 3},
      {name: 'PARK',  score: 40,  id: 4},
    ]
  };
  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  }
  //immutable 원본배열 건드리지 말고 변경후 새로운 배열로 리턴
  handleChangeScore(id, delta){
    //console.log("handleChangeScore", id, delta)
    this.setState(prevState => {
        //새로운배열로 copy 기존바구니에서 펼쳐서 새로운 배열 만듦.
        /*const players = [ ...prevState.players ]
        players.forEach(player => { //forEach는 리턴없이 해당 배열로 리턴.
          if(id === player.id){
            player.score += delta;
          }
        })
        return {players}; //  {players : players};하나로 생략*/

      const players = prevState.players.map(player=>{ //리턴되는 것을 새로운 배열로 만들어서 리턴.
          if(id === player.id){         //player를 각각담아서 배열로 리턴
            player.score += delta;
          }
          return player
        })
        return { players };
    })
  }

  //자식이 부모와 통신
  //1. 부모에 빈 callback 함수 생성
  //2. 받아서 배열에 추가
  handleAddPlayer(name){
    console.log('handleAddPlayer')
    console.log('name : ', name)
    //setState, 원본배열 + 새로운배열
    // this.setState(
    //   (prevSate)=>{
    //     const player = [...prevSate.players] 원본배열 + 새로운배열 기본
    //   }
    // )
    //
    this.setState(
      prevSate=>{
        const players = [...prevSate.players]
        //unshift prepend / push append
        players.push({name:name, score:0, id:maxId++})
        return {players}
      }
    )
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" players={this.state.players} />{/*배열넘김*/}

        {/*Players List*/}
        { this.state.players.map(item => <Player name={item.name}
                                                 score={item.score}
                                                 key={item.id.toString()}
                                                 removePlayer={this.handleRemovePlayer}
                                                 changeScore={this.handleChangeScore.bind(this)}
                                                 id={item.id} />)
        }
        <AddPlayerForm addPlayer={this.handleAddPlayer.bind(this)}/>
      </div>
    );
  }
}

export default App;