interface Vector2D {
    x: number;
    y: number;
}
function calculateLength(v: Vector2D) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}
interface NamedVector {
    name: string;
    x: number;
    y: number;
}

const v: NamedVector = { x: 3, y: 4, name: 'Zee' };
console.log(calculateLength(v));

interface Vector3D {
    x: number;
    y: number;
    z: number;
}
function normalize(v: Vector3D) {
    const length = calculateLength(v);
    return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
    };
}
console.log(normalize({x: 3, y: 4, z: 5}));

// function calculateLengthL1(v: Vector3D) {
//     let length = 0;
//     for (const axis of Object.keys(v)) {
//         const coord = v[axis];
//         // ~~~~~~~ Element implicitly has an 'any' type because ...
//         // 'string' can't be used to index type 'Vector3D'
//         length += Math.abs(coord);
//     }
//     return length;
// }
function calculateLengthL1(v: Vector3D) {
    return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}

const vec3D = {x: 3, y: 4, z: 1, address: '123 Broadway'};

console.log(calculateLengthL1(vec3D));

class C {
    foo: string;
    constructor(foo: string) {
    this.foo = foo;
    }
}
const c = new C('instance of C');
const d: C = { foo: 'object literal' };
console.log("c: " + c.foo);
console.log("d: " + d.foo);
