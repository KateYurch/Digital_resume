
let bValue = true;
window.addEventListener('DOMContentLoaded', blink);
function blink() {
  let colorB1 = document.getElementById('b1');
  let colorB2 = document.getElementById('b2');

  if (bValue == true) {
    colorB1.style.backgroundColor = "grey";
    colorB2.style.backgroundColor = "grey";
    bValue = false;
    setTimeout(blink, 1000);
  }
  else {
    colorB1.style.backgroundColor = "transparent";
    colorB2.style.backgroundColor = "transparent";
    bValue = true;
    setTimeout(blink, 1000);
  }
}