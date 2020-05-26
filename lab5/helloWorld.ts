"use strict";

class Animal {
  name:string

  constructor(name) {
    this.name = name;
  }

  eat(){
    console.log(`${this.name} is eating`);
  }

  speak() {
    console.log(`${this.name} makes an animal noise`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} barks`);
  }
}

var pluto = new Dog('Pluto');
pluto.speak();
pluto.eat();