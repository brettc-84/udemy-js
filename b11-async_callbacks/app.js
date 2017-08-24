// JS is single threaded a synchronous engine
// event queue
// events are processed one by one with own execution context

function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {}
    console.log('finished 3s function');
}

function clickHandler() {
    // only executed after main execution is done
    console.log('click event');
}

document.addEventListener('click',clickHandler);

waitThreeSeconds();
console.log('finished main execution');
