const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()


// add an element at the end
let dailyActivity = ['eat', 'sleep'];
dailyActivity.push('repeat');
console.log(dailyActivity);
console.log(dailyActivity.length); 

// remove the last element
let dailyActivity2 = ['work', 'eat', 'sleep', 'exercise'];
dailyActivity2.pop();
console.log(dailyActivity2); 
const removedElement = dailyActivity2.pop();
console.log(removedElement);
console.log(dailyActivity2);

//Various Methods of Array
let dailyActivities = ['sleep', 'work', 'exercise']
let newRoutine = ['eat'];

// sorting elements in the alphabetical order
dailyActivities.sort();
console.log(dailyActivities); 

//finding the index position of string
const position = dailyActivities.indexOf('work');
console.log(position); 

// slicing the array elements
const newDailyActivities = dailyActivities.slice(1);
console.log(newDailyActivities); 

// concatenating two arrays
const routine = dailyActivities.concat(newRoutine);
console.log(routine); 