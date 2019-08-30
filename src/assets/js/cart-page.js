import $ from "../../../node_modules/jquery/dist/jquery.slim";

const $productCheckout = $(".product-checkout-wrapper .product-checkout");
const $buttonMinus = $(".quantity-input-box .minus");
const $buttonPlus = $(".quantity-input-box .plus");
const $cartSubtotal = $(".cart-subtotal__price span");
const $shippingPriceInput = $(".shipping");
const $orderTotalValue = $(".order-total-box h2");

$buttonMinus.click(function() {
  let input = $(this).siblings(".quantity-input");
  decreaseQuantity(input);
});

$buttonPlus.click(function() {
  let $productCheckout = $(this).parents(".product-checkout");

  setSubtotalCartValue($productCheckout);

  let unitPrice = $productCheckout
    .children(".product-info-box")
    .children(".product-info")
    .children("p")
    .children(".product-info__price")
    .html();

  let input = $(this).siblings(".quantity-input");
  increaseQuantity(input);
  let price = $(this)
    .parent()
    .siblings(".product-price")
    .children(".price-span")
    .text();

  updateProductPrices(
    $(this).parents(".product-checkout"),
    parseFloat(unitPrice)
  );
});

const updateProductPrices = function($product, unitPrice) {
  console.log(typeof unitPrice);
  const $productPriceBox = $product.children(".product-price-box");
  const $quantityInput = $productPriceBox
    .children(".quantity-input-box")
    .children(".quantity-input");

  const $productPrice = $productPriceBox
    .children(".product-price")
    .children(".price-span");

  const finalProductPrice = parseInt($quantityInput.val()) * unitPrice;
  console.log("fpp", finalProductPrice);
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
  const $products = $(".product-checkout-wrapper .product-checkout");
  let subtotalValue = 0;

  $products.each(function(index, element) {
    let finalProductPrice = $(this)
      .children(".product-price-box")
      .children(".product-price")
      .children(".price-span");

    subtotalValue = subtotalValue + parseFloat(finalProductPrice.html());
  });

  $cartSubtotal.html(subtotalValue);
  return subtotalValue;
};

const setOrderTotalValue = function(subTotalValue, shippingPrice) {
  let sum = subTotalValue + shippingPrice;
  console.log(sum);
  $orderTotalValue.text("asd");
};

const subTotalvalue = setSubtotalCartValue();

$shippingPriceInput.click(function() {
  let shippingPrice = $(this).val();
  setOrderTotalValue(subTotalvalue, parseInt(shippingPrice));
});

//setOrderTotalValue(subTotalvalue, shippingPrice);
