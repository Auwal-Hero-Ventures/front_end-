// TokenGeneration.js
import React, { useState } from 'react';
import './App.css';


const TokenGeneration = () => {
  const [userName, setUserName] = useState('Guest');
  const [tokenBalance, setTokenBalance] = useState(0);
  const [wasteAmount, setWasteAmount] = useState('');
  const [generatedToken, setGeneratedToken] = useState('');
  const [error, setError] = useState('');

  const generateTokens = () => {
    try {
      const token = parseFloat(wasteAmount) || 0;
      setGeneratedToken(token);
      setTokenBalance(tokenBalance + token);
      setWasteAmount('');
      setError('');
    } catch (err) {
      handleError(err);
    }
  };

  const handleError = (err) => {
    setError(`An error occurred: ${err.message}`);
  };

  return (
    <div className="App">
      <header>
       
      </header>
      <main>
        <section className="user-section">
          <h2>Welcome, <span id="user-name">{userName}</span>!</h2>
          <p>Your Token Balance: <span id="token-balance">{tokenBalance}</span> tokens</p>
        </section>
        <section className="generate-token-section">
          <h2>Generate Token</h2>
          <form>
            <label htmlFor="waste-amount">Enter Waste Amount:</label>
            <input
              type="number"
              id="waste-amount"
              name="waste-amount"
              value={wasteAmount}
              onChange={(e) => setWasteAmount(e.target.value)}
              required
            />
            <button type="button" onClick={generateTokens}>Generate Tokens</button>
          </form>
          {error && <div className="error-message">{error}</div>}
          <div id="token-result">
            <p>Your generated token: <span id="generated-token">{generatedToken}</span></p>
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default TokenGeneration;
