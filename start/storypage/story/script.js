'use strict';
console.log('reading js');

AOS.init({
  duration: 2000,
})


;
(function() {
  var throttle = function(type, name, obj) {
    var obj = obj || window;
    var running = false;
    var func = function() {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function() {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  throttle("scroll", "optimizedScroll");
})();

var motifone = document.getElementById("motifone"),
  motiftwo = document.getElementById("motiftwo");


// to use the script *without* anti-jank, set the event to "scroll" and remove the anonymous function.

window.addEventListener("optimizedScroll", function() {
  motifone.style.transform = "rotate(" + window.pageYOffset / 4 + "deg)";
  motiftwo.style.transform = "rotate(-" + window.pageYOffset / 2 + "deg)";
  motifthree.style.transform = "rotate(-" + window.pageYOffset / 3 + "deg)";
  motiffour.style.transform = "rotate(" + window.pageYOffset / 5 + "deg)";
  motiffive.style.transform = "rotate(" + window.pageYOffset + "deg)";
  motifsix.style.transform = "rotate(" + window.pageYOffset / 10 + "deg)";
  motifseven.style.transform = "rotate(" + window.pageYOffset / 4 + "deg)";
  motifeight.style.transform = "rotate(" + window.pageYOffset / 4 + "deg)";
  motifnine.style.transform = "rotate(" + window.pageYOffset / 4 + "deg)";
  motiften.style.transform = "rotate(" + window.pageYOffset / 4 + "deg)";
  motif11.style.transform = "rotate(" + window.pageYOffset / 4 + "deg)";
  motif12.style.transform = "rotate(" + window.pageYOffset / 8 + "deg)";
  motif13.style.transform = "rotate(" + window.pageYOffset / 5 + "deg)";
  motif14.style.transform = "rotate(" + window.pageYOffset / 12 + "deg)";






  motifc1.style.transform = "rotate(" + window.pageYOffset / 4 + "deg)";
  motifc2.style.transform = "rotate(" + window.pageYOffset / 8 + "deg)";
  motifc3.style.transform = "rotate(-" + window.pageYOffset / 2 + "deg)";
  motifc4.style.transform = "rotate(-" + window.pageYOffset / 3 + "deg)";
  motifc5.style.transform = "rotate(-" + window.pageYOffset / 5 + "deg)";
  motifc6.style.transform = "rotate(-" + window.pageYOffset / 8 + "deg)";
  motifc7.style.transform = "rotate(-" + window.pageYOffset / 6 + "deg)";
  motifc8.style.transform = "rotate(-" + window.pageYOffset / 4 + "deg)";
  motifc9.style.transform = "rotate(-" + window.pageYOffset / 2 + "deg)";
  motifd1.style.transform = "rotate(-" + window.pageYOffset + "deg)";
  motifd2.style.transform = "rotate(-" + window.pageYOffset / 6 + "deg)";
  motifd3.style.transform = "rotate(-" + window.pageYOffset / 3 + "deg)";

  motifd4.style.transform = "rotate(-" + window.pageYOffset + "deg)";
  motifd5.style.transform = "rotate(-" + window.pageYOffset / 6 + "deg)";
  motifd6.style.transform = "rotate(-" + window.pageYOffset / 3 + "deg)";
  motifd7.style.transform = "rotate(-" + window.pageYOffset / 6 + "deg)";
  motifd8.style.transform = "rotate(-" + window.pageYOffset / 3 + "deg)";
  motifd9.style.transform = "rotate(-" + window.pageYOffset / 6 + "deg)";
  motifd10.style.transform = "rotate(-" + window.pageYOffset / 3 + "deg)";

  motife1.style.transform = "rotate(-" + window.pageYOffset / 6 + "deg)";
  motife2.style.transform = "rotate(-" + window.pageYOffset / 3 + "deg)";









});

window.addEventListener('scroll', () => {
  let parent = document.getElementById('parallax-container');
  let children = parent.getElementsByTagName('div');
  for (let i = 0; i < children.length; i++) {
    children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
  }
}, false)

// var images = document.getElementsByClassName('b1');
// var instances = new simpleParallax(images);


// CHECK FOR USER ACTIVITY
var timerId = null;
window.addEventListener('touchstart', resetTimer);
window.addEventListener('click', resetTimer);

function resetTimer() {
  // someone is interacting
  if (timerId !== null) {
    console.log ("clearingtimeout");
    clearTimeout(timerId);
  }

  timerId = setTimeout(function() {
    timerId = null;
    console.log('thetimerresethasbeencalled,showopeningscreen');
    location.reload (true);

  }, 3000);
}
