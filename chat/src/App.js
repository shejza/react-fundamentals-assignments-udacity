import React from 'react';
import './App.css';
import Main from './Main';
import logo from './logo.svg';

class App extends React.Component {
  
  render() {
    return (
       <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
         <Main/>
      </div>
    );
  }
}

export default App;
