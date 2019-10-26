import React from 'react';
import './App.css';
import {Header} from "./component/Header";
import {Player} from "./component/Player";

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
  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={this.state.players.length} />

        {/*Players List*/}
        { this.state.players.map(item => <Player name={item.name}
                                                 score={item.score}
                                                 key={item.id.toString()}
                                                 removePlayer={this.handleRemovePlayer}
                                                 changeScore={this.handleChangeScore.bind(this)}
                                                 id={item.id} />)
        }
      </div>
    );
  }
}

export default App;