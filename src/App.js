import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/2MpUj-Aua48" 
          frameBorder="0" allow="autoplay; encrypted-media" 
          allowFullScreen></iframe>
      </div>
    );
  }
}

export default App;
