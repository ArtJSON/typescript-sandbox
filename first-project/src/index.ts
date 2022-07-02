// basic types
let id: number = 5;
let company: string = "Company";
let isPublished: boolean = true;
let x: any = "Yellow";

// Tuple
let person: [number, string, boolean] = [3, "James", false];

// arrays
let ids: number[] = [1, 31, 41];
let xs: any[] = [1, true, "dadsa"];
let employees: [number, string][] = [
  [1, "James"],
  [2, "Janice"],
  [3, "Jaleeel"],
];

// union - variable can be one of specified types
let prodid: string | number | boolean;
prodid = "22";
prodid = 22;
prodid = true;

// enums
enum en1 {
  Up, // 0
  Down, // 1
  Left,
  Right,
}

enum en2 {
  Up = 1,
  Down, // 2
  Left, // 3
  Right, // 4
}

enum en3 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// Object
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 3,
  name: "John",
};

// Type assertion
let cid: any = 1;
let customerid1 = <number>cid;
let customerid2 = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}
