
var a = ["Apple", "Mango", "Banana", "Orange"];

// Shift Method
document.write("Original Array: " + a + "<br>");

a.shift();
document.write("After Shift: " + a + "<br>");

a.shift();
document.write("After Second Shift: " + a + "<br>");

document.write("<hr>");

// Unshift Method
var b = ["Apple", "Mango", "Banana"];

document.write("Original Array: " + b + "<br>");

b.unshift("Orange");
document.write("After Unshift: " + b + "<br>");

b.unshift("Grapes", "Papaya");
document.write("After Multiple Unshift: " + b + "<br>");
