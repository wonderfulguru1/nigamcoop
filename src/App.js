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
      <header className="app-header">
        <h1>{message}</h1>
        <div className="counter-section">
          <h2>Counter: {count}</h2>
          <div className="button-group">
            <button onClick={handleIncrement} className="btn btn-primary">
              Increment
            </button>
            <button onClick={handleDecrement} className="btn btn-secondary">
              Decrement
            </button>
            <button onClick={handleReset} className="btn btn-danger">
              Reset
            </button>
          </div>
        </div>
        <div className="message-section">
          <label htmlFor="message-input">Change the welcome message:</label>
          <input
            id="message-input"
            type="text"
            value={message}
            onChange={handleMessageChange}
            className="message-input"
            placeholder="Enter your message..."
          />
        </div>
        <div className="info-section">
          <p>This is a simple React application demonstrating:</p>
          <ul>
            <li>React hooks (useState)</li>
            <li>Event handling</li>
            <li>Component state management</li>
            <li>Modern React patterns</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
