import $ from '../../../node_modules/jquery/dist/jquery.slim';

const badgeWishlist = $('#badge-wishlist');
const badgeBag = $('#badge-bag');
const buttonPlus = $('.button-layer--plus');
const buttonHeart = $('.button-layer--heart');
const buttonBuyNow = $('.btn-buy');

let countWishlistItems = parseInt(badgeWishlist.text());
let countBagItems = parseInt(badgeBag.text());

/**
 * Increases the number of the Wishlist's badge by 1.
 */
export function addToWishlist() {
  countWishlistItems = countWishlistItems + 1;
  badgeWishlist.text(countWishlistItems);
}

/**
 * Increases the number of the Shopping Bag's badge by 1.
 */
export function addToShoppingBag(e, productQuantity = 1) {
  e.preventDefault();
  countBagItems = countBagItems + productQuantity;
  badgeBag.text(countBagItems);
}

buttonHeart.click(addToWishlist);

buttonPlus.click(addToShoppingBag);

buttonBuyNow.click(addToShoppingBag);
