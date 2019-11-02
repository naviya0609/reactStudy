import React from 'react';

//state가 있으니까 class!
//props function!
export class AddPlayerForm extends React.Component {
  state = {
    value:''
  }

  //단방향 바인딩 데이터 > 뷰. v-model ng-model
  //시간에 따라 변하는 값은 state로 관리
  //setState undefined >> bind 시키거나 함수에서 함수선언문으로 정의(arrow function)
  handleValueChange = (e) => {
    this.setState({value:e.target.value})
  }

  handleSubmit(e){
    e.preventDefault(); //form submit 시 기본적으로 재로딩 되어 새로고침 깜박임 form 기본 이벤트 방지

    //required 속성은 가지고 있으면서 에러출력만 안함.
    const form = document.getElementById("form");
    const player = document.getElementById("player");

    console.log(form.checkValidity());  //form 유효성체크
    console.log(player.validity.valid); //input 노드 유효성체크
    //player.validity.valid 모두만족할때 true
    if(!player.validity.valid) return;

    this.props.addPlayer(this.state.value);
  }

 //onchange js // onChange react method
  //enter 클릭시 중복버튼과 submit 버튼 연쇄적으로 눌리는 현상이 일어남. onclick >> onSubmit으로 이벤트 버블링 방지 e.stopPropagation()
  //브라우저마다 문구, 형태가 다름. noValidate
  render() {
    return (
      <form id="form" className='form' onSubmit={this.handleSubmit.bind(this)} noValidate>
        <input id="player" className='input' type='text' placeholder="ENTER PLAYER'S NAME" required value={this.state.value} onChange={this.handleValueChange}/>
        <input className='input' type='submit' value='ADD PLAYER' />
      </form>
    );
  }
}