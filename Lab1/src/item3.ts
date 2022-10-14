class Square {
 constructor(public width: number) {}
}
class Rectangle extends Square {
    constructor(public width: number, public height: number) {
        super(width);
    }
}
type Shape = Square | Rectangle;
function calculateArea(shape: Shape) {
    if (shape instanceof Rectangle) {
    shape; // Type is Rectangle
    return shape.width * shape.height;
    } else {
    shape; // Type is Square
    return shape.width * shape.width; // OK
    }
}
let sh = new Rectangle(10,5);
console.log(calculateArea(sh));

//============================================================
//============================================================

function asNumber(val: number | string): number {
    return typeof(val) === 'string' ? Number(val) : val;
}

console.log(asNumber(10));
console.log(asNumber("80"));

//============================================================
//============================================================

function setLightSwitch(value: boolean) {
    switch (value) {
    case true:
    turnLightOn();
    break;
    case false:
    turnLightOff();
    break;
    default:
    console.log(`I'm afraid I can't do that.`);
    }
}
function turnLightOn(){
    console.log("Light is ON");
}
function turnLightOff(){
    console.log("Light is OFF");
}
interface LightApiResponse {
    lightSwitchValue: boolean;
}
async function setLight() {
    const response = await fetch('/light');
    const result: LightApiResponse = await response.json();
    setLightSwitch(result.lightSwitchValue);
}

//============================================================
//============================================================

function add3(a: number, b: number): number;
function add3(a: string, b: string): string;
function add3(a, b) {
 return a + b;
}
const three = add3(1, 2); // Type is number
const twelve = add3('1', '2'); // Type is string

console.log(three + ', ' + twelve);