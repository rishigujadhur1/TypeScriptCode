//What is the output of this code?
// Q1
// What is the output of this code?
class Dog {
  breed: string;
  constructor(breed: string) {
    this.breed = breed;
  }
  bark() {
    console.log("Woof! Woof!");
  }
}

const myDog = new Dog("Labrador");
myDog.bark();
console.log(myDog.breed);

//Q2
// What is the output of this code?
class Car {
  brand: string;
  constructor(brand: string) {
      this.brand = brand;
  }
  start() {
      console.log(`${this.brand} is starting...`);
  }
}

const myCar = new Car("Toyota");
myCar.start();
console.log(myCar.brand);

//Q3
// What is the output of this code?
class Circle {
  radius: number;
  constructor(radius: number) {
      this.radius = radius;
  }
  calculateArea() {
      return Math.PI * this.radius ** 2;
  }
}

const myCircle = new Circle(5);
console.log(`The area of the circle is ${myCircle.calculateArea()} square units.`);

//Q4
// What is the output of this code?
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }
  greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.greet();
person2.greet();
