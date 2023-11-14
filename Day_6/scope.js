//local scope       
myFunction();

function myFunction1() {
  let carName = "Volvo";
  console.log(carName);
}

console.log(carName);

//Global scope
let carName = "Volvo";
// code here can use carName

function myFunction2() {
// code here can also use carName
}

 // Function Scope
function myFunction3() {
    var carName = "Volvo";  
  }