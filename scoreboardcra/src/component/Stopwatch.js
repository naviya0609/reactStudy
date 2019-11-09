import React from 'react';
import styles from '../pages/scoreboard/Scoreboard.module.css';

export class Stopwatch extends React.Component {//componentDidMount react가 가짐
  tickRef;
  state = {
    isRunning : false,
    timer : 0
  }

  handleStopwatch (){
   this.setState(prevState=> ({isRunning: !prevState.isRunning}))
  }

  handleReset(){
    this.setState({timer:0})
  }

  //setInterval callback function
  tick = () => {
    // if(this.state.isRunning){
    //   this.setState((prevState) =>{
    //     return {timer : +prevState.timer }
    //   })
    // }
    if(this.state.isRunning){
      this.setState(prevState => ({timer : prevState.timer +1 }))
    }
  }


  //DOM이 렌더링된 직후에 호출출
  //jquery, scrollbar ... third party, DOM, 네트워크와 관련된 메소드 초기화
  componentDidMount() {
    this.tickRef = setInterval(this.tick,1000)
  }

  //DOM이 파괴되기 직전에 호출
  componentWillUnmount() {
    clearInterval(this.tickRef)
  }

  render() {
    return (
      <div className={styles.stopwatch}>
        <h2>Stop Watch</h2>
        <span className={styles['stopwatch-time']}>{this.state.timer}</span>
        <button onClick={this.handleStopwatch.bind(this)}>{this.state.isRunning === true ? 'STOP' : 'START'}</button>
        <button onClick={this.handleReset.bind(this)}>RESET</button>
      </div>
    );
  }
}