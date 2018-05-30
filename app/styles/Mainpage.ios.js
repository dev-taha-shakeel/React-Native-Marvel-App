import ReactNative from 'react-native';
const{
	StyleSheet,
} = ReactNative;

export default StyleSheet.create({
    scene:{
		flex: 1,
		marginTop: 0,
	},

	searchSection:{
		height: 40,
		borderBottomColor: '#000',
		borderBottomWidth: 1,
		
		flexDirection: 'row'
	},
	searchButton:{
		flex: 0.3,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#D3D3D3',
		borderWidth: 10,
		borderRadius: 20,
		borderColor: '#D3D3D3',
		padding: 5,
	},
	searchButtonText:{
		fontSize: 20,
	},
	searchBarText:{
		fontSize: 20,
		fontWeight: 'bold',
		
	},
	scrollSection:{
		flex: 0.8

	},
	resultText:{
		fontSize: 20,
		fontWeight: 'bold',
		color: '#FFF',
		backgroundColor: '#000'
	},
	resultImage:{
		height: 150,
	},
	searchInput:{
		flex: 0.7,
		height: 40,
		fontSize: 18,

	},
	navbar:{
		flexDirection: 'column',
		height: 60,
		justifyContent: 'center'
		
	},
	navbarText:{
		fontSize: 15,
		fontWeight: 'bold',
		backgroundColor: 'black',
		color: 'white',
		paddingLeft: 15,
		textAlign: 'center'
	},
	navbarButton:{
		fontSize: 15,
		color: 'white',
		backgroundColor: 'black',
		textAlign: 'left',
		paddingLeft: 10,
		paddingBottom: 10,
		justifyContent: 'center'
	}
});