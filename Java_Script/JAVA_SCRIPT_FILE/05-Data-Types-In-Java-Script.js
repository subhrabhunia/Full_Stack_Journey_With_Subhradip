
// DATA TYPES IN JAVASCRIPT:-


// 1. STRING:-

let name = "Subhradip";


// 2. NUMBER:-

let age = 20;
let price = 99.50;


// 3. BOOLEAN:-

let isStudent = true;


// 4. UNDEFINED:-

let x;


// 5. NULL:-

let y = null;


// 6. BIGINT:-

let bigNumber = 12345678901234567890n;


// 7. SYMBOL:-

let symbol = Symbol("JavaScript");


// 8. OBJECT:-

let student = {
    firstName: "Subhradip",
    lastName: "Bhunia",
    age: 20
};


// 9. ARRAY:-

let fruits = ["Apple", "Mango", "Banana"];


// DISPLAY DATA TYPES:-

document.write("<h2>STRING</h2>");
document.write(name + "<br>");

document.write("<h2>NUMBER</h2>");
document.write(age + "<br>");
document.write(price + "<br>");

document.write("<h2>BOOLEAN</h2>");
document.write(isStudent + "<br>");

document.write("<h2>UNDEFINED</h2>");
document.write(x + "<br>");

document.write("<h2>NULL</h2>");
document.write(y + "<br>");

document.write("<h2>BIGINT</h2>");
document.write(bigNumber + "<br>");

document.write("<h2>SYMBOL</h2>");
document.write(symbol.toString() + "<br>");

document.write("<h2>OBJECT</h2>");
document.write(student.firstName + "<br>");
document.write(student.lastName + "<br>");
document.write(student.age + "<br>");

document.write("<h2>ARRAY</h2>");
document.write(fruits + "<br>");


// TYPEOF OPERATOR:-

document.write("<h2>TYPEOF OPERATOR</h2>");

document.write(typeof name + "<br>");
document.write(typeof age + "<br>");
document.write(typeof price + "<br>");
document.write(typeof isStudent + "<br>");
document.write(typeof x + "<br>");
document.write(typeof y + "<br>");
document.write(typeof bigNumber + "<br>");
document.write(typeof symbol + "<br>");
document.write(typeof student + "<br>");
document.write(typeof fruits + "<br>");


// Data Type	Example
// String	  "Subhradip"
// Number	  20, 99.50
// Boolean	  true, false
// Undefined 	let x;
// Null	  let y = null;
// BigInt	   123456789n
// Symbol	 Symbol("JavaScript")
// Object	  {firstName: "Subhradip"}