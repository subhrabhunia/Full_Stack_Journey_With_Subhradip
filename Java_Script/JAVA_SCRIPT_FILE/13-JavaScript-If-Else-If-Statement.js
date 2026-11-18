
// Example 1: Grade Calculation

let marks = 85;

if (marks >= 90 && marks <= 100) {
    document.write("Grade: A+");
}
else if (marks >= 80 && marks < 90) {
    document.write("Grade: A");
}
else if (marks >= 70 && marks < 80) {
    document.write("Grade: B");
}
else if (marks >= 60 && marks < 70) {
    document.write("Grade: C");
}
else if (marks >= 40 && marks < 60) {
    document.write("Grade: D");
}
else {
    document.write("Grade: F");
}

// Example 2: Positive, Negative or Zero

let number = 0;

document.write("<br><br>");

if (number > 0) {
    document.write("Number is Positive.");
}
else if (number < 0) {
    document.write("Number is Negative.");
}
else {
    document.write("Number is Zero.");
}
