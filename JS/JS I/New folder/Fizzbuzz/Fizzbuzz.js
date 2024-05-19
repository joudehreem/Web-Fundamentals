
/* Developer : Reem Joudeh
Email:joudehreem@gmail.com
Assignment of FizzBuzz..
Write code that will go through each number from 1 to 100 and:
The output will:
Print "Fizz" for numbers which are a multiple of 3
Print "Buzz", for numbers which are a multiple of 5
Print "FizzBuzz", for numbers which are a multiple of both 3 and 5, 
 */
for (var i = 1 ; i <= 100 ; i++ ){
  if(i%15==0){
    console.log('FizzBuzz');
  }
  else if  (i%5==0) {
    console.log('Buzz');
  }
  else if  (i%3==0) {
    console.log('Fizz');
  } else{
      console.log(i);
    }
  }

