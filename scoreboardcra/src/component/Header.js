import React from "react";
import {Stats} from "./Stats";

export const Header = (props) => {
  //console.log(props);
  return (
    <header>
      <span className="stats">Players: { props.totalPlayers }</span>
      <h1>{ props.title }</h1>
      <Stats players={props.players}/>
    </header>
  )
}

//export default Header;