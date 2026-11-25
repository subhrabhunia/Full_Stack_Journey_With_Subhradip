
var a = ["Apple", "Mango", "Banana", "Orange"];

// Sort Method
document.write("Original Array: " + a + "<br>");
a.sort();
document.write("After Sort: " + a + "<br>");

document.write("<hr>");

// Reverse Method
var b = ["Apple", "Mango", "Banana", "Orange"];

document.write("Original Array: " + b + "<br>");
b.reverse();
document.write("After Reverse: " + b + "<br>");

document.write("<hr>");

// Numeric Sort
var c = [50, 10, 100, 5, 25];

document.write("Original Array: " + c + "<br>");
c.sort(function(x, y) {
    return x - y;
});
document.write("Ascending Order: " + c + "<br>");

c.sort(function(x, y) {
    return y - x;
});
document.write("Descending Order: " + c);
