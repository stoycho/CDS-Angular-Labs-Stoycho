interface IDeveloper {
	userName:string;
	skills:string[];
	saySkills: ()=>void;
}

// class Developer{
// 	userName:string;
// 	skills:string[];

// 	constructor(u:string, s:string[]){
// 		this.userName = u;
// 		this.skills =s;
// 	}

// 	saySkills(){
// 		console.log(this.skills);
// 	}
// }

// class Person {
// 	constructor(public userName:string ) {

// 	}
// 	greet(){
// 		console.log(`Hi from ${this.userName}`);

// 	}
// }
// let ada = new Person('Ada');
// ada.greet();

// let dev1 = new Developer('Pesho', ['Java', 'Python']);
// // dev1.saySkills();
// // Java, Python


// function doSomethingWithDev(dev:Developer) {
// 	dev.saySkills();
// }

// doSomethingWithDev(ada);