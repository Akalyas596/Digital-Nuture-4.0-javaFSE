import React from 'react';
import './App.css';

function App() {
  const heading = <h1>Office Space , at Affordable Range</h1>;

  const offices = [
    {
      Name: 'DBS',
      Rent: 50000,
      Address: 'Chennai',
      imgSrc: 'https://via.placeholder.com/300x200.png?text=Office+Space'
    },
    {
      Name: 'WeWork',
      Rent: 80000,
      Address: 'Bangalore',
      imgSrc: 'https://via.placeholder.com/300x200.png?text=WeWork'
    },
    {
      Name: 'Cowork Zone',
      Rent: 65000,
      Address: 'Hyderabad',
      imgSrc: 'https://via.placeholder.com/300x200.png?text=Cowork+Zone'
    }
  ];

  return (
    <div className="App">
      {heading}
      {offices.map((item, index) => {
        const rentClass = item.Rent <= 60000 ? 'textRed' : 'textGreen';
        return (
          <div key={index}>
            <img src={item.imgSrc} width="25%" height="25%" alt="Office Space" />
            <h3>Name: {item.Name}</h3>
            <h3 className={rentClass}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
