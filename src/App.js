import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChangeEvent = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  }

  const handleEmailChangeEvent = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {name}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input
          id='1'
          type='test'
          placeholder='Name'
          onChange={handleNameChangeEvent}
        />
        <input
          id='1'
          type='test'
          placeholder='Email'
          onChange={handleEmailChangeEvent}
        />
      </header>
    </div>
  );
}

export default App;
