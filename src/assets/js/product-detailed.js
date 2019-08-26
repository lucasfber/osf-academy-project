import $ from '../../../node_modules/jquery/dist/jquery.slim';

const $buttonScroll = $('.button-scroll');
const $productDescriptionWrapper = $('.product-detail__description p');
const $buttonReadMore = $('.button-read-more');

const characterCount = $productDescriptionWrapper.text().length;
const fullTextDescription = $productDescriptionWrapper.text();
let isTextHide = true;

/**
 * Scrolls smoothly to the top of the page
 */
const scrollToTop = () => {
  document.documentElement.scrollTop = 0;
};

const hideText = () => {
  if (characterCount > 100) {
    $productDescriptionWrapper.text(
      $($productDescriptionWrapper)
        .text()
        .substr(0, 100)
    );
    $buttonReadMore.text('Read more');
  }
};

const showText = () => {
  $productDescriptionWrapper.text(fullTextDescription);
  $buttonReadMore.text('Show less');
};

const toggleDescription = () => {
  isTextHide ? showText() : hideText();
  isTextHide = !isTextHide;
};

$buttonScroll.click(function() {
  scrollToTop();
});

$buttonReadMore.click(function() {
  toggleDescription();
});

hideText();
