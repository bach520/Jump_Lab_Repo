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

interface Vector1D { x: number; }
interface Vector2D extends Vector1D { y: number; }
interface Vector3D extends Vector2D { z: number; }

// = is value declaration, : is type declaration
interface Person1 { // TYPE
    first: string;
    last: string;
}
const p: Person1 = { first: 'Jane', last: 'Jacobs' };
// ------Type----||--------------Value---------------
type T1 = typeof p; // type is Person1
const v1 = typeof p; // value is object

class Cylinder1 {
    radius=1;
    height=1;
}
const v = typeof Cylinder1; // Value is "function"

type T2 = typeof Cylinder1; // Type is typeof Cylinder
declare let fn: T2;
//const c1 = new fn();

type C = InstanceType<typeof Cylinder1>;

// Item 9
interface Person9 { name: string };
const alice: Person9 = { name: 'Alice' }; // Type is Person
//const bob = { name: 'Bob' } as Person9;

//const alice: Person = {};
 // ~~~~~ Property 'name' is missing in type '{}'
 // but required in type 'Person'

const bob = {} as Person;

const people = ['alice', 'bob', 'jan'].map(name => {
    const person: Person = {name};
    return person
});
const people2 = ['alice', 'bob', 'jan'].map(
    (name): Person => ({name})
);

interface Person { name: string; }
//const body = document.body;
//const body = document.body as unknown;
//const el = body as Person;

//const el1 = document.body as unknown as Person; // OK

console.log('primitive'.charAt(3));

const surfaceArea = (r: number, h: number) => 2 * Math.PI * r * (r + h);
const volume = (r: number, h: number) => Math.PI * r * r * h;
for (const [r, h] of [[1, 1], [1, 2], [2, 1]]) {
 console.log(
 `Cylinder ${r} x ${h}`,
 `Surface area: ${surfaceArea(r, h)}`,
 `Volume: ${volume(r, h)}`);
}

interface Rocket {
    name: string;
    variant: string;
    thrust_kN: number;
}
const falconHeavy: Rocket = {
    name: 'Falcon Heavy',
    variant: 'v1',
    thrust_kN: 15_200
};

interface State {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
    pageContents: string;
}
// type TopNavState = {
//     userId: State['userId'];
//     pageTitle: State['pageTitle'];
//     recentFiles: State['recentFiles'];
// };
type TopNavState = {
    [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k]
};
   