// SignIn.js
import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = () => {
    // Implement your sign-in logic here
    console.log('Signing in with email:', email, 'and password:', password);
  };

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="button" onClick={handleSignIn}>Sign In</button>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
};

export default SignIn;