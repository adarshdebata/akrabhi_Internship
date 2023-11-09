// program to find the factorial of a number
const number = parseInt(prompt('Enter a positive integer: '));
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}

//use of fo in loop in object(Salary)
const salaries= {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
}
for ( let i in salaries) {
    let salary = ("₹" + salaries[i]);
    console.log(`${i} : ${salary}`);
}

//use of for of loops
const students = ['John', 'Sara', 'Jack'];
for ( let element of students ) {
    console.log(element);
}