import React from "react";
import {Stats} from "./Stats";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';
import styles from '../pages/scoreboard/Scoreboard.module.css';

export const Header = ({title,players}) => {
  // console.log(props);
  // const {title, totalPlayers} = props; // desctruct assignment
  return (
    <header className={styles.header}>
      <Stats players={players}/>
      <h1 className={styles.h1}>{title}</h1>
      <Stopwatch></Stopwatch>
    </header>
  );
}

//export default Header;
Header.prototype = {
  title: PropTypes.string,
  players: PropTypes.array
}

Header.defaultProps ={
  title:'Scoreboard'
}