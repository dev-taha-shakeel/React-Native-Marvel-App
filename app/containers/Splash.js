import React, {Component} from 'react';
import ReactNative from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { createStackNavigator } from 'react-navigation';
import { Actions } from 'react-native-router-flux';

const{
	View,
	Image,
	StyleSheet,
} = ReactNative;

const background = require('../resources/splash.jpg');
  
class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }
  componentDidMount() {
    console.log('made it to splash did mount');
    setTimeout(() =>
      {
        this.setState({ visible: false }, () => {
          this.props.navigation.navigate('AppContainer');
        })
      }, 3000);
  }
  render() {
    return (
        <Image
          style={[styles.container, styles.background]}
          source={background}
          resizeMode='cover'
        >
        <Spinner
          visible={this.state.visible}
          overlayColor={'#AARRGGBB'}
          style
        />
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: null,
    height: null,
  },
});
  
export default Splash;
