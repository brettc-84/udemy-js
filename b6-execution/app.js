function b() {
	console.log('Called b');
    var d = 'bd';
}

b();
// execution phase logs a
console.log(a);

// creation phase creates a and sets it to undefined
var a = 'hello world!';
// execution phase sets value of a
console.log(a);

// execution context per function call pushed onto stack
// popped off stack when function returns
function aa() {
    b();
    var c = 'c1';
    console.log(c);
}

aa();
var c = 'c2';
console.log(c);
