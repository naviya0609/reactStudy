import React from 'react';

export class Stopwatch extends React.Component {//componentDidMount react가 가짐
  tickRef;
  state = {

  }
  //setInterval callback function
  tick(){

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
      <div className='stopwatch'>
        <h2>Stop Watch</h2>
        <span className='stopwatch-time'>0</span>
        <button>START</button>
        <button>RESET</button>
      </div>
    );
  }
}