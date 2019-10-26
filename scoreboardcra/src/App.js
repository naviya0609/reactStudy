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
  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={this.state.players.length} />

        {/*Players List*/}
        { this.state.players.map(item => <Player name={item.name} score={item.score}
                                                 key={item.id.toString()} removePlayer={this.handleRemovePlayer}
                                                 id={item.id} />)
        }
      </div>
    );
  }
}

export default App;