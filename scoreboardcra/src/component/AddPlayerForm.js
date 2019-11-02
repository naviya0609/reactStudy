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

//onchange js // onChange react method
  render() {
    return (
      <form className='form'>
        <input className='input' type='text' placeholder="ENTER PLAYER'S NAME" value={this.state.value} onChange={this.handleValueChange}/>
        <input className='input' type='submit' value='ADD PLAYER' />
      </form>
    );
  }
}