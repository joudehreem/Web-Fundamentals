
function countLike(elementId) {
var count =document.getElementById(elementId)
var like = parseInt(count.innerHTML)

count.innerHTML = like+1
}