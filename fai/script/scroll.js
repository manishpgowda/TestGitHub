//onscroll the header
window.onscroll = function() {myFunction()};

var w3-third = document.getElementsById("myw3-third");
var sticky = w3-third.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    w3-third.classList.add("sticky");
  } else {
    w3-third.classList.remove("sticky");
  }
}

//wrap the heading
var textWrapper = document.querySelector(".textWrapper .typed-me");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g,"<span class="typed-me">$&</span>");

anime.timeline({
  loop: true
})
.add({
  targets: ".textWrapper .typed-me",
  translateY: ["1.1em", 0],
  translateX: ["0.55em", 0]
  translateZ: 0,
  rotateZ: [180, 0],
  duration: 750,
  easing: "easeOutExpo",
  delay: (el, i) => 50 * i
  }).add({
    targets: '.textWrapper',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
