class Person {
	constructor(public userName:string ){}

	greet(){
		console.log(`Hi from ${this.userName}`);
	}
}

class Developer extends Person{
	constructor(public userName:string,public skills:string[]){
		super(userName);
	}

	saySkills(){
		console.log(this.skills);
	}
}


let ada = new Person('Ada');
ada.greet();

let dev1 = new Developer('Pesho', ['Java', 'Python']);
dev1.greet();
// Java, Python


function doSomethingWithDev(dev:Developer) {
	dev.saySkills();
}

// doSomethingWithDev(ada);