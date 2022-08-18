//Functioning of maps buttons
let currentlySelected = 0;
const maps = document.querySelectorAll(".map");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function init() {
  prevBtn.addEventListener("click", function() {
    previous();
  });

  nextBtn.addEventListener("click", function(e) {
    next();
  });
}

init();

if (currentlySelected === 0) {
  maps[currentlySelected].classList.add("active");
}

function next() {
prevBtn.disabled = false;
maps[currentlySelected].classList.remove("active");
currentlySelected++;
maps[currentlySelected].classList.add("active");

if (currentlySelected + 1 === maps.length) {
  nextBtn.disabled = true;

}
}


function previous() {
  nextBtn.disabled = false;
  maps[currentlySelected].classList.remove("active");
  currentlySelected--;
  maps[currentlySelected].classList.add("active");

  if (currentlySelected === 0) {
    prevBtn.disabled = true;
  }
}



