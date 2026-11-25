
var a = ["Apple", "Mango", "Banana"];
var b = ["Orange", "Grapes", "Papaya"];

// Concat Method
document.write("Array A: " + a + "<br>");
document.write("Array B: " + b + "<br>");

var c = a.concat(b);

document.write("After Concat: " + c + "<br>");

document.write("<hr>");

// Concat Multiple Arrays
var x = ["Apple", "Mango"];
var y = ["Banana", "Orange"];
var z = ["Grapes", "Papaya"];

var d = x.concat(y, z);

document.write("Multiple Concat: " + d + "<br>");

document.write("<hr>");

// Join Method
var fruits = ["Apple", "Mango", "Banana", "Orange"];

document.write("Comma: " + fruits.join(",") + "<br>");
document.write("Space: " + fruits.join(" ") + "<br>");
document.write("Hyphen: " + fruits.join(" - ") + "<br>");
document.write("Slash: " + fruits.join("/") + "<br>");
document.write("Break:" + fruits.join("<br>")+"<br>");
document.write("Without Separator: " + fruits.join(""));
