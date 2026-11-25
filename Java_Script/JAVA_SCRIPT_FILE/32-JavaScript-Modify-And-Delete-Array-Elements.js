
var a = ["Apple", "Mango", "Banana", "Orange"];

// Original Array
document.write("Original Array: " + a);
document.write("<br>");

// Modify Array Element
a[1] = "Grapes";
document.write("After Modify: " + a);
document.write("<br>");

// Delete Array Element
delete a[2];
document.write("After Delete: " + a);
document.write("<br>");

// Print Array Elements Using For Loop
for (var i = 0; i < a.length; i++) {
    document.write(a[i] + "<br>");
}
