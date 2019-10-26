// ctrl + B open declation
// ctrl + alt + l 정렬
const Header = //Header 대문자 필수 react element 리턴
  ({title , totalPlayers}) => {
    //console.log(props)
    //const {title , totalPlayers} = props //destruct assignment 해체 할당 변수명처럼 props >> json 파라미터 받음
    return (
      <header className="header">
        <h1 className="h1">{title}</h1>
        <span className="stats">Players : {totalPlayers}</span>
      </header>
    )
  }

//function component >> class component
class Count extends React.Component {// 1.반드시 상속 extends React.Component 상속 state 관련메소드
  //상수  literal 지정
  minus = "-"
  plus = "+"
  state = {
    score: 0
  } /*constructor>this.state = (score)=>{}동일함*/

  /*  constructor(){
      super(); //super insert
      //state 속성 json 객체로 초기화
      this.state = (score)=> {
        score : score
      }
    }*/
  //state변경 방법
  decrementScore = () => {
    console.log("decrementScore")
    this.setState(this.state.score - 1)
  }
  //속성 = 익명함수 lexical this로 함수표현식으로 만듦
  incrementScore = () => {
    console.log("increment")
    // 안됨. this.state.score += 1;
    // 비동기적으로 렌더링 큐에 들어갔다 한번에 실행되므로 꼬일 수 있으므로 값을 받아서 처리할때는 callback에서 처리
    // 여러 속성 정의 후 아래처럼 변경시 해당 속성만 변경되고 다른속성과 자동 merge됨
    // this.setState({score : this.state.score + 1})
    //lexical 어휘그대로 해석하라 내부동작말고 > count의 this를 의미
    this.setState(prevState => ({score: prevState.score + 1}))
    //여기서는 중괄호 생략 안됨 {} 함수의 중괄호인지 json 중괄호인지 인식을 못함 return 명시 or () 으로 한번 감쌈.
    console.log(this.state)
  }

  //2. render > return 필수 구현 react element return
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}>{this.minus}</button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}>{this.plus}</button>
      </div>
    )
  }

  // 이벤트 (react 브라우저마다 호환여부)
  // onClick="함수선언문" 함수결과X ()XX
  // 미래의 실행됨. 함수가 독립적으로 존재 this를 망각> 현재의 this를 bind함수로 기억시킴. 미래어느순간에 기억하도록
  // bind 함수로 click event 와 component 맵핑 시킴
}


/*SOLID single responsiblity */
const Player = (props) => (
  <div className="player">
    <span className="player-name">
      {/* 자식은 3.onClick={props.removePlayer} props 속성으로 실행. 함수선언문! ()X >> 익명함수 선언문 function으로 wrap.*/}
      <button className="remove-player" onClick={()=> props.removePlayer(props.id)}>x</button>
      {props.name}
    </span>
    <Count score={props.score}/>
  </div>
)


// props title // jsx expression {11} 숫자타입 표현식 계S산, 변수입력가능 그냥 11 > string
// 속성이 있다면 json으로 전달.
// 부모> 자식 props 전달
//{ [jax expression1, jax expression2, ...] }

class App extends React.Component {
  state = {
    players : [
      {name: 'Joy',  score: 35, id: 1},
      {name: 'Lone', score: 23, id: 2},
      {name: 'Momo', score: 16, id: 3},
      {name: 'Mike', score: 75, id: 4},
    ]
  }
  //자식> 부모의 통신
  //이론적으로는 read only player는 app한테 삭제해달라고 요청해야함
  //실제코딩에서는 자식에서 부모의 callback 실행
  //1. 부모에서 callback 삭제 처리 props로 내려보냄
  handleRemovePlayer(id){
    //삭제로직
    console.log("handleRemovePlayer", id)
    if (this.state.players.length == 1) return
    // filter 함수 새로운 배열 객체 반환 test 통과(predicate)
    // this.setState(prevState => ({ players:this.state.players.filter( player.id != id) }))
    this.setState(prevState => { //json객체
      const players = prevState.players.filter( player=> player.id != id)
      return {players}
      /*players : players , a:a , b:b 같으면 하나로 생략가능 (단축속성명 short hand property)*/
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My ScoreBoard" totalPlayers={this.state.players.length}/>
        {
          this.state.players.map(player => <Player name={player.name}
                                                   score={player.score}
                                                   key={player.id}
                                                   id={player.id}
                                                   removePlayer={this.handleRemovePlayer.bind(this)}
                                                  /*2. props으로 callback 함수로 내림*/
                                />)
        }
        {console.log(this.state.players)}
      </div>
    )
  }
}


//Header function 호출
ReactDOM.render(<App/>, document.getElementById('root'))

// state 유지하려면  class 필요
// state의 값을 변경하게 되면 state와 연결된 뷰가 자동으로 렌더링이 된다.