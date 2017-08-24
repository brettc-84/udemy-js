
// function b lexically sits on the global level (window)
// and as such it's outer reference is the global execution context
function b() {
    // myVar is not set here
    // when not found in this context, JS looks at the outer environment
    console.log(myVar); // 1
}

function a() {
    // lexical environment of function c is now inside function a
    // ie. not available at global level
    function c() {
        // a is the outer environment of c
        console.log(myVar); // 2
        // aVar does not exist in c, or a but exists at global level
        // JS looks up the scope chain up to global level
        console.log(aVar); // a
    }

    var myVar = 2;
    b();

    c();
}

// myVar on the global level (window)
var myVar = 1;
var aVar = 'a @ global';
a();
