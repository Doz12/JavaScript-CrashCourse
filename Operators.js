/*

JavaScript Operators

- You can try it in our Browser's Console(Just Press F12 then find Console)

*/


/* Arithmetic Operator */

var num1 = 1;
var num2 = 2;

// Addtion
console.log(num1 + num2) // Symbol +
// Subtraction
console.log(num1 - num2) // Symbol -
// Multiplication
console.log(num1 * num2) // Symbol *
// Division
console.log(num1 / num2) // Symbol /
// Modulus
console.log(num1 % num2) // Symbol %
// Increment
console.log(num2++) // Symbol ++
// Decrement
console.log(num2--) // Symbol --
// Unary negation
console.log(-num2) // Symbol -(variable)

/* Assignment Operators */

var num1 = 1;
var num2 = 2;

console.log(num1 += num2)
console.log(num1 -= num2)
console.log(num1 *= num2)
console.log(num1 /= num2)
console.log(num1 %= num2)

console.log(num1 <<= num2)
console.log(num1 >>= num2)
console.log(num1 >>>= num2)
console.log(num1 &= num2)
console.log(num1 ^= num2)
console.log(num1 |= num2)

/* Comparison Operators */

var num1 = 1;
var num2 = 2;

console.log(num1 == num2) // Equal
console.log(num1 === num2) // Strict Equal
console.log(num1 != num2) // Not Equal
console.log(num1 !== num2) // Strict Not Equal
console.log(num1 > num2) // Greater than
console.log(num1 >= num2) // Greater than equal
console.log(num1 < num2) // Less than
console.log(num1 <= num2) // Less than equal

/* Bitwise Operators */

var num1 = 1;
var num2 = 2;

console.log(num1 & num2) // Bitwise AND
console.log(num1 | num2) // Bitwise OR
console.log(num1 ^ num2) // Bitwise XOR
console.log(~ num2) // Bitwise NOT
console.log(num1 << num2) // Left shift (Shifts a in binary representation b bits to the left, shifting in zeros from the right.)
console.log(num1 >> num2) // Sign-propagating right shift (Shifts a in binary representation b bits to the right, discarding bits shifted off.)
console.log(num1 >>> num2) // Zero-fill right shift (Shifts a in binary representation b bits to the right, discarding bits shifted off, and shifting in zeros from the left.)

/* Logical Operators */

var num1 = 1;
var num2 = 2;

console.log(num1 && num2)
console.log(num1 || num2)
console.log(!num2)

/* String Operators */

console.log("HELLO" + " WORLD")

/* Conditional Operators */

marks = 80;
var result = (marks >= 40) ? "Pass" : "Fail";
console.log(result);
marks = 30;
var result = (marks >= 40) ? "Pass" : "Fail";
console.log(result);

/* Comma Operator */

for (var i=1, j=10; i <=3; i++, j++)  
{  
console.log('Sl. No. : '+i+' Employee Code : '+j)  
}

/* Delete Operator */

x = 55;
var y = 53;
myobj = new Number();
myobj.g = 14;    // create property g
delete x;       // returns true (can delete if declared implicitly)
delete y;       // returns true (can delete if declared with var)
delete myobj.g; // returns true (can delete user-defined properties)
delete myobj;   // returns true (can delete if declared implicitly)

/* IN Operator */

var employee = {name:"Robert",designation:"Officer",age:"34"};

if ("destination" in employee)
console.log('Designation property is present'); 
else
console.log('Designation property is not present'); 

/* TYPEOF Operator */

var myFunction = new Function("23-11");
var color = "red";
var length = 12;
var today = new Date();

console.log(typeof myfunction); 
console.log(typeof color); 
console.log(typeof length);  
console.log(typeof today); 
console.log(typeof dontExist);