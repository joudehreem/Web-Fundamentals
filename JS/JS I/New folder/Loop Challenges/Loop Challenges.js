/* Developer : Reem Joudeh
Email:joudehreem@gmail.com
Assignment of Loop Challenges
 */

/*
1.Print odds 1-20
Input:Using a loop write code values from 1 up to 2
Output: console.log all of the odd numbers.
*/ 

for( i=0; i<=20 ; i++){
  if(i%2!=0){
    console.log(i)
  }
}
var i = 0;
do {
  if (i % 2 == 1) {
    console.log(i);
  }
  i++; 
} while (i <= 20);

/*
2.Decreasing Multiples of 3
Input: Using a loop write code values from 100 down to 0
Output: console.log all of the values that are evenly divisible by 3.
*/ 
for(i=100 ; i>0 ;i--){
  if(i%3==0)
    {
      console.log(i)
    }
}

// var i = 100;
// while (i > 0) {
//   if (i % 3 == 0) {
//     console.log(i);
//   }
//   i--;
// }

/*
3.Print the sequence
Input: Using a loop write code
Output: console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
*/ 
for( i=4; i>-5; i-=1.5){
  console.log(i)
}

/*
4.Sigma
Input:Add all of the values from 1-100 onto some variable sum 
Output:Console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100.
We should get back 5050 at the end.
*/ 
var count=0;
for (var i=1 ;i<=100 ;i++)
  {
    count+=i
  }
  console.log(count);

/*
5.Factorial
Input: All of the values from 1-12 
Output: console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. 
We should get back 479001600 at the end.
*/ 
// var multiple=1
// for(i=1; i<=12; i++)
//   for (var i=1 ;i<=12 ;i++)
//     {
//       multiple*=i
//     }
//     console.log(multiple);

var multiple = 1;
var i = 1;

do {
  multiple *= i;
  i++;
} while (i <= 12);

console.log(multiple);

