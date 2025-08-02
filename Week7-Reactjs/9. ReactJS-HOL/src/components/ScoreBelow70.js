import React from 'react';

const ScoreBelow70 = ({ players }) => {
  const players70 = players.filter(p => p.score < 70);
  return (
    <>
      {players70.map((item, index) => (
        <li key={index}>
          Mr. {item.name} <span>{item.score}</span>
        </li>
      ))}
    </>
  );
};

export default ScoreBelow70;
