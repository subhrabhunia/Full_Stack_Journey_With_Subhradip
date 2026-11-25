
var a = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

// Print complete array
document.write(a);
document.write("<hr>");

// Access individual elements
document.write(a[0][0] + "<br>");
document.write(a[0][1] + "<br>");
document.write(a[0][2] + "<br>");

document.write(a[1][0] + "<br>");
document.write(a[1][1] + "<br>");
document.write(a[1][2] + "<br>");

document.write(a[2][0] + "<br>");
document.write(a[2][1] + "<br>");
document.write(a[2][2] + "<br>");

document.write("<hr>");

// Print array using nested for loop
for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; j++) {
        document.write(a[i][j] + " ");
    }
    document.write("<br>");
}
document.write("<hr>")
//Multidimensional Array for a table
var ary = [
["Harry",18,"Male","B.Com"],
["Sunny",19,"Male","BCA"],
["Sarah",18,"Male","BCA"],
["Tom",17, "Male","B.A."]
]
document.write(ary);
document.write("<hr>")
document.write(ary[0][0] + "<br>");
document.write(ary[0][1] + "<br>");
document.write(ary[0][2] + "<br>");

document.write(ary[1][0] + "<br>");
document.write(ary[1][1] + "<br>");
document.write(ary[1][2] + "<br>");

document.write(ary[2][0] + "<br>");
document.write(ary[2][1] + "<br>");
document.write(ary[2][2] + "<br>");

document.write(ary[3][0] + "<br>");
document.write(ary[3][1] + "<br>");
document.write(ary[3][2] + "<br>");

document.write("<hr>")

document.write("<table border='1' cellspacing='0'>");

for (var i = 0; i < ary.length; i++) {
    document.write("<tr>");

    for (var j = 0; j < ary[i].length; j++) {
        document.write("<td>" + ary[i][j] + "</td>");
    }

    document.write("</tr>");
}

document.write("</table>");