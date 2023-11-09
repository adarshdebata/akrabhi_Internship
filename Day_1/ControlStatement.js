// check for the positive number
const num = prompt("Enter a number: ");
if (num > 0) {
  console.log("The number is positive");
}

// check if the number if positive, negative or zero
const number = prompt("Enter a number: ");
if (number > 0) {
    console.log("The number is positive");
}
else if (number == 0) {
  console.log("The number is 0");
}
else {
    console.log("The number is negative");
}

// program to check leap year
function checkLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}
const year = prompt('Enter a year:');
checkLeapYear(year);