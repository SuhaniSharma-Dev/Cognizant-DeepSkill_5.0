import React from "react";

function EvenPlayers(props) {

  const [, second, , fourth, , sixth] = props.IndianPlayers;

  return (
    <ul>
      <li>Second : {second}</li>
      <li>Fourth : {fourth}</li>
      <li>Sixth : {sixth}</li>
    </ul>
  );
}

export default EvenPlayers;