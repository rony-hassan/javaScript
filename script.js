// const = a variable that can't be changed

/*const pi = 3.1416; // If i had used let i can changed the value later but in case of 'const' we can not do that. It's for the safety.
let radius;
let circumference;

radius = window.prompt("Enter the radius of circle");
radius = Number(radius);

circumference = 2 * pi * radius;

console.log(circumference);*/

const PI = 3.1416;
let radius;
let circumference;

document.getElementById("myButton").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);

    circumference = 2 * PI * radius;

    document.getElementById("myH1").textContent = `The Circumference is: ${circumference}`;
}