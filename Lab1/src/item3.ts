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
