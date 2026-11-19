
// Example 1: Simple Confirm Box

let result = confirm("Do you want to continue?");

if (result == true) {
    document.write("You clicked OK.");
} else {
    document.write("You clicked Cancel.");
}

// Example 2: Delete Confirmation

document.write("<br><br>");

let choice = confirm("Are you sure you want to delete this file?");

if (choice == true) {
    document.write("File Deleted Successfully.");
} else {
    document.write("File Deletion Cancelled.");
}

// Example 3: Exit Confirmation

document.write("<br><br>");

let exit = confirm("Do you want to exit?");

if (exit == true) {
    document.write("You selected Yes to Exit.");
} else {
    document.write("You selected No to Exit.");
}
