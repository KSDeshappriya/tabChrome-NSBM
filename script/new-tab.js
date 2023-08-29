// gdAppTab

window.onload = function () {
  var gdbut = document.getElementById("gdbut");
  var bod = document.querySelector('body');
  gdbut.addEventListener("click", gTab);
}

function gTab() {
  var visi = document.getElementById("gIFR").style.visibility;
  if (visi == 'visible')
    document.getElementById("gIFR").style.visibility = 'hidden';
  else
    document.getElementById("gIFR").style.visibility = 'visible';
}