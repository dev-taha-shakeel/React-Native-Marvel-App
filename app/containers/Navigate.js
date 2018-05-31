import React, { Component } from 'react';
import { createStackNavigator, addNavigationHelpers, DrawerNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import Splash from './Splash';
import AppContainer from './Appcontainer';
import Home from './Mainpage';
import DrawerContent from './DrawerContent';

//React navigation map file

export const Navigator = createStackNavigator({
  Splash: { screen: Splash },
  AppContainer: { screen: AppContainer },
  Home: { screen: Home },
},{
  initialRouteName: 'Splash',
})

export const Drawer = DrawerNavigator({
  Content: {screen: DrawerContent},
  Stack: {screen: Navigator}
},
{
  drawerPosition: 'right',
  initialRouteName: 'Content',
  drawerWidth: 200
});
class Nav extends Component {
  render() {
    return (
      <Drawer navigation={addNavigationHelpers({
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