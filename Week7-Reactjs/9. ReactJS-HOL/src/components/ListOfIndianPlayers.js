import React from 'react';

const ListOfIndianPlayers = ({ IndianPlayers }) => {
  return (
    <>
      {IndianPlayers.map((p, index) => (
        <li key={index}>Mr. {p}</li>
      ))}
    </>
  );
};

export default ListOfIndianPlayers;
