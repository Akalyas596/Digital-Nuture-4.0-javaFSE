import React from 'react';

function SyntheticEventButton() {
  const handleClick = (e) => {
    alert('I was clicked');
  };

  return <button onClick={handleClick}>Click on me</button>;
}

export default SyntheticEventButton;
