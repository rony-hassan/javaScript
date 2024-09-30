// callback = a function that is passed as an argument to another function

/*hello(goodbye);

function hello(callback){
    console.log("Hello");
    callback();
}

function goodbye(){
    console.log("Goodbye");
}*/

sum(display,14,2);

function sum(callback,x,y){
    let result = x + y ;
    callback(result);
}

function display(result){
    console.log(result);
}