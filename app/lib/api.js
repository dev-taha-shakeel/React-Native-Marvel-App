class Api {
	static headers(){
		return {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'dataType': 'json',
		}
	}

	static get(route){
		return this.xhr(route, null, 'GET');
	}


	static put(route, params){
		return this.xhr(route, params, 'PUT');
	}


	static post(route, params){
		return this.xhr(route, params, 'POST');
	}


	static get(route){
		return this.xhr(route, null, 'GET');
	}


	static delete(route, params){
		return this.xhr(route, params, 'DELETE');
	}

	static xhr(route, params, verb) {
		const host = 'https://gateway.marvel.com'
		const url = `${host}${route}`;
		let options = Object.assign({method : verb}, params ? { body: JSON.stringify(params)} : null);
		options.headers = Api.headers();
		//console.log(url);
		return fetch(url, options).then(resp => {
			let json = resp.json();
			console.log('json', json);
			if(resp.ok){ 
				return json;
			}
			return json.then(err => {throw err
				console.log('api error', err);});
		}).then(json => json.data.results);
	}
}

export default Api;