
// function b sits on the global level (window)
// and as such it's outer reference is the global execution context
function b() {
    // myVar is not set here
    // when not found in this context, JS looks at the outer environment
    console.log(myVar); // 1
}

function a() {
    var myVar = 2;
    b();
}

// myVar on the global execution context
var myVar = 1;
a();
