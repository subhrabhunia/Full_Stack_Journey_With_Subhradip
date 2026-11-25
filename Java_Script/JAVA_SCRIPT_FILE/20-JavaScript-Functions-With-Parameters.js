
// Example 1: Function with One Parameter

function greet(name) {
    document.write("Hello " + name + "<br><br>");
}

greet("Subhradip");


// Example 2: Function with Two Parameters

function addition(a, b) {
    document.write("Addition: " + (a + b) + "<br><br>");
}

addition(10, 20);


// Example 3: Function with Multiple Parameters

function student(name, age, course) {
    document.write("Name: " + name + "<br>");
    document.write("Age: " + age + "<br>");
    document.write("Course: " + course + "<br><br>");
}

student("Subhradip", 22, "BCA");


// Example 4: Function with Return Value

function multiplication(a=1, b=1) {                       //we set default values for parameters a and b
    return a * b;
}

let result = multiplication(5, 4);

document.write("Multiplication: " + result + "<br><br>");


// Example 5: Function to Check Even or Odd

function checkNumber(num) {
    if (num % 2 == 0) {
        document.write(num + " is Even.");
    } else {
        document.write(num + " is Odd.");
    }
}

checkNumber(15);



document.write("<br>")
document.write("<br>")
document.write("<hr>")


function calculator(a,b){
    document.write("Addition: " + (a + b) + "<br><br>");
    document.write("Subtraction: " + (a - b) + "<br><br>");
    document.write("Multriplication: " + (a * b) + "<br><br>");
    document.write("Division: " + (a / b) + "<br><br>");
}
calculator(10,5)