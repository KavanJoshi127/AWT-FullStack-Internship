let n1=45,n2=3;
var sum=n1+n2,sub=n1-n2,mul=n1*n2,div=n1/n2,mod=n1%n2;
var expo = 5**3; 
document.write("Number one: ",n1);
document.write("<br>Number two: ",n2);
document.write("<br><br>Sum: ",sum,"<br>Sub: ",sub,"<br>Div: ",div,"<br>Mul: ",mul,"<br>Mod: ",mod,"<br>Post Inc: ",n1++,"<br>Post Dec: ",n2--,"<br>Pre Inc: ",++n1,"<br>Pre Dec: ",--n2);

// Conditional Operators
var a=23;b="23";
// == used to compare values only
if (a==b){
    document.write("<br><br>Same");
}
else{
    document.write("<br>Not Same")
}

// === used to compare value as well as datatype
if(a===b){
    document.write("<br>Same for = = =");
}
else{
    document.write("<br>Not Same = = =");
}

// Instance of
document.write("<br><br>instanceof");
var a = ["nothing","something"];
document.write("<br>",a instanceof Array);
document.write("<br>",a instanceof Number);

// Concatination
document.write("<br><br>Concatination");
var x = "why";
var y = "when";
var z = x +" "+ y;
document.write("<br>",z);