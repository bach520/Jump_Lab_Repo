const x: any /*never*/ = 12;
// ~ Type '12' is not assignable to type 'never'

type A = 'A';
type B = 'B';
type Twelve = 12;

// union type
type AB = 'A' | 'B';
type AB12 = 'A' | 'B' | 12;

const a: AB = 'A'; // OK, value 'A' is a member of the set {'A', 'B'}
const c: AB = 'B' /*'C'*/;
// ~ Type '"C"' is not assignable to type 'AB'

// OK, {"A", "B"} is a subset of {"A", "B"}:
const ab: AB = Math.random() < 0.5 ? 'A' : 'B';
const ab12: AB12 = ab; // OK, {"A", "B"} is a subset of {"A", "B", 12}

declare let twelve: AB12;
//const back: AB = twelve;

interface Identified {
    id: string;
}
// interface Person {
//     name: string;
// }
   interface Lifespan {
    birth: Date;
    death?: Date;
}
//    type PersonSpan = Person & Lifespan;
//    const ps: PersonSpan = {
//     name: 'Alan Turing',
//     birth: new Date('1912/06/23'),
//     death: new Date('1954/06/07'),
// };
interface Person {
    name: string;
}
interface PersonSpan extends Person {
    birth: Date;
    death?: Date;
}
   
type K = keyof (Person | Lifespan);

interface Point {
    x: number;
    y: number;
}
type PointKeys = keyof Point; // Type is "x" | "y"
// function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
//     // ...
// }
// const pts: Point[] = [{x: 1, y: 1}, {x: 2, y: 0}];
// sortBy(pts, 'x'); // OK, 'x' extends 'x'|'y' (aka keyof T)
// sortBy(pts, 'y'); // OK, 'y' extends 'x'|'y'
// sortBy(pts, Math.random() < 0.5 ? 'x' : 'y'); // OK, 'x'|'y' extends 'x'|'y'
//    //sortBy(pts, 'z');
//     // ~~~ Type '"z"' is not assignable to parameter of type '"x" | "y"

const triple: [number, number, number] = [1, 2, 3];
//const double: [number, number] = triple;

type T = Exclude<string|Date, string|number>; // Type is Date
type NonZeroNums = Exclude<number, 0>; // Type is still just number

interface Cylinder {
    radius: number;
    height: number;
}
const Cylinder = (radius: number, height: number) => ({radius, height});
console.log(Cylinder(10, 5));