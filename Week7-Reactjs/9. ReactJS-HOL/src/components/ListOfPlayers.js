import React from 'react';

const ListOfPlayers = ({ players }) => {
  return (
    <>
      {players.map((item, index) => (
        <li key={index}>
          Mr. {item.name} <span>{item.score}</span>
        </li>
      ))}
    </>
  );
};

export default ListOfPlayers;
