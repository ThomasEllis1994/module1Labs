function sayHello(first, last) {
    var fullName = first + " " + last;
    console.log("Hello " + fullName + ".");
    return fullName;
}
sayHello("Thomas", "Ellis");
console.log("Are you ready for some math?");

function division(a, b) {
    return a / b;
}

function multiplication(a, b) {
    return a * b;
}

function addition(a, b) {
    return a + b;
}
function subtraction(a, b) {
    return a - b;
}

console.log("4 divided by 2 is " + division(4, 2) + ".");
console.log("3 multiplied by 8 is " + multiplication(3, 8) + ".");
console.log("9 minus 4 is " + subtraction(9, 4) + ".");
console.log("10 plus 19 is " + addition(10, 19) + ".");
