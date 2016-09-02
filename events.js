var DOMdisplay = document.getElementById("output-target");
var keypress = document.getElementById("keypress-input");

DOMdisplay.addEventListener("keyup", function() {
  DOMdisplay.innerHTML = keypress.value;
})
  console.log("clicked",)