/* Lecture 40
    class = (ES6 feature) provideds a more structured and cleaner
        way to work with objects compared to traditional constructor function
        ex. static keyword, encapsulation, inheritance

    static = keyword that defines properties or methods that belong
            to a class itself rather than the objects created from that class
            (class owns anything static, not the objects)
*/

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt",19.99);
const product2 = new Product("Pants",22.50);
const product3 = new Product("Underwear",100.00);

product2.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`Total price(with Tax): $${total.toFixed(2)}`);

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return radius * 2 * this.PI;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));