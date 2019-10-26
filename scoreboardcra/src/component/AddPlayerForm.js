import React from 'react';

//state가 있으니까 class!
//props function!
export class AddPlayerForm extends React.Component {

  render() {
    return (
      <form className='form'>
        <input className='input' type='text' placeholder="ENTER PLAYER'S NAME"/>
        <input className='input' type='submit' value='ADD PLAYER'/>
      </form>
    );
  }
}