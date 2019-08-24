import $ from "../../../node_modules/jquery/dist/jquery.slim";

const $buttonLT = $(".btn-lt");
const $buttonGT = $(".btn-gt");

let alternSlides = false;

$buttonLT.click(showFirstSlides);

$buttonGT.click(showSecondSlides);

function showFirstSlides() {
  $(".featured-products-slider .product-tile")
    .slice(0, 4)
    .css("display", "block");
  $(".featured-products-slider .product-tile")
    .slice(4, 8)
    .css("display", "none");

  alternSlides = !alternSlides;
}

function showSecondSlides() {
  $(".featured-products-slider .product-tile")
    .slice(0, 4)
    .css("display", "none");
  $(".featured-products-slider .product-tile")
    .slice(4, 8)
    .css("display", "block");

  alternSlides = !alternSlides;
}

/* setInterval(function() {
  if (!alternSlides) {
    showSecondSlides();
  } else {
    showFirstSlides();
  }
}, 4000); */
