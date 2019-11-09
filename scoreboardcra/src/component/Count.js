import React from "react";
import PropTypes from 'prop-types';
import {changeScore} from "../redux/actions";
import {connect} from "react-redux";
import styles from '../pages/scoreboard/Scoreboard.module.css';
import classNames from 'classnames';

export class Counter extends React.Component {
  incDecScore = (delta) => {
    this.props.changeScore(this.props.id, delta) //인수로 id와 현재점수
  }

  render() {
    return (
      <div className={styles.counter}>
        <button className={classNames(styles['counter-action'], styles['decrement'])} onClick={()=>this.incDecScore(-1)}> - </button>
        <span className={styles['counter-score']}>{this.props.score}</span>
        <button className={classNames(styles['counter-action'], styles['increment'])} onClick={()=>this.incDecScore(1)}> + </button>
      </div>
    );
  }
}

//class AA. static 속성
Counter.propTypes = {
  id : PropTypes.number,
  score : PropTypes.number,
  changeScore : PropTypes.func,
}

//자식>부모
//redux 라이브러리 함수
const mapActionToProps = (dispatch) => ({
  //왼쪽이 props, 오른쪽이 액션을 dispatch 하는 함수
  changeScore : (id, delta) => dispatch(changeScore(id,delta))
})

export default connect(null, mapActionToProps)(Counter);