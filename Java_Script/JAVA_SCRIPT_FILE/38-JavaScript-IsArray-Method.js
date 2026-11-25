
var a = ["Apple", "Mango", "Banana", "Orange"];

document.write(Array.isArray(a) + "<br>");

var b = "Hello";

document.write(Array.isArray(b) + "<br>");

var c = 100;

document.write(Array.isArray(c) + "<br>");

var d = [10, 20, 30];

document.write(Array.isArray(d) + "<br>");


//Example with if else

var a = ["Apple", "Mango", "Banana"];

if (Array.isArray(a)) {
    document.write("This is an Array");
} else {
    document.write("This is not an Array");
}
