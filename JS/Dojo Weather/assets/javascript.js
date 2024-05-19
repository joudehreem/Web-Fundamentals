/* Developer:Reem Joudeh
Email:joudehreem@gmail.com
*/

function load() {
  alert('Loading weather report...')
}

function accept() {
  document.getElementById("cookieBanner").remove();
  // document.getElementById("cookieBanner").style.display = "none"
}

function changeTemperature() {
  var unit = document.getElementById('tempUnit').value;
  var degrees = document.querySelectorAll('.degree h3');
  for (var i = 0; i < degrees.length; i++) {
    var temperatureDegree = degrees[i].textContent;
    var temperature = parseInt(temperatureDegree);
    var calculated;
      if (unit == 2) {
        calculated = (temperature * 9 / 5) + 32;
      } else {
        calculated = (temperature - 32) * 5 / 9;
      }
        degrees[i].textContent = `${Math.floor(calculated)} °`
  }
}