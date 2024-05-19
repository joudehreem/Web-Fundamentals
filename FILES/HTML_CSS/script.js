function custom() {
    // we can include more code here if we want to
    console.log("this message is coming from script.js");
}

function example(element) {
    console.log("element clicked", element);
}
function turnOff(element) {
    element.innerText = "Off";
}

function hide(element) {
    element.remove();
}

// function over(element) {
//     alert("mouseover");    
// }
    
// function out(element) {
//     alert("mouseout");    
// }
function over(element) {
    element.style.backgroundColor = "lime";    
}
    
function out(element) {
    element.style.backgroundColor = "silver";   
}
// Both of these will select the h1 tag
var h1 = document.querySelector("h1");
var title = document.querySelector("#title");

var logoImg = document.querySelector(".nav img");


