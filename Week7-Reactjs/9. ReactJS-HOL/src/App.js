import React from 'react';
import ListOfPlayers from './components/ListOfPlayers';
import ScoreBelow70 from './components/ScoreBelow70';
import OddPlayers from './components/OddPlayers';
import EvenPlayers from './components/EvenPlayers';
import ListOfIndianPlayers from './components/ListOfIndianPlayers';

function App() {
  const flag = true; // Change to false to test alternate output

  const players = [
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 90 },
    { name: 'Alex', score: 61 },
    { name: 'Elisabeth', score: 61 },
    { name: 'Ethan', score: 60 },
    { name: 'Bob', score: 80 },
    { name: 'Mark', score: 75 },
    { name: 'Julia', score: 64 },
    { name: 'Arya', score: 58 },
    { name: 'Rohit', score: 20 },
  ];

  const IndianTeam = ['Sachin', 'Dhoni', 'Virat', 'Rahul', 'Yuvraj', 'Raina'];

  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      {flag ? (
        <>
          <h1>List of Players</h1>
          <ListOfPlayers players={players} />
          <hr />
          <h1>List of Players having Scores Less than 70</h1>
          <ScoreBelow70 players={players} />
        </>
      ) : (
        <>
          <h1>Indian Team</h1>
          <h2>Odd Players</h2>
          <OddPlayers IndianTeam={IndianTeam} />
          <h2>Even Players</h2>
          <EvenPlayers IndianTeam={IndianTeam} />
          <hr />
          <h2>List of Indian Players Merged:</h2>
          <ListOfIndianPlayers IndianPlayers={IndianPlayers} />
        </>
      )}
    </div>
  );
}

export default App;
