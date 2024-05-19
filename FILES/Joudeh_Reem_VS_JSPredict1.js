function myBirthYearFunc(){
    console.log("I was born in " + 1980);
}// I was born in 1980

function myBirthYearFunc(birthYearInput){
        console.log("I was born in " + birthYearInput);
    }// I was born in 1995
    
    function add(num1, num2){
        console.log("Summing Numbers!");
        console.log("num1 is: " + num1);
        console.log("num2 is: " + num2);
        var sum = num1 + num2;
        console.log(sum);
    }
// summing Numbers! 
//num1 is : 1
//num2 is : 2
//3 

var num = 15;
console.log(num);
function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);
