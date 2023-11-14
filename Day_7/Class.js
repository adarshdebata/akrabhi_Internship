class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

//constructor 
class Cars {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myCar = new Cars("Ford", 2014);
document.getElementById("demo").innerHTML =
    "My car is " + myCar.age() + " years old.";

class Car0 {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(x) {
        return x - this.year;
    }
}

const date = new Date();
let year = date.getFullYear();

const myCars = new Car0("Ford", 2014);
document.getElementById("demo").innerHTML =
    "My car is " + myCar.age(year) + " years old.";

