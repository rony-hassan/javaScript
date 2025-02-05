// Lecture 44
// Shuffle an array using Fisher-Yates Algorithm

const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

shuffle(cards);

console.log(cards);

function shuffle(array){
    for(let i=array.length - 1; i>0;i--){
        const random = Math.floor(Math.random() * (i+1));

        [array[i],array[random]] = [array[random],array[i]];
    }
}

/*
    ES6 Module = An external file that contains reusable code that can be imported into other JavaScript files.
    Write reusable code for many different appa. Can contain varuables, classes, functions.. and more. Introduced as part of ECMAScript 2015 update.
*/

/* 
    synchronus = Executes line by line consecutively in a sequential manner. Code that waits for an operation to complete

    asynchronus = Allows multiple operations to be performed concurrently without wait.
    Doesn't block the execution flow and allows the program to continue.
    (I/O operations, network requests, fetching data). Handled with: callbacks, promises, Async/Await
*/

function func1(callback){
    setTimeout(() => {console.log("Task 1"); callback()}, 3000)
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);