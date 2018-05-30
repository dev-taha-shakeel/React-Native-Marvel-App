import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import AppContainer from './Appcontainer';
import Mainpage from './Mainpage';
import Splash from './Splash';

export default class Route extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="splash" component={Splash} title="" initial={true} />
          <Scene key="login" component={AppContainer} title="LoginPage"/>
          <Scene key="mainPage" component={Mainpage} title="Welcome" />
        </Scene>
      </Router>
    )
  }
}