import $ from '../../../node_modules/jquery/dist/jquery.slim';

let dots = $('.products-slider__dot');
let productsSlides = $('.products-slider__content');

let index;

productsSlides
  .children()
  .eq(0)
  .css('display', 'block');

function setCurrentSlide(e) {
  productsSlides.children().css('display', 'none');

  index = $(e.currentTarget).index();

  // setting dot active
  dots.removeClass();
  dots.addClass('products-slider__dot');

  $(e.currentTarget)
    .removeClass()
    .addClass('products-slider__dot active');

  productsSlides
    .children()
    .eq(index)
    .css({ display: 'block', color: 'purple' });
  // carouselSlide.css('background-image', `url(./img/slide-${index}.png)`);
  // carouselSlide.removeClass().addClass(`carousel align-${index}`);
}

dots.click(setCurrentSlide);
