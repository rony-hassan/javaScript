//variable scope = where a variable is recognized
//                 and accessible (local vs global)

// Global scope: declared outside of any function
// If there is same variable name inside and outside of a function then
//    we will use the local scope first.

let x = 3


function function1() {
    ++x;
    console.log(x);
}

function function2() {
    console.log(x);
}
function1();
function2();
//In this case, both have same answer which is 4 