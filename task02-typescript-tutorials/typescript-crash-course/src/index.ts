// Basic Types

let id: number = 5;
let company: string = "Traverly"
let isPublished: boolean = true;
let x: any = "Hello"

let ids: number [] = [1, 2, 3, 4, 5]
let arr: any[] = [1, "Hello", true]

//tuple

let person: [number, string, boolean] = [1, "hello", true]

//tuple array

let employee: [number, string][] =[ [1, "Ali"], [2, "Ahmed"], [3, "Hasan"]]


// unions

let pid: string | number = "22"

//Enums

enum Direction {
    Up = 5,
    Down,
    Left,
    Right
}

console.log(Direction.Down)


// id = "5"
// console.log(id)