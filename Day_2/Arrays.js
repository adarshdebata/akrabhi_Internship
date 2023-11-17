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