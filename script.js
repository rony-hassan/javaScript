// String Slicing
//               string.slice(start, end);

const fullName = "Rony Hassan";

//let firstName = fullName.slice(0, 2);
//let lastName = fullName.slice(-1);

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ")+1);

console.log(firstName);
console.log(lastName);

const email = "rony@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(username);
console.log(extension);