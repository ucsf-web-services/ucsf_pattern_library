//Accordion 1

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function(){
    this.classList.toggle("active");
    this.classList.toggle("downarrow");
    var accordion__header = this.nextElementSibling;
    if (accordion__header.style.display === "block") {
      accordion__header.style.display = "none";
    } else {
      accordion__header.style.display = "block";
    }
  }
}

//Accordion 2
var acc = document.getElementsByClassName("accordion-2");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function(){
    this.classList.toggle("active");
    this.classList.toggle("expand");
    var accordion__header = this.nextElementSibling;
    if (accordion__header.style.display === "block") {
      accordion__header.style.display = "none";
    } else {
      accordion__header.style.display = "block";
    }
  }
}
