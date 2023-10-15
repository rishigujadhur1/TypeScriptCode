//What is the output of this code?
// Q1
let value: any = 5;
let numberValue: number = value as number;
console.log(numberValue);

// Q2
let someValue: any = "123";
let strLength: number = (someValue as string).length;
console.log(strLength);

// Q3
let data: any = { name: "John", age: 30 };
let person: { name: string; age: number } = data as { name: string; age: number };
console.log(person.name);

// Q4
let value1: any = 7;
let squaredValue: number = <number>value * <number>value;
console.log(squaredValue);

// Q5
let data1: any = "Hello, TypeScript!";
let subString: string = (data as string).substring(0, 5);
console.log(subString);
