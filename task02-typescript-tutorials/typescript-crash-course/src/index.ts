// Basic Types

let id: number = 5;
let company: string = "Traverly";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, "Hello", true];

//tuple

let person: [number, string, boolean] = [1, "hello", true];

//tuple array

let employee: [number, string][] = [
  [1, "Ali"],
  [2, "Ahmed"],
  [3, "Hasan"],
];

// unions

let pid: string | number = "22";

//Enums

enum Direction {
  Up = 5,
  Down,
  Left,
  Right,
}

enum StringDirection {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction.Down);
console.log(StringDirection.Left);

//objects
// const user: {
//   id: number;
//   name: string;
// } = {
//   id: 1,
//   name: "Ali",
// };

// Better way to do this
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Ali",
};

// Type Assertion
let cid: any = 1;

// let customerId = <number>cid

let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

// void

function log(message: string | number): void {
  console.log(message);
}

// interfaces

interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "Ali",
};

//can't user interface with unions and parametives

// interfaces with functions

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// classes

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name} is registered`;
  }
}

const person1 = new Person(1, "Ali");
// console.log(person1);
console.log(person1.register());
const person2 = new Person(2, "Mike");
console.log(person2);
// id = "5"
// console.log(id)

// Sub class or extending a class

class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Shawn", "Developer");

// Generics

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3]);
let strArray = getArray<string>(["hello", "world"]);
strArray.push("hello");
