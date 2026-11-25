
var a = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

// Slice Method
document.write("Original Array: " + a + "<br>");

var b = a.slice(1, 4);
document.write("After Slice: " + b + "<br>");
document.write("Original Array: " + a + "<br>");

document.write("<hr>");

// Splice Method - Remove Elements
var c = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

document.write("Original Array: " + c + "<br>");

c.splice(1, 2);
document.write("After Remove: " + c + "<br>");

document.write("<hr>");

// Splice Method - Add Elements
var d = ["Apple", "Banana", "Orange"];

document.write("Original Array: " + d + "<br>");

d.splice(1, 0, "Mango", "Grapes");
document.write("After Add: " + d + "<br>");

document.write("<hr>");

// Splice Method - Replace Elements
var e = ["Apple", "Mango", "Banana", "Orange"];

document.write("Original Array: " + e + "<br>");

e.splice(1, 2, "Grapes", "Papaya");
document.write("After Replace: " + e +"<br>");
document.write("<hr>");

//Splice Method- Delete Elements
var f= ["Apple", "Mango", "Banana", "Orange"];
document.write("Original Array: " + f + "<br>");
f.splice(2,2)
document.write("After Delete: " + f);
