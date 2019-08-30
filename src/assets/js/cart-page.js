import $ from '../../../node_modules/jquery/dist/jquery.slim';

const $productCheckout = $('.product-checkout-wrapper .product-checkout');
const $buttonMinus = $('.quantity-input-box .minus');
const $buttonPlus = $('.quantity-input-box .plus');
const $cartSubtotal = $('.cart-subtotal__price span');
const $shippingPriceInput = $('.shipping');
const $orderTotalValue = $('.order-total-box h2');

$buttonMinus.click(function() {
  let parent = $(this).parents('.product-checkout');
  let input = $(this).siblings('.quantity-input');
  decreaseQuantity(input);
  setProductsPrice(parent);
  // //
});

const getUnitPrice = $parent => {
  let unitPrice = $parent
    .children('.product-info-box')
    .children('.product-info')
    .children('p')
    .children('.product-info__price')
    .html();

  return parseFloat(unitPrice).toFixed(3);
};

const getQuantityProduct = $parent => {
  let productQuantity = $parent
    .children('.product-price-box')
    .children('.quantity-input-box')
    .children('.quantity-input');

  return parseInt(productQuantity.val());
};

const getProductsPrice = $parent => {
  let productsPrice = $parent
    .children('.product-price-box')
    .children('.product-price')
    .children('.price-span');

  console.log('pp', productsPrice);
  return productsPrice;
};

const setProductsPrice = $parent => {
  const quantity = getQuantityProduct($parent);
  console.log('qtt in spp', quantity);
  console.log('quantity', quantity);
  const productsPrice = getProductsPrice($parent);
  console.log('pponSets', productsPrice);
  const unitPrice = getUnitPrice($parent);
  console.log('up', unitPrice);
  let totalProductsPrice = unitPrice * quantity;
  // console.log(totalProductsPrice.toFixed(3));
  //totalProductsPrice = totalProductsPrice.toFixed(3);

  productsPrice.text(totalProductsPrice.toFixed(3));
};

const setValues = () => {
  let $products = $('.product-checkout');

  $products.each(function() {
    const unitPrice = getUnitPrice($(this));
    const quantity = getQuantityProduct($(this));
    const $productsPrice = getProductsPrice($(this));
    setProductsPrice($(this));
  });

  // let unitPrice = $productsCheckout
  //   .children('.product-info-box')
  //   .children('.product-info')
  //   .children('p')
  //   .children('.product-info__price')
  //   .html();

  // let productQuantity = $(this).siblings('.quantity-input');

  // let price = $(this)
  //   .parent()
  //   .siblings('.product-price')
  //   .children('.price-span')
  //   .text();

  // $products.each(function(index, element) {
  //   let finalProductPrice = $(this)
  //     .children('.product-price-box')
  //     .children('.product-price')
  //     .children('.price-span');
  // });
};

setValues();

$buttonPlus.click(function() {
  let $productCheckout = $(this).parents('.product-checkout');

  setSubtotalCartValue($productCheckout);

  let unitPrice = $productCheckout
    .children('.product-info-box')
    .children('.product-info')
    .children('p')
    .children('.product-info__price')
    .html();

  let input = $(this).siblings('.quantity-input');
  increaseQuantity(input);

  let price = $(this)
    .parent()
    .siblings('.product-price')
    .children('.price-span')
    .text();

  updateProductPrices(
    $(this).parents('.product-checkout'),
    parseFloat(unitPrice)
  );
});

const updateProductPrices = function($product, unitPrice) {
  console.log(typeof unitPrice);
  const $productPriceBox = $product.children('.product-price-box');
  const $quantityInput = $productPriceBox
    .children('.quantity-input-box')
    .children('.quantity-input');

  const $productPrice = $productPriceBox
    .children('.product-price')
    .children('.price-span');

  const finalProductPrice = parseInt($quantityInput.val()) * unitPrice;
  console.log('fpp', finalProductPrice);
  $productPrice.html(finalProductPrice.toFixed(3));
};

const decreaseQuantity = input => {
  let inputValue = parseInt(input.val());
  if (inputValue >= 2) {
    inputValue = inputValue - 1;
    input.val(inputValue);
  }
};

const increaseQuantity = input => {
  let inputValue = parseInt(input.val());
  inputValue = inputValue + 1;
  input.val(inputValue);
};

const setSubtotalCartValue = () => {
  const $products = $('.product-checkout-wrapper .product-checkout');
  let subtotalValue = 0;

  $products.each(function(index, element) {
    let finalProductPrice = $(this)
      .children('.product-price-box')
      .children('.product-price')
      .children('.price-span');

    subtotalValue = subtotalValue + parseFloat(finalProductPrice.html());
  });

  $cartSubtotal.html(subtotalValue);
  return subtotalValue;
};

const setOrderTotalValue = function(subTotalValue, shippingPrice) {
  let sum = subTotalValue + shippingPrice;
  console.log(sum);
  $orderTotalValue.text('asd');
};

const subTotalvalue = setSubtotalCartValue();

$shippingPriceInput.click(function() {
  let shippingPrice = $(this).val();
  setOrderTotalValue(subTotalvalue, parseInt(shippingPrice));
});

//setOrderTotalValue(subTotalvalue, shippingPrice);
