
// Example 1: Simple Function

function greet() {
    document.write("Hello, Welcome to JavaScript!<br><br>");
}

greet();
document.write("This is a simple function example.<br><br>");
greet();
document.write("Functions help in organizing code and reusing it.<br><br>");
greet();


// Example 2: Function with Parameters

function addition(a, b) {
    let sum = a + b;
    document.write("Addition: " + sum + "<br><br>");
}

addition(10, 20);


// Example 3: Function with Return Value

function multiplication(a, b) {
    return a * b;
}

let result = multiplication(5, 4);

document.write("Multiplication: " + result + "<br><br>");


// Example 4: Function for Even or Odd

function checkNumber(num) {
    if (num % 2 == 0) {
        document.write(num + " is Even.");
    } else {
        document.write(num + " is Odd.");
    }
}

checkNumber(10);
