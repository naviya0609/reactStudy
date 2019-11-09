import React from 'react';
import Counter from "./Count";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {removePlayer} from "../redux/actions";
import styles from '../pages/scoreboard/Scoreboard.module.css';

class Players extends React.PureComponent{
  render() {
    console.log(this.props.name,"is rendered")

    const {removePlayer, id, name, score, changeScore} = this.props;

    return(
      <div className={styles.player}>
              <span className={styles['player-name']}>
                <button className={styles['remove-player']} onClick={() => this.props.removePlayer(this.props.id)}>x</button>
                {this.props.children}
                {name}
              </span>
        <Counter score={score} id={id}/>
      </div>
    )
  }
}
//스코어 변경시 전체 대상으로 필요없는 렌더링 일어남

Players.propsTypes = {
  name : PropTypes.string,
  id : PropTypes.number,
  score : PropTypes.number
}


//자식>부모
//redux 라이브러리 함수
const mapActionToProps = (dispatch) => ({
  //왼쪽이 props, 오른쪽이 액션을 dispatch 하는 함수
  removePlayer : (id) => dispatch(removePlayer(id))
})

export default connect(null, mapActionToProps)(Players);
