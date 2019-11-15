import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Person name='Bohdan' age='27'>Text outside</Person>
      <Person name='Ivan' age='72'>Text inside</Person>
    </div>
  );
}

export default App;
