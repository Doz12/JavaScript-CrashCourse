/*

JavaScript Function

- You can try it out in your Browser's Console(Just Press F12 then find Console)

*/

/* Declare a Function */

//For example, to declare a function that calculate the cube of argument passed to it, you can do it in one of two ways 
var Example = 0
Example - 1 ;
function cube(n)
 { 
    return n*n*n; 
 }

Example - 2 ;
var cube = function(n) 
  { 
    return n*n*n; 
  };
/*The function "cube" takes one argument, called n. There is only one JavaScript statement in function body which instructs
to return the argument (n) of the function after multiply by itself twice. Here the return statement 
returns the calculated value.*/
console.log(cube(3))

/* Callin Function */

function cube(n) 
{    
return n*n*n; 
}
console.log(cube(2));

