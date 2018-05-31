import React, {Component} from 'react';
import ReactNative from 'react-native';
import styles from '../styles/DrawerContent';

const{
	View,
  Image,
  ScrollView,
} = ReactNative;

export default class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.menuItem = [
      {'name': 'Home', 'id': 1},
      {'name': 'Logout', 'id': 2},
    ]
  }
render() {
  return (
    <View>
       <ScrollView>
          {
             this.menuItem.map((item, index) => (
                <View key = {item.id} style = {styles.item}>
                   <Text>{item.name}</Text>
                </View>
             ))
          }
       </ScrollView>
    </View>
    )
  }
}
