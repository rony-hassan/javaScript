//function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.

function isEven(number) {
    return number % 2 ===0 ? true : false;
}

function isValidEmail(email){
    if(email.includes('@')){
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(1086));
console.log(isValidEmail("emal@gmail.com"));