$(document).ready(function() {
  console.log('Working');
});

let slideIndex = 0;
let slides = $('.slide');
let controls = $('.control');
let dot = $('.dot');

showSlides(slideIndex);

function showSlide(n) {
  slideIndex = n;
  let i;

  slides.each(function(slideInd, slide) {
    if (slideInd === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

dot.click(function() {
  index = $(this).index();
  console.log('INDEX', index);
  currentSlide(index);
});
