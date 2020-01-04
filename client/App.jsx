import React, { Component } from 'react';

import MainContainer from './containers/MainContainer.jsx';

import './styles.scss';

class App extends Component {

  render() {
    return (
      <div id="app">
        <h1>Header</h1>
        <h2>A subtitle</h2>
        <MainContainer />
      </div>
    )
  }
}

export default App;