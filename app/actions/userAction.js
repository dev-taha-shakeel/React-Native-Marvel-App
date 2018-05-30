import * as types from './types';
import ReactNative from 'react-native';
import Api from '../lib/api';
import CryptoJs from 'crypto-js';
const{
	AsyncStorage
} = ReactNative;


export function getUser(usersData){
	
	var verified = true;
		console.log(usersData);
		AsyncStorage.getItem('userDat').then((dataToRetrive)=>{
  		var dataRetrived = JSON.parse(dataToRetrive);
  		console.log('AsyncStorage data', dataRetrived);
  		console.log('name',dataRetrived[0].name);
});
		return{
		
		/*//Parse dataRetrived and check if username exists...
		for(var i=0; i < dataRetrived.length; i++){
			if(usersData.name == dataRetrived[i].name){
				if(usersData.pass == dataRetrived[i].pass){
					verified = true;
					break;
				}
				else{
					verified = false;
					break;
				}
			}
			else{
				verified = false;
				break;
			}
		}*/
		type: types.GET_USER_DATA,
		flag: verified
	}
	
}

export function setUser(usersData){
	return (dispatch, getState) => {
		console.log(usersData);
		key = types.KEY;
		console.log(key);
		
		//Getting all Data
		AsyncStorage.getItem(key).then((dataToRetrive)=>{
  		var dataRetrived = JSON.parse(dataToRetrive);
  		//console.log('retrived data',dataRetrived);
  		//console.log('index 0',dataRetrived[0]);
  		dataRetrived.push(usersData);
  		//console.log('pushed data',dataRetrived);
});

			/*try{
				AsyncStorage.setItem(key,JSON.stringify(dataRetrived));
			}
			catch(e){
				console.log('AsyncStorage Error', e.message);
			}*/
		type: types.SET_USER_DATA
	}
}

/*var url = "http://gateway.marvel.com/v1/public/comics?limit=100&format=comic&formatType=comic&dateRange="+beginDateStr+"%2C"+endDateStr+"&apikey="+API_KEY;
        var ts = new Date().getTime();
        var hash = crypto.createHash('md5').update(ts + PRIV_KEY + API_KEY).digest('hex');
        url += "&ts="+ts+"&hash="+hash;*/

export function marvelGetCharacters (searchInput) {
	return (dispatch, getState) => {
		const priv_key = '85d633142c4764650d85e2df5b82001509288df5';
		const API_key = 'cd1b0a9247cfe1be3fd8b7bf4155720a';
		var obj = new Date();
		var ts = obj.getTime();
		//console.log('dataTime', ts);
		var hash = CryptoJs.MD5(ts + priv_key + API_key);
		//var hash = CryptoJs.createHash('md5').update(ts + priv_key + API_key).digest('hex');
		const params = [
		`apikey=${API_key}`,
		`ts=${ts}`,
		`hash=${hash}`
		].join('&');
		//console.log('returning from API');
		return Api.get(`/v1/public/characters?${params}`).then(resp => {
			//console.log(resp);
			dispatch(setCharacters({characters: resp}))
		}).catch((ex) =>{
			console.log('fetch error', ex);
		});
	}
}

export function marvelGetSearchCharacters (searchInput) {
	return (dispatch, getState) => {
		const priv_key = '85d633142c4764650d85e2df5b82001509288df5';
		const API_key = 'cd1b0a9247cfe1be3fd8b7bf4155720a';
		var obj = new Date();
		var ts = obj.getTime();
		//console.log('dataTime', ts);
		var hash = CryptoJs.MD5(ts + priv_key + API_key);
		//var hash = CryptoJs.createHash('md5').update(ts + priv_key + API_key).digest('hex');
		const params = [
		`name=${searchInput}`,
		`apikey=${API_key}`,
		`ts=${ts}`,
		`hash=${hash}`
		].join('&');
		//console.log('returning search from API');

		return Api.get(`/v1/public/characters?${params}`).then( resp => {
			//console.log('response of search from API', resp );
			dispatch(setSearchedCharacters({characters : resp}))
		}).catch((ex) => {
			console.log('search API Error',ex);
		});
	}
}

export function setCharacters ({characters}) {
	return{
		type: types.SET_MARVEL_CHARACTERS,
		characters
	}
}

export function setSearchedCharacters ({characters}) {
	return{
		type: types.SET_SEARCHED_MARVEL_CHARACTERS,
		characters
	}
}