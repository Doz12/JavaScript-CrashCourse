/*Literals & Expression

- You can try it in our Browser's Console(Just Press F12 then find Console)

*/

//Array Literals/

//- Array literal is a list of expressions

//Creating an empty array
var fruits = []; 
//Creating an array with four elements.
var fruits = ["Orange", "Apple", "Banana", "Mango"]
//Display  an array element
console.log(fruits[1]);
//No need to specify all elements in an array literal
var fruits = ["Orange", , "Banana", "Mango"]
console.log(fruits[1]);

//Boolean Literals/

//If comparison or logical operator is not used JS tries to figure out if the value is "truth".
var isArray = true;
if (isArray) {
  console.log('Yes it is an array!');
}

//Empty string (""), number(0), undefined, null are false value.
var name = '';
if (name) 
  console.log('My name is : ' + name);

var rollno = 0;
if (rollno) 
  console.log('Your roll no. is '+ rollno);

var address;
if (address) 
  console.log('Your name is ' + firstName);

//Object Literals

// - object literal is zero or more pairs of comma separated list of property names and associated values, enclosed by a pair of curly braces.

var student = {
    stu_class: "III",
    stu_name: "Mark",
    stu_roll_no: 1,
    marks: { language: 75, math: 80 }
  };
  console.log(student.stu_name);
  console.log('Class: '+student.stu_class +' Roll No. : '+student.stu_roll_no);
  console.log('Marks in Math :'+student.marks.math );

//String Literals

// - string literal is zero or more characters, either enclosed in single quotation (') marks or double quotation (") marks.

string1 = "facebook.com" 
string2 = 'instagram.com'
string3 ="First line \n Second line"
string4 = "google" + ".com"
console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);


