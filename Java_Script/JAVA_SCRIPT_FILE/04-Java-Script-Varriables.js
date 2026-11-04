
// VAR:-

var x = "Subhradip";
var z = 10;

var first, second;

// We can declare multiple variables in a single statement by separating them with commas.

first = "Subhradip";
second = 10;

// We can overwrite the value of variable x and z by assigning new values to them.

// x = "New Value";
// z = 20;

document.write("<h2>VAR</h2>");

document.write(x + "<br>");
document.write(z + "<br>");
document.write(first + "<br>");
document.write(second + "<br>");


// LET:-

let a = "Subhradip";
let b = 20;

let third, fourth;

third = "Subhradip";
fourth = 20;

document.write("<h2>LET</h2>");

document.write(a + "<br>");
document.write(b + "<br>");
document.write(third + "<br>");
document.write(fourth + "<br>");


// Difference Between VAR And LET:-

// 1. var can be redeclared in the same scope.
// 2. let cannot be redeclared in the same scope.
// 3. var is function-scoped.
// 4. let is block-scoped.
// 5. Both var and let can be reassigned.


// VAR Example:-

var name = "Subhradip";
var name = "Bhunia";

document.write("<br>" + name + "<br>");


// LET Example:-

let age = 20;

// age = 21;  // We can change the value.

// let age = 22;  // Wrong: Cannot redeclare let variable.

document.write(age + "<br>");


// CONST Example:-

const constName = "Subhradip";
const constAge = 20;

const constFirst = "Subhradip";
const constSecond = 10;


// We cannot redeclare a const variable.

// const constName = "Bhunia";  // Error


// We cannot reassign a const variable.

// constName = "New Value";  // Error
// constAge = 25;            // Error


// CONST variables must be assigned a value when declared.

// const value;  // Error


// We can declare multiple const variables.

const p = 10, q = 20, r = 30;


// Display CONST variables:-

document.write("<h2>CONST</h2>");

document.write(constName + "<br>");
document.write(constAge + "<br>");
document.write(constFirst + "<br>");
document.write(constSecond + "<br>");

document.write(p + "<br>");
document.write(q + "<br>");
document.write(r + "<br>");


// HOW TO WRITE A VARIABLE NAME:-

// Correct Way:-

// firstname
// first_name
// firstName
// firstName99
// _firstname
// $firstname


// Wrong Way:-

// first name
// 99firstname
// first-name


// Variable names are case-sensitive.

// Example:-

let student = "Subhradip";
let Student = "Bhunia";

document.write("<br>" + student + "<br>");
document.write(Student);
