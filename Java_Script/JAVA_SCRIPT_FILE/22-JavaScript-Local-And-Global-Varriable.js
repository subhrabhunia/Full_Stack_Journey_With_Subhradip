
// Global Variable
var name = "Subhradip";

function showName() {
    document.write("Global Variable: " + name + "<br>");
}

showName();


// Local Variable
function showAge() {
    var age = 22;
    document.write("Local Variable: " + age + "<br>");
}

showAge();


// Global Variable Using let
let course = "BCA";

function showCourse() {
    document.write("Course: " + course + "<br>");
}

showCourse();
