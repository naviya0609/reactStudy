import React from 'react';
import Counter from "./Count";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {removePlayer} from "../redux/actions";

class Players extends React.Component{

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // 기존 score와 nextProps의 score 가 다르면 true
    // Component라면 shouldComponentUpdate 렌더링 제어 메서드를 직접 구현해야한다.
    // true를 리턴하며 렌더링이 일어나고 false를 리턴하면 렌더링이 일어나지 않는다.
    return this.props.score !== nextProps.score ? true : false;
  }

  render() {
    console.log(this.props.name,"is rendered")

    const {removePlayer, id, name, score, changeScore} = this.props;

    return(
      <div className="player">
              <span className="player-name">
                <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>x</button>
              </span>
        <span className="player-name">
                {this.props.name}
              </span>
        <Counter score={this.props.score} id={this.props.id}/>
      </div>
    )
  }
}
//스코어 변경시 전체 대상으로 필요없는 렌더링 일어남

Players.propsTypes = {
  name : PropTypes.string,
  id : PropTypes.number,
  score : PropTypes.number,
  removePlayer : PropTypes.func
}


//자식>부모
//redux 라이브러리 함수
const mapActionToProps = (dispatch) => ({
  //왼쪽이 props, 오른쪽이 액션을 dispatch 하는 함수
  removePlayer : (id) => dispatch(removePlayer(id))
})

export default connect(null, mapActionToProps)(Players);
