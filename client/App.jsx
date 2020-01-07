import React, { Component } from 'react';

import MainContainer from './containers/MainContainer.jsx';

import './styles.scss';
import LoginContainer from './containers/LoginContainer.jsx';

class App extends Component {

  render() {
    return (
      <div id="App">
        <h1 id="title">Fresh Feed</h1>
        <h3 id="subTitle">Your Local Farmer's Market Resource</h3>
        <LoginContainer />
        {/* <MainContainer /> */}
      </div>
    )
  }
}

export default App;