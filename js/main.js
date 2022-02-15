let elopenmodal = document.getElementById('openModal');
let elColsemodal = document.getElementById('close-btn');
let elModal = document.getElementById('show');
let elbody = document.getElementById('body')


elopenmodal.addEventListener('click', function () {
  elModal.classList.add('show');
  elbody.classList.add('padding');
  elopenmodal.classList.add('right-xs');
});

elColsemodal.addEventListener('click', function () {
  elModal.classList.remove('show');
  elbody.classList.remove('padding');
  elopenmodal.classList.remove('right-xs')
});

var typed = new Typed('#element', {
  // Waits 1000ms after typing "First"  
  strings: [
    'Web Developer', 'Developer'],
  typedSpeed: 100,
  backSpeed: 100,
  loop: true,
});


var typed = new Typed('#developer', {
  // Waits 1000ms after typing "First"  
  strings: [
    'Web Developer', 'Mukhammadsodiq'],
  typedSpeed: 100,
  backSpeed: 100,
  loop: true,
});

let cursor = document.querySelector(".cursor");
let cursorSpot = document.querySelector(".cursor-spot");

document.addEventListener("mousemove", function(b){
  cursor.style.cssText = cursorSpot.style.cssText = "left: " + b.clientX + "px; top: " + b.clientY + "px;";

  const anchors =  document.querySelectorAll("a");
  for(let a of anchors) {
    a.onmouseover = () => {
      cursor.classList.add("chover")
    }
    a.onmouseout = () => {
      cursor.classList.remove("chover")
    }
  }
});



//Get the button
var topbutton = document.getElementById("id-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topbutton.style.opacity = "1";
    topbutton.style.transition = "all 0.5s linner";
  } else {
    topbutton.style.opacity = "0";
    topbutton.style.transition = "all 0.5s linner";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



