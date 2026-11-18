
// Example 1: Day of the Week

let day = 3;

switch (day) {
    case 1:
        document.write("Monday<br>");
        break;

    case 2:
        document.write("Tuesday<br>");
        break;

    case 3:
        document.write("Wednesday<br>");
        break;

    case 4:
        document.write("Thursday<br>");
        break;

    case 5:
        document.write("Friday<br>");
        break;

    case 6:
        document.write("Saturday<br>");
        break;

    case 7:
        document.write("Sunday<br>");
        break;

    default:
        document.write("Invalid Day<br>");
}

// Example 2: Calculator

let a = 10;
let b = 5;
let operator = "+";

document.write("<br>");

switch (operator) {
    case "+":
        document.write("Addition: " + (a + b) + "<br>");
        break;

    case "-":
        document.write("Subtraction: " + (a - b) + "<br>");
        break;

    case "*":
        document.write("Multiplication: " + (a * b) + "<br>");
        break;

    case "/":
        document.write("Division: " + (a / b) + "<br>");
        break;

    default:
        document.write("Invalid Operator<br>");
}

// Example 3: Multiple Cases in One Line

let days = 1;

document.write("<br>");

switch (days) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        document.write("Weekday<br>");
        break;

    case 6:
    case 7:
        document.write("Weekend<br>");
        break;

    default:
        document.write("Invalid Day<br>");
}
