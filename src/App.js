import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Welcome to your React App!');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="app">
      <p style="
    font-size: 50px;
    color: #fff;
    font-weight: 700;
">Welcome to Nigam Co-operative Society Official Website</p>
    </div>
  );
}

export default App;
