// DOM cache:
let main = document.querySelector('iva-main');
let fetchBTN = document.querySelector('.fetchBTN');

const jokesURL = 'http://api.icndb.com/jokes/random/3';


const parseJokes = function(jsonStr){
	let jokes = JSON.parse(jsonStr);
	console.dir(jokes);


	jokes.value.forEach( function (el) {
		// console.log(el.joke);

		// create DIV DOM object:
		let title = 'Ada byron';
		let jokeDiv = document.createElement('DIV');
		jokeDiv.innerHTML = `<span>{{title}}</span>`;

		// attach created object to the DOM:
		main.appendChild(jokeDiv);

	});
}
const getDataByXHR = function (url) {
	let data;

	// create a XMLHttpRequest object
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
	new ActiveXObject("Microsoft.XMLHTTP");

	// initializes the request:
	xhr.open("GET", url, false); // asynchronous
	console.log(`request open`);


	// EventHandler, that will be fired each time when the xhr state changes
	xhr.onreadystatechange = function() {
		console.dir(this);
		console.log(`REQUEST IS PROCESSING`);
		if (this.readyState == 4 && this.status == 200) {
			data = this.responseText;
		};
	};
	console.log(`request processed`);

	// sends the request:
	// If the request is synchronous, this method doesn't return until the response has arrived.
	xhr.send();

	console.log(`request sent`);
	console.log(`data in getDataByXHR: ${data}`);
	return data; // undefined if async is true
}

const clickHandler = function (url) {
	const getJokesWithXHR = function () {
		let dataReceived = getDataByXHR(url);
		parseJokes(dataReceived);
	}

	const getJokesWithFetch = function(){
		fetch(url)
		.then(function (response){
			// do something on success:
			return response.text();
		})
		.then(function (responseText){
			// do something with responseText
			parseJokes(responseText);
		})
		.catch( function (error) {
			console.dir(error);
		})
	}

	return getJokesWithXHR;
}




fetchBTN.addEventListener('click', clickHandler(jokesURL) );

