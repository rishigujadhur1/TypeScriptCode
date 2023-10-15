//What is the output of this code?
// Q1
 // What is the output of this code?
interface Animal {
    name: string;
    sound: string;
}

const dog: Animal = {
    name: "Buddy",
    sound: "Woof!",
};

console.log(dog.name + " says " + dog.sound);

// Q2
// What is the output of this code?
interface Shape {
    area(): number;
}

class Circle implements Shape {
    constructor(private radius: number) {}

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

const myCircle = new Circle(5);
console.log("Area of the circle: " + myCircle.area());

// Q3
interface Person {
    name: string;
    greet(): string;
}

class Greeting implements Person {
    constructor(private name: string) {}

    greet() {
        return "Hello, my name is " + this.name;
    }
}

const person = new Greeting("Alice");
console.log(person.greet());

// Q4
// What is the output of this code?
interface Vehicle {
    speed: number;
}

class Car implements Vehicle {
    speed: number;
    constructor(speed: number) {
        this.speed = speed;
    }
    move() {
        console.log("Car is moving at " + this.speed + " km/h.");
    }
}

const myCar = new Car(60);
myCar.move();

// Q5
// What is the output of this code?
interface Message {
    text: string;
}

function printMessage(msg: Message) {
    console.log(msg.text);
}

const greeting: Message = {
    text: "Hello, TypeScript!"
};

printMessage(greeting);
