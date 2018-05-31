import ReactNative from 'react-native';
const{
	StyleSheet,
} = ReactNative;

export default StyleSheet.create({
  container: {
		flex: 1,
	},
	background: {
		width: null,
		height: null,
	},
	wrapper : {
		paddingHorizontal: 15,
		marginBottom: 50,
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
		// marginVertical: 80,
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
	},
	buttonWrapper: {
		// backgroundColor: '#ffffff',
		paddingVertical: 15
	}
});