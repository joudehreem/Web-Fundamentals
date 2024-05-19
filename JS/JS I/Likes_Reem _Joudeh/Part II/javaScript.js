/*
Developer:Reem Joudeh
Email:joudehreem@gmail.com

Description: The function is linked to buttons in HTML through the onclick event. It defines the functionality responsible for incrementing the like count when the button is clicked.
Input: User interaction with the button in HTML, triggered by the onclick event.
Output: Updating the text content of the element to display the new like count, and updated count to the console using console.log()
*/ 


function countLike(elementId) {
  var countElement = document.getElementById(elementId);
  var countNum = parseInt(countElement.innerHTML);
  countNum++;
  countElement.innerHTML   = countNum;
  console.log(countNum);
}

