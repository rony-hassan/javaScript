/* Lecture 37
object = A collection of related properties and/ or methods
        Can represent real world objects (people, products, places)
        Object = {key:value, function()}

this = reference to the object where THIS is used 
        (the object depends on the immediate context)
        person.name = this.name

constructor = special method for defining the properties and methods
                of objects
*/

const person = {
    firstName: "Rony",
    lastName : "Hassan",
    age: 22,
    isEmployed: true,
    sayHello: function() {
        console.log(`Hi! I am ${this.firstName} ${this.lastName} and my age is ${this.age}`);
    }
}

person.sayHello();
console.log(this);

function Car(make,model,year,color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet","Camaro",2025,"blue");

console.log(`Car 1 maker: ${car1.make}`);
console.log(`Car 1 model: ${car1.model}`);
console.log(`Car 1 year: ${car1.year}`);
console.log(`Car 1 color: ${car1.color}`);

console.log(`Car 2 maker: ${car2.make}`);
console.log(`Car 2 model: ${car2.model}`);
console.log(`Car 2 year: ${car2.year}`);
console.log(`Car 2 color: ${car2.color}`);