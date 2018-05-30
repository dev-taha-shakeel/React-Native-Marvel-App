import React, {Component} from 'react';
import ReactNative from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { createStackNavigator } from 'react-navigation';
import { Actions } from 'react-native-router-flux';
import styles from '../styles/Splash';

const{
	View,
	Image,
} = ReactNative;

const background = require('../resources/splash.jpg');
  
class Splash extends Component {
static navigationOptions = {
  title: "Splash",
  headerStyle:{
    backgroundColor:'black',
  },
};
  
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
          this.props.navigation.navigate('AppContainer', {title: 'Login Page'});
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
          overlayColor={'transparent'}
          style
        />
      </Image>
    )
  }
}
  
export default Splash;
