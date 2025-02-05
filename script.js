/* 
    Lecture 46
    DOM Navigation = The process of navigating through the structure of an HTML document using javascript.

    .firstElementChild
    .lastElementChild
    .nextElementSibling
    .previousElementSibling
    .parentElement
    .children
*/

// -------------- .firstElementChild ---------------

const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";

console.log(firstChild)

// -------------- .lastElementChild ---------------

const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "orange";