Question 1: Type Annotations

Type annotations in TypeScript are used to specify the data type of variables, function parameters, and return values. You can declare the data type using a colon followed by the type. For example:

```
let name: string = "John";
function add(x: number, y: number): number {
    return x + y;
}```
Question 2: Interfaces

Interfaces in TypeScript define the structure of objects or classes. They specify the names and types of properties and methods an object or class should have. For example:

```
interface Person {
    name: string;
    age: number;
}```
Question 3: Classes

Classes in TypeScript are used for object-oriented programming. They can have properties and methods. Here's a simple example:

```
class Animal {
    constructor(public name: string) {}
    makeSound() {
        console.log("Generic animal sound");
    }
}```
Question 4: Generics

Generics in TypeScript allow you to write reusable, type-safe functions and classes by defining placeholder types. For example:

```
function identity<T>(arg: T): T {
    return arg;
}```
Question 5: Enums

Enums in TypeScript provide a way to define a set of named numeric constants. Here's an example for days of the week:

```
enum DaysOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}```
Question 6: Type Inference

Type inference in TypeScript allows the compiler to automatically determine the type of a variable or expression based on its value and usage context. For example:

```
let message = "Hello, TypeScript!"; // TypeScript infers the type as string.```
Question 7: Union and Intersection Types

Union types (|) allow a value to be one of several types, while intersection types (&) combine multiple types. For example:
```
let result: number | string;
type Point = { x: number } & { y: number };```
Question 8: Type Assertion

Type assertion in TypeScript allows you to override the compiler's type inference when you know the type better. For example:
```
let strLength: number = (someValue as string).length;```
Question 9: Modules and Namespaces

Modules in TypeScript help organize code, while namespaces (deprecated in favor of ES6 modules) prevent naming conflicts. For example:
```
// Importing a module
import { MyModule } from './my-module';

// Namespace
namespace MyNamespace {
    export function myFunction() {
        // ...
    }
}```
Question 10: TypeScript Compiler (tsc)

The TypeScript compiler (tsc) transpiles TypeScript files into JavaScript. You can configure it using a tsconfig.json file to control the compilation process, including target versions, output directories, and other settings.