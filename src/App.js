import React, { Component } from 'react';
import './App.css';
import Register from './components/register';
import StudentProfile from './components/studentProfile';
import Student from './components/Student';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Student/>
      </div>
    );
  }
}

export default App;
