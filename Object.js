/*

JavaScript Objects

- You can try it out in your Browser's Console(Just Press F12 then find Console)

*/


/* Object's Property */ 

var student = {
    studentName: 'David',
    sClass: 'V',
    sRollno: 2,
    marks:{
        language: 79,
        math: 89
    },
    getStudentMarks: function(){
        return this.marks.language + " " + this.marks.math;    
    }
};
console.log(student)

/* Array Object */

var colors = [];
colors[0] = "Blue";
colors[1] = "Red";
colors[2] = "Green";
console.log(colors[0]);  
console.log(colors[1]);  
console.log(colors[2]);  

/* Boolean Object */ 

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

marksgrade(85);
marksgrade(41);

/* Date Object */

var d = new Date(2020, 08, 25, 8, 27, 30);
console.log(d)

/* Math Object */

/*Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E */

console.log(Math.E); 

console.log(Math.LN10); 

console.log(Math.LN2); 

console.log(Math.LOG10E); 

console.log(Math.LOG2E); 

console.log(Math.PI); 

console.log(Math.SQRT4); 

console.log(Math.SQRT64); 

/* Number Object */ 

var x = 3.14;    
var y = 3; 

/* RegExp Object */ 

var colorName = /Green/;
re = new RegExp("Green")

/* String Object */ 

var carName1 = "Volvo XC60";  // Double quotes
var carName2 = 'Volvo XC60';  // Single quotes

/* String Length */
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
console.log(sln)

/* Using Backslash */
var x = "We are the so-called \"Vikings\" from the north.";
console.log(x)