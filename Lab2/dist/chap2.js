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
const p = { first: 'Jane', last: 'Jacobs' };
const v1 = typeof p; // value is object
class Cylinder1 {
    constructor() {
        this.radius = 1;
        this.height = 1;
    }
}
const v = typeof Cylinder1; // Value is "function"
;
const alice = { name: 'Alice' }; // Type is Person
//const bob = { name: 'Bob' } as Person9;
//const alice: Person = {};
// ~~~~~ Property 'name' is missing in type '{}'
// but required in type 'Person'
const bob = {};
const people = ['alice', 'bob', 'jan'].map(name => {
    const person = { name };
    return person;
});
const people2 = ['alice', 'bob', 'jan'].map((name) => ({ name }));
//const body = document.body;
//const body = document.body as unknown;
//const el = body as Person;
//const el1 = document.body as unknown as Person; // OK
console.log('primitive'.charAt(3));
const surfaceArea = (r, h) => 2 * Math.PI * r * (r + h);
const volume = (r, h) => Math.PI * r * r * h;
for (const [r, h] of [[1, 1], [1, 2], [2, 1]]) {
    console.log(`Cylinder ${r} x ${h}`, `Surface area: ${surfaceArea(r, h)}`, `Volume: ${volume(r, h)}`);
}
const falconHeavy = {
    name: 'Falcon Heavy',
    variant: 'v1',
    thrust_kN: 15200
};
