import React, { Component } from 'react';
import ReactNative from 'react-native';
import {connect} from 'react-redux';
import {ActionCreators} from '../actions';
import {bindActionCreators} from 'redux';
import { Actions } from 'react-native-router-flux';
import users from '../reducers/users';
const{
	View,
	Text,
	TouchableHighlight,
	TouchableWithoutFeedback,
	TextInput,
	Image,
	AsyncStorage,
	Keyboard,
	StyleSheet
} = ReactNative;

const background = require('../resources/signinbackground.jpg');
const personIcon = require('../resources/signin.png');
const lockIcon = require('../resources/password.png');

export class AppContainer extends Component {
constructor(props) {
  super(props);
  //console.log('redux state' , this.props.loginUser);
  this.state = {enterName: '', enterPass: '',  loginFlag: {}};
  this.setUserDataPassed = this.setUserDataPassed.bind(this);
  this.getUserDataPassed = this.getUserDataPassed.bind(this);
}

getUserDataPassed(){
	//console.log('huh', 'why are u being called');
	Keyboard.dismiss();
	var dataToSet = {
		name:'',
		pass:''
	};
	console.log('name',this.state.enterName);
	console.log('pass',this.state.enterPass);
	dataToSet.name = this.state.enterName;
	dataToSet.pass = this.state.enterPass;
	console.log('datato send',dataToSet);
	this.props.getUser(dataToSet);
	/*this.setState = ({
		loginFlag: flag
	});

	console.log('redux state' , flag);
	console.log('components state', this.state.loginFlag);*/
}

setUserDataPassed(){
	Keyboard.dismiss();
	var dataToSet = {
		name:'',
		pass:''
	};
	dataToSet.name = this.state.enterName;
	dataToSet.pass = this.state.enterPass;
	this.props.setUser(dataToSet);
}

componentWillMount() {
	var userArr = [];
	userArr = users();
	/*userArr.forEach( function (arrItem){
		var key = arrItem.id.toString();
		console.log('id', key);
		var allData = JSON.stringify(arrItem);
		console.log('wholeData', allData);
		try{
			AsyncStorage.setItem(key,allData);
		}
		catch(e){
			console.log('AsyncStorage Error', e.message);
		}
	});*/
		// adding whole user array in AsyncStorage
		console.log('data', userArr);
		try{
			AsyncStorage.setItem('userDat',JSON.stringify(userArr));
			console.log('[data] entered');
		}
		catch(e){
			console.log('error', e.message);
		}

	}
	
/*componentDidMount() {
	this.setState = ({
		loginFlag: this.props.loginUser
	});
}
*/

closeKeyboard(){
	console.log('keyboard close','its getting here');
	Keyboard.dismiss();
}
	render(){
		console.log('rendering our app component');
		// if(this.props.loginUser.length != 0 && this.props.loginUser == true){
		// 	console.log('routing now.....');
		// 	Actions.mainPage({text: this.state.enterName});
		// }
		//console.log('in render redux state' , this.props.loginUser);
		return(
			<TouchableWithoutFeedback onPress={this.closeKeyboard}>
				<Image
					style={[styles.background,styles.container]}
					source={background}
					resizeMode='cover'
				>
					<View style={styles.container}/>
						<View style={styles.wrapper}>
							<View style={styles.inputWrap}>
								<View style={styles.iconWrapper}>
									<Image
										source={personIcon}
										style = {styles.icon}
										resizeMode= 'contain'
									/>
								</View>
								<TextInput style={styles.input}
									placeholder='UserName'
									onChangeText={(enterName) => this.setState({enterName})}
									value= {this.state.enterName}
									underlineColorAndroid='transparent'
								/>
							</View>
							
							<View style={styles.inputWrap}>
								<View style={styles.iconWrapper}>
									<Image
										source={lockIcon}
										style = {styles.icon}
										resizeMode= 'contain'
									/>
								</View>
								<TextInput style={styles.input}
									placeholder='Password'
									underlineColorAndroid='transparent'
									secureTextEntry
									onChangeText={(enterPass) => this.setState({enterPass})}
									value= {this.state.enterPass}
								/>
							</View>
							<TouchableHighlight style={styles.buttonWrapper} onPress={() => {this.getUserDataPassed()}}>
								<View style={styles.button}>
									<Text style={styles.buttonText}>Sign In Tahass</Text>
								</View>
							</TouchableHighlight>
						</View>
					<View style={styles.container}/>  
				</Image>
			</TouchableWithoutFeedback>)
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
	wrapper : {
		paddingHorizontal: 15,
		marginBottom: 100,
	},
	inputWrap : {
		flexDirection: 'row',
		marginVertical: 10,
		height: 50,
		backgroundColor: 'transparent',
	},
	input: {
		flex: 1,
		paddingHorizontal: 10,
		backgroundColor: '#FFFFFF',
		color: '#000000', 
	},
	iconWrapper: {
		paddingHorizontal: 7,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#D73352',
	},
	icon: {
		width: 24,
		height: 24,
	},
	button: {
		backgroundColor: '#d73352',
		paddingVertical: 15,
		marginVertical: 80,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		borderRadius: 20,
		padding: 30,
		borderWidth: 1,
	},
	buttonText: {
		color: '#FFFFFF',
		fontSize: 18,
	}

});

function mapStateToProps(state){
	//console.log("asdasd",state);
	return{
		// state data from login Reducer will come here and then this will update the components
		// loginflags prop..
		loginUser: state.loginUser 

	};

}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);