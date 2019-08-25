import $ from "../../../node_modules/jquery/dist/jquery.min";
import { addToShoppingBag, addToWishlist } from "./action-bar";
import { shuffle, createProductTile } from "./product-tile-grid";
/**
 * @constant
 * @type {string}
 * An URI to a simple server which give us the json for products.
 */
const URI =
  "https://my-json-server.typicode.com/lucasfber/osf-database/products";
const $buttonHideFilter = $(".filters-container > span");
const $buttonLoadMore = $(".products-tile-wrapper > button");
const $filters = $(".filter-box");
let isVisible = true;
let buttonText = "";

/**
 * Function to toggle the filter section and changes the button text to "Hide Filter" or "Show Filter"
 */
function toggleFilter() {
  buttonText = isVisible ? "Show Filter" : "Hide Filter";
  $buttonHideFilter.text(buttonText);
  $filters.toggle();
  isVisible = !isVisible;
}

/**
 * Make a AJAX request to URI, get the data, shuffles it, and append to the DOM
 */
function loadMore() {
  $.get(URI, function(data) {
    let filteredData = filterData(data);

    shuffle(filteredData);

    const productTile = createProductTile(filteredData[0]);
    appendToDOM(productTile);
  });
}

/**
 * Append the productNode param on the DOM, before Load More button
 * @param {object} productNode - a Product Tile markup
 */
function appendToDOM(productNode) {
  $buttonLoadMore.before(productNode);
}

/**
 * Filters a array and returns the array containing only products type 1
 * @param {array} data - representing a array to be filtered.
 * @returns {array} data - the filtered array containing only products with type equals to 1
 */
function filterData(data) {
  return data.filter(product => {
    return product.type === 1;
  });
}

$buttonHideFilter.click(function() {
  toggleFilter();
});

$buttonLoadMore.click(function() {
  loadMore();
});
