import $ from '../../../node_modules/jquery/dist/jquery.slim';

const $productCheckout = $('.product-checkout-wrapper .product-checkout');
const $buttonMinus = $('.quantity-input-box .minus');
const $buttonPlus = $('.quantity-input-box .plus');
const $buttonRemoveProduct = $('.button-remove-product');
const $cartSubtotal = $('.cart-subtotal__price span');
const $shippingPriceInput = $('.shipping');
const $orderTotalValue = $('.order-total-box h2');

let currentShippingPrice = 0;

$buttonRemoveProduct.click(function() {
  removeProduct($(this));
});

$buttonMinus.click(function() {
  let parent = $(this).parents('.product-checkout');
  let input = $(this).siblings('.quantity-input');

  if (decreaseQuantity(input)) {
    setProductsPrice(parent);
    setValues();
  }
});

$buttonPlus.click(function() {
  let parent = $(this).parents('.product-checkout');
  let input = $(this).siblings('.quantity-input');
  increaseQuantity(input);
  setProductsPrice(parent);
  setValues();
  // let $productCheckout = $(this).parents('.product-checkout');
  // setSubtotalCartValue($productCheckout);
  // let unitPrice = $productCheckout
  //   .children('.product-info-box')
  //   .children('.product-info')
  //   .children('p')
  //   .children('.product-info__price')
  //   .html();
  // let input = $(this).siblings('.quantity-input');
  // increaseQuantity(input);
  // let price = $(this)
  //   .parent()
  //   .siblings('.product-price')
  //   .children('.price-span')
  //   .text();
  // updateProductPrices(
  //   $(this).parents('.product-checkout'),
  //   parseFloat(unitPrice)
  // );
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

  return productsPrice;
};

const setProductsPrice = $parent => {
  const quantity = getQuantityProduct($parent);
  const productsPrice = getProductsPrice($parent);
  const unitPrice = getUnitPrice($parent);
  let totalProductsPrice = unitPrice * quantity;
  productsPrice.text(totalProductsPrice.toFixed(2));
};

const setCartSubtotal = sumCartSubtotal => {
  $cartSubtotal.text(sumCartSubtotal);
};

const getCartSubtotal = () => {
  return parseInt($cartSubtotal.text());
};

const setTotalOrderValue = function() {
  const cartSubTotal = getCartSubtotal();
  const currentShipping = getCurrentShippingPrice();
  let sum = cartSubTotal + currentShipping;

  $orderTotalValue.text(`$${sum}`);
};

const getCurrentShippingPrice = () => {
  return parseInt(currentShippingPrice);
};

const setValues = () => {
  let $products = $('.product-checkout');
  let sumCartSubtotal = 0;

  $products.each(function() {
    const unitPrice = getUnitPrice($(this));
    const quantity = getQuantityProduct($(this));

    setProductsPrice($(this));
    const $productsPrice = getProductsPrice($(this));
    sumCartSubtotal = sumCartSubtotal + parseFloat($productsPrice.html());
    console.log('ssc', sumCartSubtotal);
  });
  console.log('sscFinal', sumCartSubtotal);
  setCartSubtotal(sumCartSubtotal);
  setTotalOrderValue();
};

const decreaseQuantity = input => {
  let inputValue = parseInt(input.val());
  if (inputValue >= 2) {
    inputValue = inputValue - 1;
    input.val(inputValue);
    return true;
  } else return false;
};

const increaseQuantity = input => {
  let inputValue = parseInt(input.val());
  inputValue = inputValue + 1;
  input.val(inputValue);
};

const removeProduct = product => {
  product.parents('.product-checkout').remove();

  setValues();
};

$shippingPriceInput.click(function() {
  currentShippingPrice = $(this).val();
  setTotalOrderValue();
});

setValues();
