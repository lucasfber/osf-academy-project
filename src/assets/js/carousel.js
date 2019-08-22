import $ from '../../../node_modules/jquery/dist/jquery.slim';

let dots = $('.carousel__controls-dot');
let carouselSlide = $('.carousel');
let index;

function setCurrentSlide(e) {
  index = $(e.currentTarget).index();
  dots.removeClass();
  dots.addClass('carousel__controls-dot');

  $(e.currentTarget)
    .removeClass()
    .addClass('carousel__controls-dot active');

  carouselSlide.css('background-image', `url(./img/slide-${index}.png)`);
  carouselSlide.removeClass().addClass(`carousel align-${index}`);
}

dots.click(setCurrentSlide);

// dots.click(function() {
//   index = $(this).index();
//   dots.removeClass();
//   dots.addClass('carousel__controls-dot');

//   $(this)
//     .removeClass()
//     .addClass('carousel__controls-dot active');

//   carouselSlide.css('background-image', `url(./img/slide-${index}.png)`);
//   carouselSlide.removeClass().addClass(`carousel align-${index}`);
// });
