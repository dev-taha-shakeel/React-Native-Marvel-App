import { combineReducers } from 'redux';
//import * as userReducer from './userReducer';
import {loginUser,displayCharacters,displaySearchedCharacters} from './userReducer';

/*export default combineReducers (Object.assign(
		//reducer goes here
		userReducer,
	));*/
const Reducers = combineReducers({
  loginUser: loginUser,
  displayCharacters: displayCharacters,
  displaySearchedCharacters: displaySearchedCharacters
});

export default Reducers