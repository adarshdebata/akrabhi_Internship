//print Hello World
console.log("Hello World");

//sum of two numbers
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));
const sum = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is ${sum}`);

//Sqrt of numbers
const number = prompt('Enter the number: ');
const result = Math.sqrt(number);
console.log(`The square root of ${number} is ${result}`);

//Calculate the Area of a Triangle
//Area When All Sides are Known
const side1 = parseInt(prompt('Enter side1: '));
const side2 = parseInt(prompt('Enter side2: '));
const side3 = parseInt(prompt('Enter side3: '));
const s = (side1 + side2 + side3) / 2;
const areaValue = Math.sqrt(
  s * (s - side1) * (s - side2) * (s - side3)
);
console.log(
  `The area of the triangle is ${areaValue}`
);
//Area When Base and Height is Known
const baseValue = prompt('Enter the base of a triangle: ');
const heightValue = prompt('Enter the height of a triangle: ');
const areaValue2 = (baseValue * heightValue) / 2;
console.log(
  `The area of the triangle is ${areaValue2}`
);

//Swap Two Variables without temp
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');
[a, b] = [b, a];

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);