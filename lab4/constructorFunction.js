function User(name, age) {
	this.name = name;
	this.age = age;
}
User.prototype.greet = function () {
	console.log(`Hello, I'm ${this.name}, ${this.age}`);
}


let user1 = new User('Ada', 33);
console.log(user1);
user1.greet();


let user2 = new User('pesho', 50);
console.log(user2);

// console.log( user1.name ); // Ada
// console.log( user1.age ); // 33