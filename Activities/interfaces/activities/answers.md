Answer 1:
An interface in TypeScript is a way to define a contract for the structure of objects or classes. It specifies the names and types of properties and methods that an object or class should have. Interfaces are used to enforce a consistent shape and behavior in various parts of your code, making it more predictable and maintainable.

Answer 2:

```
interface Rectangle {
width: number;
height: number;
}

const myRectangle: Rectangle = {
width: 10,
height: 20,
};
```

Answer 3:
Interface inheritance in TypeScript allows one interface to inherit properties and methods from another interface. It's useful for building on existing contracts. Here's an example:

```
interface Shape {
    area(): number;
}

interface Rectangle extends Shape {
    width: number;
    height: number;
}

const myRectangle: Rectangle = {
    width: 10,
    height: 20,
    area() {
        return this.width * this height;
    }
};
```

Answer 4:
Interfaces define the structure of objects and classes but do not implement functionality. They are primarily used for shape contracts and are ideal when you want to enforce a consistent structure across multiple classes or objects. Classes, on the other hand, can provide both structure and implementation. You use classes when you want to create objects with behavior in addition to their structure.
