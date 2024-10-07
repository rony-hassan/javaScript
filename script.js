/* Lecture 42
    destructuring = extract values from arrays and objects, then
                    assign them to variables in a convenient way
                    [] = to perform array destructuring
                    {} = to perfrom object destructuring
 */

//-----Example 1 -------
// SWAP the value of two variables

let a = 1;
let b = 2;

[a,b] = [b,a];

console.log(a);
console.log(b);

//-----Example 2 -------
// SWAP 2 elements in an array

const colors = ["red","green","blue","black","white"];

[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);

//-----Example 3 -------
// Assign array elements to variables

const color = ["red","green","blue","black","white"];
const [firstcolor, secondcolor, thirdcolor] = color;
console.log(firstcolor);
console.log(thirdcolor);

//-----Example 4 -------
// Extract values from objects

const person1 = {
    firstName : "Bob",
    lastName : "Square",
    age : 30,
    job : "Cook"
}

const {firstName,lastName,age,job} = person1;

console.log(firstName);