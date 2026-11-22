
var fruits = ["Apple", "Mango", "Banana", "Orange"];

document.write(fruits);
document.write("<br>");

document.write(fruits[0] + "<br>");
document.write(fruits[1] + "<br>");
document.write(fruits[2] + "<br>");
document.write(fruits[3] + "<br>");

document.write("<hr>")
//Another way to print all the elements of an array using for loop
document.write("<ul>")
for(var i=0; i<fruits.length; i++){
    document.write("<li>" + fruits[i] + "</li> <br>");
}
document.write("</ul>")
