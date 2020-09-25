//JavaScript Variables

// - You can try it in our Browser's Console(Just Press F12 then find Console)

//Local Scope

function add_numbers(x, y) 
{
  var local_result = x + y;
  console.log("The local result is: " + local_result);
}

//Output
//"The local result is: 9"


//Global Scope

var global_result = 15;
function add_numbers(x, y) {
  var global_result = x + y;
  console.log("The local result is: " + global_result);
}
add_numbers(4, 5);
console.log(global_result); 
//Output 15

//- Always declare var