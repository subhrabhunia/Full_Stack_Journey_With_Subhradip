
var a = [10, 20, 30, 40, 50];

// Some Method
var b = a.some(function(value) {
    return value > 40;
});

document.write("Some Method: " + b + "<br>");

// Every Method
var c = a.every(function(value) {
    return value > 5;
});

document.write("Every Method: " + c + "<br>");

// Some Method - False
var d = a.some(function(value) {
    return value > 100;
});

document.write("Some Method (False): " + d + "<br>");

// Every Method - False
var e = a.every(function(value) {
    return value > 20;
});

document.write("Every Method (False): " + e);
