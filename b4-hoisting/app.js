// Hoisting
// Setup memory space for variables and functions
// recognises variables and functions declared
// functions are placed in memory entirely
// variables are placed without assignment (undefined placeholder)

b(); // executes
console.log("Before assignment:" + a); // undefined

var a = 'hello world!'; // a is not defined if this is removed

function b() {
	console.log('Called b');
}

console.log("After assignment:" + a); // hello world!

var c;

if (c === undefined) {
	console.log('c is undefined');
} else {
	console.log('c is defined');
}