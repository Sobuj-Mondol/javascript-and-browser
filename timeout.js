function something() {
    console.log('I am coding javascript')
}
console.log('first Hello');
console.log('second Hello');
// something();
setTimeout(something); // সেট টাইম আউট দিলে এটা ছিরিয়েল ভাবে আসবে এবং সময় বলে দিলে সেই সময় পর আসবে।
setTimeout(something, 5000); // সেট টাইম আউট দিলে এটা ছিরিয়েল ভাবে আসবে এবং সময় বলে দিলে সেই সময় পর আসবে।
setTimeout(function(){
    console.log('I am Sobuj Mondol')
})
setTimeout(function(){
    console.log('I am Sobuj Mondol') // সেট টাইম আউট দিলে এটা ছিরিয়েল ভাবে আসবে এবং সময় বলে দিলে সেই সময় পর আসবে।
},4000)
setTimeout(() => {
    console.log('Ami akhon coding sikhci')  // Arrow
}, 3000)
console.log('thied Hello');
console.log('fourth Hello');