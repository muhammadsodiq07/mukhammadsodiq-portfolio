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







