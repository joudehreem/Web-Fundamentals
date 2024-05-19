
/*
Developer: Reem Joudeh
Email: Joudehreem@gmail.com
Description : This function 
Input: HTML ELEMENT (Button)
Output: None
*/
function logout(logout) {
    if (logout.innerText == "Login") {
        logout.innerText = "Logout"
        // logout.style.color = "RED"
    }
    else {
        logout.innerText = "Login"
        // logout.style.color = "White"
    }
}

function remvDef(remvDef) {
    remvDef.remove();
}

function countLike() {
    alert('Ninja was liked');
}
