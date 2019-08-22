let slideIndex = 1;

showSlides(slideIndex);

function currentSlide(n) {
  console.log("Chamei", n);
  showSlides(n);
}

function showSlides(n) {
  slideIndex = n;
  let i;

  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
