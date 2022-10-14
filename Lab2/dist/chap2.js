"use strict";
const x /*never*/ = 12;
const a = 'A'; // OK, value 'A' is a member of the set {'A', 'B'}
const c = 'B' /*'C'*/;
// ~ Type '"C"' is not assignable to type 'AB'
// OK, {"A", "B"} is a subset of {"A", "B"}:
const ab = Math.random() < 0.5 ? 'A' : 'B';
const ab12 = ab; // OK, {"A", "B"} is a subset of {"A", "B", 12}
// function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
//     // ...
// }
// const pts: Point[] = [{x: 1, y: 1}, {x: 2, y: 0}];
// sortBy(pts, 'x'); // OK, 'x' extends 'x'|'y' (aka keyof T)
// sortBy(pts, 'y'); // OK, 'y' extends 'x'|'y'
// sortBy(pts, Math.random() < 0.5 ? 'x' : 'y'); // OK, 'x'|'y' extends 'x'|'y'
//    //sortBy(pts, 'z');
//     // ~~~ Type '"z"' is not assignable to parameter of type '"x" | "y"
const triple = [1, 2, 3];
const Cylinder = (radius, height) => ({ radius, height });
console.log(Cylinder(10, 5));
