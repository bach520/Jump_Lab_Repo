"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Square {
    constructor(width) {
        this.width = width;
    }
}
class Rectangle extends Square {
    constructor(width, height) {
        super(width);
        this.width = width;
        this.height = height;
    }
}
function calculateArea(shape) {
    if (shape instanceof Rectangle) {
        shape; // Type is Rectangle
        return shape.width * shape.height;
    }
    else {
        shape; // Type is Square
        return shape.width * shape.width; // OK
    }
}
let sh = new Rectangle(10, 5);
console.log(calculateArea(sh));
//============================================================
//============================================================
function asNumber(val) {
    return typeof (val) === 'string' ? Number(val) : val;
}
console.log(asNumber(10));
console.log(asNumber("80"));
//============================================================
//============================================================
function setLightSwitch(value) {
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
function turnLightOn() {
    console.log("Light is ON");
}
function turnLightOff() {
    console.log("Light is OFF");
}
function setLight() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('/light');
        const result = yield response.json();
        setLightSwitch(result.lightSwitchValue);
    });
}
function add3(a, b) {
    return a + b;
}
const three = add3(1, 2); // Type is number
const twelve = add3('1', '2'); // Type is string
console.log(three + ', ' + twelve);
