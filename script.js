// How to accept user input

// 1. Easy way = window prompt
// 2. Professional way = HTML textbox

/* let username;

username = window.prompt("What's your username?");

console.log(username); 
*/

//HTML textbox

let username;

/* document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
}  1st Example */

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}!`;
}