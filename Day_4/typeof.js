//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null 

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);