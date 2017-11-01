import React, { Component } from 'react';
import FriendsList from './containers/FriendsList';
import Form from './containers/Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <FriendsList /> 
      </div>
    );
  }
}

export default App;
