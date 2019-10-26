import React from "react";

class Counter extends React.Component {
  incDecScore = (delta) => {
    this.props.changeScore(this.props.id, this.props.score + delta) //인수로 id와 현재점수
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={()=>this.incDecScore(-1)}> - </button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-action increment" onClick={()=>this.incDecScore(1)}> + </button>
      </div>
    );
  }
}

export default Counter;