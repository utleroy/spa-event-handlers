var output = document.getElementById("output-target");
var keypress = document.getElementById("keypress-input");
var colorBtn = document.getElementById("add-color");
var hulkifyBtn = document.getElementById("make-large");
var captureItBtn = document.getElementById("add-border");
var roundedBtn = document.getElementById("add-rounding");
var header = document.getElementById("page-header");
var title = document.getElementById("page-title");
var guineaPig = document.getElementById("guinea-pig");

var articleEl = document.getElementsByTagName("article-section")

title.addEventListener("mouseover", function() {
  output.innerHTML = "You moved your mouse over the header";
  })

title.addEventListener("mouseout", function() {
  output.innerHTML = "You left Me!";
})

colorBtn.addEventListener("click", function() {
  guineaPig.classList.toggle("blue");
})

hulkifyBtn.addEventListener("click", function() {
  guineaPig.classList.toggle("hulky");
})

captureItBtn.addEventListener("click", function() {
  guineaPig.classList.toggle("border");
})

roundedBtn.addEventListener("click", function() {
  guineaPig.classList.toggle("round");
})

for (var i = 0; i < articleEl.length; i++) {
  articleEl[0].classList.add("bold");
  articleEl[articleEl.length - 1].classList.add("itali");
}

var btns = document.getElementsByTagName("button");

for (var i = 0; i < btns.length; i++) {
  btns[i].classList.add("block");
}







