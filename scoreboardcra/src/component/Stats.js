import React from 'react';

export const Stats = (props) => {
  var  totalPlayers = props.players.length; //계산
  let  totalScore = 0; //계산
/*  for(var i = 0; props.players.length; i++){
    totalScore += props.players.score[i];
  }*/
  props.players.forEach(player => totalScore += player.score )

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Player:</td>
          <td>{totalScore}</td>
        </tr>
      </tbody>
    </table>
  );
}
