/*

JavaScript Statement

- You can try it out in your Browser's Console(Just Press F12 then find Console)

*/

/* IF ELSE IF */

function marksgrade(x)
{
if (x >=90)
console.log('Grade A+');
else if (x >=80 && x <90)
{
console.log('Grade A');
}
else if (x >=70 && x <80)
{
console.log('Grade B+');
}
else if (x >=60 && x <70)
{
console.log('Grade B');
}
else
console.log('Grade C');
}
marksgrade(95); 
marksgrade(75); 

/* SWITCH STATEMENT */

function marksgrade(marks_grade)
{
grade = marks_grade;
switch (grade)
{
case 'A+':
 console.log("Marks >= 90");
  break;
case 'A':
  console.log("Marks [ >= 80 and <90 ]");
  break;
case 'B+':
  console.log("Marks [ >= 70 and <80 ]");
  break;
case 'B':
  console.log("Marks [ >= 60 and <70 ]");
  break;
case 'C':
  console.log("Marks < 60");
  break;
default:
  console.log("Wrong grade.........");
}
}
marksgrade('A+'); 
marksgrade('C');

/*  Loop Statement */

/* For Loop */

var sum = 0;
for (var x = 0; x < 500; x++)
{
    if (x % 2 === 0 || x % 10 === 0)
    {
        sum ++;
    }
}
console.log(sum); 


/* Do While Loop */ 

var n = 0;
do {
    console.log(n + " ");
    n++;
} while (n < 10);

/* While Loop */ 

var num1 = 2154; 
var num2 = 458;   
var gcd;
while (num1!=num2)
{
    if (num1>num2)
    {
        num1 = num1 - num2;
    }
    else
    {
        num2 = num2 - num1;
    }
}
gcd = num1;
console.log(gcd);

/* Break Statement */

for (var x = 1; x < 29; x++) 
{
    if (x == 10) {
        break;
    }
    console.log(x);    
}

/* Continue Statement */

for (var n = 1; n < 17; n++) {
    if (n < 10) {
        continue;
    }
    console.log(n);
    }

/* For in Statement */

color_list = {"r" : "Rosas" , "b" : "Baboy", "w" : "Waze"}

// Iterate over the properties.
var s = ""
for (var key in color_list) {
    s += key + ": " + color_list[key]+" ";
     }
console.log(s);

/* Try...Catch Statement */ 

// a ReferenceError exception to be thrown and displays the name of the error and its message.

try {
    addalert("Wrong call");
}
catch(e) {
    console.log("Error Message: " + e.message);
    console.log("Error Name: " + e.name);
}

/* Throw Statement */ 

// throw statement creates an user define exception

throw exception;

throw "Error2";   //String type
throw 58;         //Number type
throw true;       //Boolean type
throw {toString: function() { return "This is an object!"; } };

/* Return Statement */

return expression

//The following example shows the use of the return statement.

function myfunction(arg1, arg2){
   var r;
   r = arg1 * arg2;
   return(r);
}

console.log(myfunction)