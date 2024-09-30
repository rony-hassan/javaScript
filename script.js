/* Lecture 34
.reduce() = reduce the elements of an array to a single value
*/

const prices = [5,30,10,25,15,20];
const total = prices.reduce(sum);
const grades = [75,50,85,90,65];
const maximum = grades.reduce(getMax);

console.log(`$${total}`);
console.log(maximum);

function sum(prev,next){
    return prev + next;
}
function getMax(accumulator,element){
    return Math.max(accumulator,element);
}