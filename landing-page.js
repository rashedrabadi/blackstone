$(document).ready(function () {
    console.log('jQuery is working!');
  });
const slides = $(".SP-slider");
const dotsContainer = $(".carousel-dots");
const interval = 500000; 
let currentIndex = 0;

for (let i = 0; i < slides.length; i++) {
  dotsContainer.append('<span class="dot" data-index="' + i + '"></span>');
}

const dots = $(".dot");

function showSlide(index) {
  slides.hide();
  slides.eq(index).show();
  dots.removeClass("active");
  dots.eq(index).addClass("active");
}

showSlide(currentIndex);

function autoSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

let sliderInterval = setInterval(autoSlide, interval);

dots.click(function () {
  const dotIndex = $(this).data("index");
  showSlide(dotIndex);
  currentIndex = dotIndex;
  clearInterval(sliderInterval); 
  sliderInterval = setInterval(autoSlide, interval); 
});

$("#nextButton").click(function () {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
  clearInterval(sliderInterval); 
  sliderInterval = setInterval(autoSlide, interval); 
});

$("#prevButton").click(function () {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
  clearInterval(sliderInterval); 
  sliderInterval = setInterval(autoSlide, interval); 
});
function updateTimer() {
    future  = Date.parse("February 9, 2025 11:30:00");
    now     = new Date();
    diff    = future - now;
  
    days  = Math.floor( diff / (1000*60*60*24) );
    hours = Math.floor( diff / (1000*60*60) );
    mins  = Math.floor( diff / (1000*60) );
  
    d = days;
    h = hours - days  * 24;
    m = mins  - hours * 60;
  
    document.getElementById("timer")
      .innerHTML =
        `<div class='time-block'>` + d + `<span>Days</span></div>` +
        `<div class='time-splitter'>:</div>` +
        `<div class='time-block'>` + h + `<span>Hours</span></div>` +
        `<div class='time-splitter'>:</div>` +
        `<div class='time-block'>` + m + `<span>Minutes</span></div>` 
  }
  updateTimer();
  setInterval('updateTimer()', 60000 );
  