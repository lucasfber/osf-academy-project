import $ from '../../../node_modules/jquery/dist/jquery.slim';

const dots = $('.products-slider__dot');
const productsSlides = $('.products-slider__content');

setFirstSlideVisible();

dots.click(setCurrentSlide);

/**
 * Handle the current slide change
 */
function setCurrentSlide(e) {
  productsSlides.children().css('display', 'none');

  const index = $(e.currentTarget).index();

  setActiveDot(e);

  productsSlides
    .children()
    .eq(index)
    .css('display', 'block');
}

/**
 * Change the dot's style to show it is visbile
 */
function setActiveDot(e) {
  dots.removeClass();
  dots.addClass('products-slider__dot');

  $(e.currentTarget)
    .removeClass()
    .addClass('products-slider__dot active');
}

/**
 * Sets the first child product tile to visible
 */
function setFirstSlideVisible() {
  productsSlides
    .children()
    .eq(0)
    .css('display', 'block');
}
