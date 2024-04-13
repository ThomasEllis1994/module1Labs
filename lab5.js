function sayHello(first, last) {
    var fullName = first + " " + last;
    console.log("Hello " + fullName + ".");
    return fullName;
}
sayHello("Thomas", "Ellis");
console.log("Are you ready for some math?");

/*This function divides a by b*/
function division(a, b) {
    return a / b;
}
if (division(4, 2) != 2) {
    throw new Error("Test failed for division(4,2)");
}
if (division(4, -1) != -4) {
    throw new Error("Test failed for division(4,-1)");
}
if (division(0, 6) != 0) {
    throw new Error("Test failed for division(0,6)");
}
//Unit Tests for the division() function

/*This function multiplies a by b*/
function multiplication(a, b) {
    return a * b;
}
if (multiplication(3, 3) != 9) {
    throw new Error("Test failed for multiplication(3,3)");
}
if (multiplication(6, 0) != 0) {
    throw new Error("Test failed for multiplication(6,0)");
}
if (multiplication(7, -7) != -49) {
    throw new Error("Test failed for multiplication(7,-7)");
}
//unit tests for multplication()

/*This function adds a and b*/
function addition(a, b) {
    return a + b;
}
if (addition(10, -16) != -6) {
    throw new Error("Test failed for addition(10,-16)");
}
if (addition(30, 72) != 102) {
    throw new Error("Test failed for addition(30,72)");
}
if (addition(8, 90) != 98) {
    throw new Error("Test failed for addition(8,90)");
}
//unit tests for addition()

/*This function subtracts b from a*/
function subtraction(a, b) {
    return a - b;
}
if (subtraction(9, -100) != 109) {
    throw new Error("Test failed at subtraction(9,-109)");
}
if (subtraction(0, 22) != -22) {
    throw new Error("Test failed at subtraction(0,22)");
}
if (subtraction(99, 83) != 16) {
    throw new Error("Test failed at subtraction(99,83)");
}
console.log("4 divided by 2 is " + division(4, 2) + ".");
console.log("3 multiplied by 8 is " + multiplication(3, 8) + ".");
console.log("9 minus 4 is " + subtraction(9, 4) + ".");
console.log("10 plus 19 is " + addition(10, 19) + ".");
