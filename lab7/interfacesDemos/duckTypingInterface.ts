class Duck{
	constructor(public name:string) {}
	quacks(){}
	swim(){}
}

class Cat {
	constructor(public name:string) {}
	quacks(){}
}


function isItDuck(obj:Duck) {
	obj.quacks?
	console.log(`${obj.name} is a Duck`):
	console.log(`Not a Duck`);
}

let donald = new Duck('Donald');
let tom = new Cat('Tom');

isItDuck(donald);
isItDuck(tom);
//Argument of type 'Cat' is not assignable to parameter of type 'Duck'.
// Property 'swim' is missing in type 'Cat' but required in type 'Duck'.