
var a = ["Apple", "Mango", "Banana", "Orange"];

// toString Method
var b = a.toString();
document.write("toString: " + b + "<br>");

// valueOf Method
var c = a.valueOf();
document.write("valueOf: " + c + "<br>");

// fill Method
var d = [10, 20, 30, 40, 50];
d.fill(100);
document.write("fill: " + d + "<br>");

// fill Specific Elements
var e = [10, 20, 30, 40, 50];
e.fill(100, 1, 4);
document.write("Specific Fill: " + e);
