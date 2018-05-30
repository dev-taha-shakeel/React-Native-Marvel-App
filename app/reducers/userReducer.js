import createReducer from '../lib/createReducer';
import * as types from '../actions/types';
import users from './users';
import { Actions } from 'react-native-router-flux';

export const loginUser = createReducer({},{
	[types.GET_USER_DATA](state,action){
		console.log('we now in the reducer');
		console.log('state', state);
		console.log('action', action.flag);
		console.log('action2',action.type);
		/*if(action.flag === true){
			Actions.Mainpage;
		}*/
		return action.flag;
	}
});

export const signUpUser = createReducer({},{
	[types.SET_USER_DATA](state,action){
		return state;
	}
});

export const displayCharacters = createReducer({},{
	[types.SET_MARVEL_CHARACTERS](state,action){
		let newState = {};
		action.characters.forEach((character) => {
			newState[character.id] = character;
		});
		return newState;
	}
})

export const displaySearchedCharacters = createReducer({}, {
	[types.SET_SEARCHED_MARVEL_CHARACTERS](state,action){
		let newState = {};
		action.characters.forEach((character) => {
			newState[character.id] = character;
		});
		//console.log('set_searched reducer state', newState);
		return newState;
	}
});
