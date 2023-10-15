//What is the output of this code?
// Q1
const message: string = "Hello, TypeScript!";
console.log(message);

// Q2

// What is the output of this code?
function add(x: number, y: number): number {
    return x + y;
}

const result: number = add(3, 5);
console.log(result);

// Q3
// What is the output of this code?
const names: string[] = ["Alice", "Bob", "Charlie"];
console.log(names.join(", "));

// Q4
// What is the output of this code?
function greet(name: string): string {
    return `Hello, ${name}!`;
}

const greeting: string = greet("Emily");
console.log(greeting);

//Q5
// What is the output of this code?
const numbers: number[] = [1, 2, 3, 4, 5];
const total: number = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(total);
