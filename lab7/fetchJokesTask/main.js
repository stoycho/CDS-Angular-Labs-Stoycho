// DOM cache:
let main = document.querySelector('main');
let fetchBTN = document.querySelector('.fetchBTN');

const jokesURL = 'http://api.icndb.com/jokes/random/3';

const getWithFetchAPI = function (url) {
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
		console.log(error);
	})
}

const getWithXhrObj =  function(url){
	let dataReceived;

	// console.log(`url: ${url}`);
	// console.dir(event);

	// create a XMLHttpRequest object
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
	new ActiveXObject("Microsoft.XMLHTTP");

	// initializes the request:
	xhr.open("GET", url, false); // synchronous call =>depricated!

	// EventHandler, that will be fired each time when the xhr state changes
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// finally do something with content:
			// main.innerHTML = this.responseText;
			// parseJokes(this.responseText);
			dataReceived = this.responseText;
		};
	};

	// sends the request:
	xhr.send();

	// the only way to return data is to use sync AJAX clearInterval, but this is very bad!!!
	// the code is just for demo
	return dataReceived;
};

const clickHandler = function (url) {
	return function () {
		let data = getWithXhrObj(url);
		console.log(`xhr data: ${data}`);
		parseJokes(data);

		// getWithFetchAPI(url);
	}
}

const parseJokes = function(jsonStr){
	let jokes = JSON.parse(jsonStr);
	console.dir(jokes);


	jokes.value.forEach( function (el) {
		// console.log(el.joke);

		let jokeDiv = document.createElement('DIV');
		jokeDiv.innerHTML = el.joke;

		main.appendChild(jokeDiv);

	});
}

fetchBTN.addEventListener('click', clickHandler(jokesURL) );

