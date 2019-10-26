import React from "react";

class Counter extends React.Component {
  incrementScore = () => {
    console.log(this);
    this.props.changeScore()
  }

  decrementScore = () => {
    this.props.changeScore()
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

export default Counter;