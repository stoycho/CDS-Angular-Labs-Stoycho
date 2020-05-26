// create a decorator
function logDecor(f:any){
	return function(name:string){
		console.log(`{{{{{{{{{{{{{{{{{{{{{{{`);
		f(name)
		console.log(`}}}}}}}}}}}}}}}}}}}}}}}`);
	}
}

//a function, to be decorated:
let greet:Function;
greet = function (name:string):void{
	console.log(`Howdy ${name}!`);
}

// decorate the function:
greet = logDecor(greet);


// use the decorated function
greet("Ada");



