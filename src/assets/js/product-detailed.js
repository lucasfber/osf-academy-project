import $ from '../../../node_modules/jquery/dist/jquery.slim';

import { disposeModalOnEscKeyPressed } from './util';
import { addToShoppingBag } from './action-bar';

const $buttonScroll = $('.button-scroll');
const $productDescriptionWrapper = $('.product-detail__description p');

const $modalFullImage = $('.modal-full-image');
const $modalImage = $('.full-image-wrapper > img');
const $buttonZoom = $('.button-zoom');
const $buttonCloseModal = $('.modal-close');
const $buttonPlus = $('.plus');
const $buttonMinus = $('.minus');
const $buttonAddToCart = $('.button-add-to-cart');
const $buttonReadMore = $('.button-read-more');
const $buttonPrintPage = $('.button-print-page');
const $productImage = $('.product-detailed__image > img');
const $productThumbnail = $('.thumbnails-box img');
const $lastSliderDot = $('.slider-dot:nth-child(4)');
const $sliderDots = $('.slider-dot');
const $colorChoosed = $('.color-choosed');
const $selectColor = $('.select-color');
const $quantityInput = $('.product-detailed__quantity > input');

let currentImageSrc;
const characterCount = $productDescriptionWrapper.text().length;
const fullTextDescription = $productDescriptionWrapper.text();
let isTextHide = true;

$buttonAddToCart.click(function(e) {
  addProductToCart(e);
});

$buttonPlus.click(function() {
  increaseQuantity();
});

$buttonMinus.click(function() {
  decreaseQuantity();
});

/**
 * Changes the input's quantity, increasing by 1
 */
const increaseQuantity = () => {
  let currentQuantity = parseInt($quantityInput.val());

  currentQuantity = currentQuantity + 1;
  $quantityInput.val(currentQuantity);
};

/**
 * Changes the input's quantity, decreasing by 1
 */
const decreaseQuantity = () => {
  let currentQuantity = parseInt($quantityInput.val());
  if (currentQuantity >= 2) {
    currentQuantity = currentQuantity - 1;
    $quantityInput.val(currentQuantity);
  }
};

$selectColor.click(function() {
  changeSelectColor($(this));
});

/**
 * Move slides according to the dot clicked
 */
$sliderDots.click(function() {
  const dotIndex = $(this).index();
  moveSlider(dotIndex);

  setCurrentDotActive($(this));
});

/**
 * Changes color when the user choose an option on select
 */
const changeSelectColor = selectInput => {
  const optionValue = selectInput.val();
  $colorChoosed.css('background-color', optionValue);
};

/**
 * Puts a border on active slider's dot
 */
function setCurrentDotActive($dot) {
  $sliderDots.removeClass('active');
  $dot.addClass('slider-dot active');
}

/**
 * Changes the 3 thumbnails images on slider, according with the choosen dot
 */
function moveSlider(dotIndex) {
  if (dotIndex === 3) {
    $productThumbnail.get(0).src = `img/pg-2.jpg`;
    $productThumbnail.get(1).src = `img/pg-3.jpg`;
    $productThumbnail.get(2).src = `img/pg-4.jpg`;
  } else {
    $productThumbnail.get(0).src = `img/pg-1.jpg`;
    $productThumbnail.get(1).src = `img/pg-2.jpg`;
    $productThumbnail.get(2).src = `img/pg-3.jpg`;
  }
}

/**
 * Changes the current product image, when the user click on a thumbnail
 */
$productThumbnail.click(function(e) {
  let currentThumbnailSrc = $(this).attr('src');
  $productThumbnail.removeClass();
  $(this).addClass('choosed');
  currentImageSrc = currentThumbnailSrc.replace('img/', 'img/lg-');
  $productImage.attr('src', currentImageSrc);
});

$buttonCloseModal.click(function() {
  $modalFullImage.hide();
});

/**
 * Open the full product image modal
 */
$buttonZoom.click(function() {
  let productImageSrc = $productImage.attr('src');
  $modalImage.attr('src', productImageSrc);

  $modalFullImage.css('display', 'flex');
});

/**
 * Scrolls smoothly to the top of the page
 */
const scrollToTop = () => {
  document.documentElement.scrollTop = 0;
};

/**
 * Hides description text
 */
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

/**
 * Shows description text
 */
const showText = () => {
  $productDescriptionWrapper.text(fullTextDescription);
  $buttonReadMore.text('Show less');
};

/**
 * Alterns flag to show/hide the description text
 */
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

/**
 * Increases shopping bag's badge according to the input value
 */
const addProductToCart = function(e) {
  let quantity = parseInt($quantityInput.val());
  addToShoppingBag(e, quantity);
};

/**
 * Calls the default printer to print out the page according to FSD
 */
const printCurrentPage = () => {
  window.print();
};

$buttonPrintPage.click(function() {
  printCurrentPage();
});

hideText();

/**
 * Dispose modal when the user clicks on ESC key
 */
disposeModalOnEscKeyPressed($modalFullImage);
