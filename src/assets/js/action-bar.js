import $ from '../../../node_modules/jquery/dist/jquery.slim';

const badgeWishlist = $('#badge-wishlist');
const badgeBag = $('#badge-bag');
const buttonPlus = $('#btn-plus');
const buttonHeart = $('#btn-heart');
const buttonBuyNow = $('.btn-buy');

let countWishlistItems = parseInt(badgeWishlist.text());
let countBagItems = parseInt(badgeBag.text());

buttonHeart.click(addToWishlist);

buttonPlus.click(addToShoppingBag);

buttonBuyNow.click(addToShoppingBag);

/**
 * Increases the number of the Wishlist's badge by 1.
 */
export const addToWishlist = function() {
  countWishlistItems = countWishlistItems + 1;
  badgeWishlist.text(countWishlistItems);
};

/**
 * Increases the number of the Shopping Bag's badge by 1.
 */
export function addToShoppingBag(e) {
  e.preventDefault();
  countBagItems = countBagItems + 1;
  badgeBag.text(countBagItems);
}
