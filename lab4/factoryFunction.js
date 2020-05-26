function userFactory(name, age) {
	let obj = {};

	obj.name = name;
	obj.age = age;

	return obj;
}

// user = {
// 	'name': <string>,
// 	'age': <number>
// }

let user1 = userFactory('Ada', 33);
let user2 = userFactory('pesho', 50);

console.log( user1.name ); // Ada
console.log( user1.age ); // 33