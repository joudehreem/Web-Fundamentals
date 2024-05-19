/*
Developer:Reem Joudeh
Email:Reem Joudeh
Description: Assignment of Video Preview use function to play and pause video with use onclick mouseover and mouseout 
Input:Two function which responsible to play and pause, This argument represents the video element that is passed to the functions 
Output:Corresponding action on the video
*/
// let vid = document.querySelector("#video1"); 

function playVid(element) { 
  // if (vid.paused)
  element.play(); 
// else vid.pause();
}

function playVid1(element){
  element.pause();
}
