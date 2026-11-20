
// Example 1: Return Addition

function addition(a, b) {
    return a + b;
}

let sum = addition(10, 20);

document.write("Addition: " + sum + "<br><br>");


// Example 2: Return Subtraction

function subtraction(a, b) {
    return a - b;
}

let sub = subtraction(20, 10);

document.write("Subtraction: " + sub + "<br><br>");


// Example 3: Return Multiplication

function multiplication(a, b) {
    return a * b;
}

let mul = multiplication(5, 4);

document.write("Multiplication: " + mul + "<br><br>");


// Example 4: Return Division

function division(a, b) {
    return a / b;
}

let div = division(20, 5);

document.write("Division: " + div + "<br><br>");


// Example 5: Return Even or Odd

function checkNumber(num) {
    if (num % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let result = checkNumber(15);

document.write("Number is: " + result);
