// declaring a function
function greets() {
    console.log("Hello there!");
}
greets();

//Parameter function
function greet(name) {
    console.log("Hello " + name + ":)");
}
let name1 = prompt("Enter a name: ");
greet(name1);

// program to add two numbers
function add(a, b) {
    return a + b;
}
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));
let result = add(number1,number2);
console.log("The sum is " + result);


// constructor function with this 
function Person (person_name, person_age, person_gender) {
     this.name = person_name,
     this.age = person_age,
     this.gender = person_gender,
 
     this.greet = function () {
         return ('Hi' + ' ' + this.name);
     }
 }
 const person1 = new Person('John', 23, 'male');
 const person2 = new Person('Sam', 25, 'female');
 console.log(person1.name);
 console.log(person2.name); 