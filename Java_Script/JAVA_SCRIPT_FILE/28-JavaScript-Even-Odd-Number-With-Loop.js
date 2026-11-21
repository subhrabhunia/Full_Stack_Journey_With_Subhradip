//JavaScript Program to Check Even and Odd Number Using While Loop
var a=1;
while(a<=100){
    if(a%2==0){
        document.write(a+" is Even Number <br>");
    }
    else{
        document.write(a+" is Odd Number <br>");
    }
    a++;
}

document.write("<hr>");
//JavaScript Program to Check Even and Odd Number Using For Loop
var b=101;
for(b=101;b<=200;b++){
    if(b%2==0){
        document.write(b+" is Even Number <br>");
    }
    else{
        document.write(b+" is Odd Number <br>");
    }
}

document.write("<hr>");
//JavaScript Program to Check Even and Odd Number Using Do While Loop
var c=201;
do{
    if(c%2==0){
        document.write(c+" is Even Number <br>");
    }
    else{
        document.write(c+" is Odd Number <br>");
    }
    c++;
}
while(c<=300);
