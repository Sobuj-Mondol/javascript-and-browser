console.log('Hello fetch 1 ')
console.log('Hello fetch 2 ')
// setTimeout(() => console.log('11111111111'), 5000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log('Hello fetch 3 ')
console.log('Hello fetch 4 ')
console.log('Hello fetch 5 ')
for(let i = 0; i < 10000; i++){
    console.log(i);
}