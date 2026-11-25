
var fruits = ["Apple", "Mango", "Banana", "Orange"];

document.write(fruits);
document.write("<br>");

document.write(fruits[0] + "<br>");
document.write(fruits[1] + "<br>");
document.write(fruits[2] + "<br>");
document.write(fruits[3] + "<br>");

document.write("<hr>");

// Another way to print all the elements of an array using for loop
document.write("<ul>");
for (var i = 0; i < fruits.length; i++) {
    document.write("<li>" + fruits[i] + "</li>");
}
document.write("</ul>");

document.write("<hr>");

// Arrays New Method
var a = new Array();
a[0] = 1;
a[1] = "Subhradip";
a[2] = true;
a[3] = 0;

document.write(a);
document.write("<br>");
document.write("<hr>");

var b = new Array(3);
b[0] = 1;
b[1] = "Subhradip";
b[2] = true;
b[3] = 0;
b[4] = 45;

document.write(b);
document.write("<hr>");

// Get the value from user
var ary = new Array(3);

for (var g = 0; g < 3; g++) {
    ary[g] = prompt("Enter The Value:");
}

document.write(ary);
