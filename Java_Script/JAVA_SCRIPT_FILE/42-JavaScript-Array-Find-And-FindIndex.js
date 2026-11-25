
var a = [10, 20, 30, 40, 50];

// Find Method
var b = a.find(function(value) {
    return value > 25;
});

document.write("Find Method: " + b + "<br>");

// FindIndex Method
var c = a.findIndex(function(value) {
    return value > 25;
});

document.write("FindIndex Method: " + c + "<br>");

// Find Method - Not Found
var d = a.find(function(value) {
    return value > 100;
});

document.write("Find (Not Found): " + d + "<br>");

// FindIndex Method - Not Found
var e = a.findIndex(function(value) {
    return value > 100;
});

document.write("FindIndex (Not Found): " + e);
