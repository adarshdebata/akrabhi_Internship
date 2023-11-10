//map method

let arr = [42, 23, 31];
let a = arr.map((value)=>{
    console/log(value);
    return value +1;
});
console.log (a);

function triple(n){ 
	return n*3; 
}	 
arr = new Array(1, 2, 3, 6, 5, 4); 

var new_arr = arr.map(triple) 
console.log(new_arr); 

//reduce method

function product(a, b){ 
	return a * b; 
} 
arr = new Array(1, 2, 3, 6, 5, 4); 

var product_of_arr = arr.reduce(product) 
console.log(product_of_arr) 

//filter method
arr = new Array(1, 2, 3, 6, 5, 4); 
var new_arr = arr.filter(function (x){ 
	return x % 2==0; 
}); 

console.log(new_arr) 


