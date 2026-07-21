import React from "react";

function OddPlayers(props) {

  const [first, , third, , fifth] = props.IndianPlayers;

  return (
    <ul>
      <li>First : {first}</li>
      <li>Third : {third}</li>
      <li>Fifth : {fifth}</li>
    </ul>
  );
}

export default OddPlayers;