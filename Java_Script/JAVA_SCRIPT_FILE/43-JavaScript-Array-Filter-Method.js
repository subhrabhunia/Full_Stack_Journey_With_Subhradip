
var a = [10, 20, 30, 40, 50,61,23];

document.write("Original Array: " + a + "<br><br>");

// Filter numbers greater than 25
var b = a.filter(function(value) {
    return value > 25;
});

document.write("Greater than 25: " + b + "<br>");

// Filter even numbers
var c = a.filter(function(value) {
    return value % 2 == 0;
});

document.write("Even Numbers: " + c + "<br>");

// Filter odd numbers
var d = a.filter(function(value) {
    return value % 2 != 0;
});

document.write("Odd Numbers: " + d + "<br>");

// Filter numbers greater than 100
var e = a.filter(function(value) {
    return value > 100;
});

document.write("Greater than 100: " + e);
