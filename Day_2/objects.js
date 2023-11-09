//Declaration of object
const person = { 
    name: 'John', 
    age: 20, 
};
console.log(person.name);
console.log(person["name"])

//Nested object
const student = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}
console.log(student.marks); 
console.log(student.marks.science);


// using function as a value
const persons = {
    name: 'Sam',
    age: 30,
    greet: function() { console.log('hello') }
}
persons.greet();


//Adding a Method to a JavaScript Object
let students = { };
students.name = 'John';
students.greet = function() {
    console.log('hello');
}
students.greet();

// use of this keyword
const person2 = {
    name: 'John',
    age: 30,
    greet: function() {
        let surname = 'Doe';
        console.log('The name is' + ' ' + this.name + ' ' + surname); }
};
person2.greet();

//Create Multiple Objects with Constructor Function
function Person () {
    this.name = 'John',
    this.age = 23,

     this.greet = function () {
        console.log('hello');
    }
}
const p1 = new Person();
const p2 = new Person();
console.log(person1.name); 
console.log(person2.name);  