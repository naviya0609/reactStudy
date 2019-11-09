import React from 'react';
import {connect} from "react-redux";
import {addPlayer} from "../redux/actions";
import styles from '../pages/scoreboard/Scoreboard.module.css';

//state가 있으니까 class!
//props function!
class AddPlayerForm extends React.Component {
  textInput = React.createRef();
  handleSubmit(e){
    e.preventDefault(); //form submit 시 기본적으로 재로딩 되어 새로고침 깜박임 form 기본 이벤트 방지
    const player = document.getElementById("player");
    if (!player.validity.valid) {
      alert('player is not valid');
      return;
    }

    this.props.addPlayer(this.textInput.current.value);
    // 폼 초기화
    e.currentTarget.reset();
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit.bind(this)} noValidate>
        <input id="player" className={styles.input} type="text" placeholder="enter a player's name" required
               ref={this.textInput} />
        <input className={styles.input} type="submit" value="Add Player"></input>
      </form>
    );
  }
}

//자식>부모
//redux 라이브러리 함수
const mapActionToProps = (dispatch) => ({
  //왼쪽이 props, 오른쪽이 액션을 dispatch 하는 함수
  addPlayer : (name) => dispatch(addPlayer(name))
})
export default connect(null, mapActionToProps)(AddPlayerForm);