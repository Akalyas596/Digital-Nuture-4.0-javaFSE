import React, { useState } from 'react';

function CurrencyConvertor() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currency.toLowerCase() === 'euro') {
      const converted = amount * 80;
      alert(`Converting to Euro Amount is ₹${converted}`);
    } else {
      alert('Currency not supported');
    }
  };

  return (
    <div>
      <h2>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <br />
        <label>Currency:</label>
        <input type="text" value={currency} onChange={(e) => setCurrency(e.target.value)} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConvertor;
