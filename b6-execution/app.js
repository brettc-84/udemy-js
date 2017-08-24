function b() {
	console.log('Called b');
}

b();
// execution phase logs a
console.log(a);

// creation phase creates a and sets it to undefined
var a = 'hello world!';
// execution phase sets value of a
console.log(a);

