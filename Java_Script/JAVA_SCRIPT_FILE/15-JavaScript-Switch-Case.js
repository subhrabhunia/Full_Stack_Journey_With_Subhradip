
// Example 1: Day of the Week

let day = 3;

switch (day) {
    case 1:
        document.write("Monday");
        break;

    case 2:
        document.write("Tuesday");
        break;

    case 3:
        document.write("Wednesday");
        break;

    case 4:
        document.write("Thursday");
        break;

    case 5:
        document.write("Friday");
        break;

    case 6:
        document.write("Saturday");
        break;

    case 7:
        document.write("Sunday");
        break;

    default:
        document.write("Invalid Day");
}

// Example 2: Calculator

let a = 10;
let b = 5;
let operator = "+";

document.write("<br><br>");

switch (operator) {
    case "+":
        document.write("Addition: " + (a + b));
        break;

    case "-":
        document.write("Subtraction: " + (a - b));
        break;

    case "*":
        document.write("Multiplication: " + (a * b));
        break;

    case "/":
        document.write("Division: " + (a / b));
        break;

    default:
        document.write("Invalid Operator");
}
