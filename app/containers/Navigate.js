import React, { Component } from 'react';
import { createStackNavigator, addNavigationHelpers  } from 'react-navigation';
import { connect } from 'react-redux';
import Splash from './Splash';
import AppContainer from './Appcontainer';
import Home from './Mainpage';

//React navigation map file

export const Navigator = createStackNavigator({
    Splash: { screen: Splash },
    AppContainer: { screen: AppContainer },
    Home: { screen: Home }
  },{
    initialRouteName: 'Splash',
  })
  
  class Nav extends Component {
    render() {
      return (
        <Navigator navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.navigation,
        })} />
      )
    }
  }

const mapStateToProps = state => ({
  navigation: state.navigation,
})
  
export default connect(mapStateToProps)(Nav)