for( var a=1; a<=100; a=a+10){     //Outer loop for rows
    for( var b=a; b<a+10; b++){    //Inner loop for columns
        document.write(b + " ");
    }
    document.write("<br>");
}
document.write("<hr>>");

// Second example of nested loop
for (var a = 1; a <= 5; a++) {
    for (var b = 1; b <= a; b++) {
        document.write(b + " ");
    }
    document.write("<br>");
}

document.write("<hr>");
//Third example of nested loop
for(var a=1; a<=5; a++){
    for(var b=1; b<=a; b++){
        document.write(a + " ");
    }
    document.write("<br>");
}

document.write("<hr>");
//Fourth example of nested loop
for(var a=5; a>=1; a--){
    for(var b=1; b<=a; b++){
        document.write(a + " ");
    }
    document.write("<br>");
}

document.write("<hr>");
//Fifth example of nested loop
for(var a=5; a>=1; a--){
    for(var b=a; b>=1; b--){
        document.write(b + " ");
    }
    document.write("<br>");
}
