
// EX 2
console.log('EX2');
let evens = [0, 2, 4, 6, 8, 10];
odds = evens.map(v => v + 1);
console.log(odds);
pairs = evens.map(v => ({ even: v, odd: v + 1 }));
console.log(pairs);
nums = evens.map((v, i) => v + i);
console.log(nums);
// EX 3
// A
console.log('EX3\nA:');
function NumbersES5(numbs) {
    this.nums = numbs;
    this.fives = [];
    this.nums.forEach(function (v) {
        if (v % 5 === 0) {
            this.fives.push(v);
        }
    }, this);
}
var numbersES5 = new NumbersES5([1, 3, 5, 10, 14, 20, 33, 50]);
console.log(numbersES5.fives);

function NumbersES6(numbs) {
    this.nums = numbs;
    this.fives = [];
    this.nums
        .filter((v) => v % 5 === 0)
        .forEach((v) => this.fives.push(v));
}

var numbersES6 = new NumbersES6([1, 3, 5, 10, 14, 20, 33, 50]);
console.log(numbersES6.fives);
// B
console.log('B:');
console.log('ES5:');
var counterES5 = {
    count: 0,
    inc: function () {
        this.count++;
    }
}
var func = counterES5.inc; //Store "reference" to inc
func();
console.log(counterES5.count); //Still zero
counterES5.inc();
console.log(counterES5.count); //Now one

// ES6 DOESN'T ACCORDING TO MDDN
var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`;

console.log('EX5:\nA:');
function f(x, y, ...rest) {
    return `Sum: ${x + y}\n${rest.map((arg, index) => `rest value ${index + 1} is a: ${arg.constructor.name}`).join('\n')}`
};

console.log(f(5, 2, true, 2, "hello World", [1, 2, 3], new Date(), {}));

console.log('B:');
var rest = [true, 2, "hello World", [1, 2, 3], new Date(), {}];
var restParams = [...rest];
console.log(f(5, 2, ...restParams));

console.log('C:');

var chars = [...f(5, 2, ...restParams)];
//console.log(chars); // super long array 100ish items

console.log('EX6');
let fName = "Kurt";
let lName = "Wonnegut";
let age = 98

let ex6obj = { fName, lName, age };
console.log(ex6obj);

console.log('EX7:');
console.log('A:');
[lName, fName] = [fName, lName];
console.log(`First: ${fName}, Last: ${lName}`);
console.log('B:');
function getPerson() {
    return {
        firstName: "Kurt",
        lastName: "Wonnegut",
        gender: "Male",
        email: "kurt@wonnegut.dk",
        phone: "12345",
    }
}

var { lastName, phone } = getPerson();
console.log(`lastName: ${lastName}, phone: ${phone}`);

console.log('EX8');

//const myModuleFunction = require('./myModule.js');
//console.log(myModuleFunction(5, 2, ...restParams));
// WORKS but NodeJS doesn't understand ES6, and I don't wanna install a bunch of packages.

console.log('EX9');
class Shape {
    constructor(color) {
        this._color = color;
    }
    getArea() {
        return undefined;
    }
    getPerimeter() {
        return undefined;
    }
    getColor() {
        return this._color;
    }
    setColor(color) {
        this._color = color;
    }
    toString() {
        return `This Shape is ${this._color}`;
    }
}

console.log('A: Shape');
let s = new Shape('#222');
console.log(s.toString());
console.log(s.getArea());
console.log(s.getPerimeter());
console.log(s.getColor());
s.setColor('#fafafa');
console.log(s.getColor());
console.log(s.toString());

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this._radius = radius;
    }
    getArea() {
        return Math.pow(this._radius, 2) * Math.PI;
    }
    getPerimeter() {
        return 2 * Math.PI * this._radius;
    }
    getRadius() {
        return this._radius;
    }
    setRadius(radius) {
        this._radius = radius;
    }
    toString() {
        return `This circle is ${this._color} color & ${this._radius} radius`;
    }
}
let c = new Circle('#222', 5);
console.log('B: Circle');
console.log(c.toString());
console.log(c.getArea());
console.log(c.getPerimeter());
console.log(c.getColor());
c.setColor('#fafafa');
console.log(c.getColor());
console.log(c.getRadius());
c.setRadius(3);
console.log(c.getRadius());
console.log(c.getArea());
console.log(c.toString());


class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius);
        this._height = height;
    }
    getArea() {
        return super.getArea() * 2 * super.getPerimeter() * this._height ;
    }
    getVolume() {
        return super.getArea() * this._height;
    }
    getHeight() {
        return this._height;
    }
    setHeight(height) {
        this._height = height;
    }
    toString() {
        return `This cylinder is ${this._color} color & ${this._radius} radius & ${this._height} high`;
    }
}


let cyl = new Cylinder('#222', 5, 5);
console.log('C: Cylinder');
console.log(cyl.toString());
console.log(cyl.getArea());
console.log(cyl.getPerimeter());
console.log(cyl.getColor());
cyl.setColor('#fafafa');
console.log(cyl.getColor());
console.log(cyl.getRadius());
cyl.setRadius(3);
console.log(cyl.getRadius());
console.log(cyl.getArea());
console.log(cyl.getVolume());
console.log(cyl.getHeight());
cyl.setHeight(3);
console.log(cyl.getHeight());
console.log(cyl.getArea());
console.log(cyl.toString());

class Cylinder2 extends Circle {
    constructor(color, radius, height) {
        super(color, radius);
        this._height = height;
    }
    get getArea() {
        return super.getArea() * 2 * super.getPerimeter() * this._height ;
    }
    get getVolume() {
        return super.getArea() * this._height;
    }
    get getHeight() {
        return this._height;
    }
    set setHeight(height) {
        this._height = height;
    }
    toString() {
        return `This cylinder is ${this._color} color & ${this._radius} radius & ${this._height} high`;
    }
}

let cyl2 = new Cylinder2('#222', 5, 5);
console.log('D: Cylinder2');
console.log(cyl2.toString());
console.log(cyl2.getArea);
console.log(cyl2.getPerimeter());
console.log(cyl2.getColor());
cyl2.setColor('#fafafa');
console.log(cyl2.getColor());
console.log(cyl2.getRadius());
cyl2.setRadius(3);
console.log(cyl2.getRadius());
console.log(cyl2.getArea);
console.log(cyl2.getVolume);
console.log(cyl2.getHeight);
cyl2.setHeight = 3;
console.log(cyl2.getHeight);
console.log(cyl2.getArea);
console.log(cyl2.toString());
