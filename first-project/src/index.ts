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
