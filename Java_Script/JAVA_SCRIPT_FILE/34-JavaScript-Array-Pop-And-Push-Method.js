
var a = ["Apple", "Mango", "Banana"];

// Push Method
document.write("Original Array: " + a + "<br>");

a.push("Orange");
document.write("After Push: " + a + "<br>");

a.push("Grapes", "Papaya");
document.write("After Multiple Push: " + a + "<br>");

document.write("<hr>");

// Pop Method
var b = ["Apple", "Mango", "Banana", "Orange"];

document.write("Original Array: " + b + "<br>");

b.pop();
document.write("After Pop: " + b + "<br>");

b.pop();
document.write("After Second Pop: " + b + "<br>");
