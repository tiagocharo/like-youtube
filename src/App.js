import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import socketIOClient from "socket.io-client";
import { setInterval } from 'timers';


class App extends Component {
  constructor() {
    super();
    this.state = {
      like: 0,
      endpoint: "http://192.168.2.14:4001",
      disabled: false
    }

    const socket = socketIOClient(this.state.endpoint);
    socket.on('new like', (like) => {
      this.setState({ like: this.state.like + 1})
    })

  }

  like() {
    
    this.setState({ disabled: true })

    setInterval(() => {
      this.setState({ disabled: false })
    },10000)
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('new like')
  }

  render() {

    return (
      <div className="App">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/2MpUj-Aua48" 
          frameBorder="0" 
          allow="autoplay; encrypted-media" 
          allowFullScreen></iframe>
          <div className="box-like">
            <button 
              ref={(button) => { this.button = button; }}
              type="submit"
              disabled={ this.state.disabled }
              onClick={ this.like.bind(this) }>Like</button>
            <p>{this.state.like}</p>
          </div>
      </div>
    );
  }
}

export default App;
