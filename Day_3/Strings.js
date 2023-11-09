//Strings Example
const name1 = 'Peter';
const name2 = "Jack";
const result = `The names are ${name1} and ${name1}`;


//using the + operator
const message1 = 'This is a long message ' +'that spans across multiple lines' + 'in the code.';
console.log(`${message1}`);


//String Methods
const text1 = 'hello';
const text2 = 'world';
const text3 = '     JavaScript';

// concatenating two strings
const result1 = text1.concat(' ', text2);
console.log(result1);

// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2); 

// removing whitespace from the string
const result3 = text3.trim();
console.log(result3); 

// slicing
const result5= text1.slice(1, 3);
console.log(result5);


//Template Litrals

//Expression Interpolation

const name3 = 'Jack';
console.log(`Hello ${name3}`); 
const results1 = 4 + 5;
console.log(`The sum of 4 + 5 is ${result}`);
console.log(`${result < 10 ? 'Too low': 'Very high'}`);

// creating tagged template
function tagExample(strings) {
    return strings;
}
const results3 = tagExample`Hello Jack`;

console.log(results3);