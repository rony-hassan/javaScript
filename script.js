// Statements 

const myText = document.getElementById("myText");
const myButton = document.getElementById("myButton");
const answer = document.getElementById("replyText");

let age;

myButton.onclick = function() {

    age = myText.value;
    age = Number(age);

    if(age > 100){
        answer.textContent = `You are TOO OLD to enter this site`;
    }

    else if(age == 0){
        answer.textContent = `You are new born...`;
    }

    else if(age < 0) {
        answer.textContent = `Invalid age entered. Please enter a positive number`;
    }

    else if(age >=18) {
        answer.textContent = `Welcome to the site, you are an adult`;
    }

    else{
        answer.textContent = `You must be 18+ to enter this site`;
    }
}