console.log('Hello 1 ')
console.log('Hello 2 ')
// setInterval(() => {
//     console.log('Hello 4' );
// }, 1000)
let seconds = 0;
const timeId = setInterval (() => {
    seconds++;
    console.log(seconds);   // second++ and ++second করে দেখো কি হয়।
    if(seconds > 15){
        clearInterval(timeId);
    }
}, 1000)
console.log('Hello 3 ')