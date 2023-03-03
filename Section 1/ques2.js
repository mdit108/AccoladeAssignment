
//Example of encapsulation

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (this.#balance >= amount) {
      this.#balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

//Example of abstraction

abstract class Animal {
  abstract makeSound(): void;
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof");
  }
}

//Example of Inheritance

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  drive() {
    console.log("Driving...");
  }
}

class Car extends Vehicle {
  constructor(make, model, numDoors) {
    super(make, model);
    this.numDoors = numDoors;
  }

  honk() {
    console.log("Honk honk!");
  }
}

//Example of polymorphism

interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  calculateArea() {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  constructor(private radius: number) {}

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}