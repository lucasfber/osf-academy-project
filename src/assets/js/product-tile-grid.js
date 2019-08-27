import $ from '../../../node_modules/jquery/dist/jquery.min';
import { addToShoppingBag, addToWishlist } from './action-bar';
const $buttonLoadMore = $('#button-load-more');
const $productTileGrid = $('.products-grid');

/**
 * @constant
 * @type {string}
 * An URI to a simple server which give us the json for products.
 */
const URI =
  'https://my-json-server.typicode.com/lucasfber/osf-database/products';

/**
 * Make AJAX request to server and get the product data (A JSON Array).
 *
 */
function getData() {
  const viewportWidth = $(window).width();
  let quantityProductTiles = viewportWidth < 1280 ? 2 : 4;

  $.get(URI, function(data, status) {
    shuffle(data);
    createGridRow(data.slice(0, quantityProductTiles));
  });
}

/**
 * Based on product.type value, returns the correct Product Tile markup to be append on the DOM
 * @param {object} product - an object literal representing a product
 * @returns A Node element represeting a Product Tile based on product.type property.
 */
export function createProductTile(product) {
  if (product.type === 1) {
    return createDefaultProductTile(product);
  } else if (product.type === 2) {
    return createNoOverlayProductTile(product);
  } else return createStaticProductTile(product);
}

/**
 * Creates a product tile type 1.
 * This is the default type. It consists of a image, name, price and a
 * gradient overlay with two buttons.
 * @param product - An object literal representing a product.
 * @returns A node element to be append on the DOM
 */
function createDefaultProductTile(product) {
  let productTile = $('<div></div>');

  let productTileImage = $('<div></div>');
  let productImage = $(`<img src=${product.imageUrl} />`);
  productImage.attr('alt', product.name);

  let productTileInfo = $('<div></div>');
  let productName = $(`<p>${product.name}</p>`);
  let productPrice = $(`<span>$ ${product.price}</span>`);

  let overlay = $('<div></div>');
  let overlayButtonBox = $('<div></div>');
  let buttonPlus = $('<div></div>');
  let buttonHeart = $('<div></div>');

  productTile.addClass('product-tile');

  productTileImage.addClass('product-tile__image');
  productTileImage.html(productImage); // WARNING WITH THIS

  productTileInfo.addClass('product-tile__info');
  productTileInfo.append(productName);
  productTileInfo.append(productPrice);

  buttonPlus.addClass('button-layer');
  buttonPlus.attr('id', 'btn-plus');

  buttonHeart.addClass('button-layer');
  buttonHeart.attr('id', 'btn-heart');

  buttonPlus.html(`<img src="img/plus.png" alt="Plus icon"/>`);
  buttonHeart.html(`<img src="img/heart.png" alt="Heart icon"/>`);

  overlayButtonBox.addClass('button-box');
  overlayButtonBox.append(buttonPlus);
  overlayButtonBox.append(buttonHeart);
  overlay.addClass('overlay overlay--green');
  overlay.append(overlayButtonBox);

  productTile.append(productTileImage);
  productTile.append(productTileInfo);
  productTile.append(overlay);

  buttonPlus.click(addToShoppingBag);
  buttonHeart.click(addToWishlist);
  return productTile;
}

/**
 * Creates a product tile type 2.
 * With this type, the product tile has links on its image, price and name
 * And also has button BUY NOW who increases the shopping bag's badge number
 * @param product - An object literal representing a product.
 * @returns A node element to be append on the DOM
 */
function createNoOverlayProductTile(product) {
  let productTile = $('<div></div>');

  let productTileImage = $('<div></div>');
  let productTileInfo = $('<div></div>');

  let productImageLink = $('<a></a>');
  let productNameLink = $(`<a></a>`);
  let priceBox = $('<div></div>');
  let priceBoxSpan = $('<span></span>');
  let priceLink = $(`<a>$ ${product.price}</a>`);
  let buttonBuyNowLink = $(`<a>BUY NOW</a>`);

  productImageLink.attr('href', 'product-detailed-page.html');

  let productImage = $(`<img src=${product.imageUrl} />`);
  productImage.attr('alt', product.name);

  productImageLink.append(productImage);

  productNameLink.attr('href', 'product-detailed-page.html');

  let productName = $(`<p>${product.name}</p>`);

  productNameLink.append(productName);

  priceLink.attr('href', 'product-detailed-page.html');
  priceLink.addClass('price');
  buttonBuyNowLink.addClass('btn-buy');
  buttonBuyNowLink.click(addToShoppingBag);

  productTileImage.append(productImageLink);

  priceBoxSpan.append(priceLink);
  priceBoxSpan.append(buttonBuyNowLink);

  priceBox.addClass('price-box');
  priceBox.append(priceBoxSpan);

  productTileInfo.append(productNameLink);
  productTileInfo.append(priceBox);

  productTile.addClass('product-tile');

  productTileImage.addClass('product-tile__image');

  productTileInfo.addClass('product-tile__info');

  productTile.append(productTileImage);
  productTile.append(productTileInfo);

  return productTile;
}

/**
 * Creates a product tile type 3.
 * It consists of a image + text and gradient as overlay
 * @param product - An object literal representing a product.
 * @returns A node element to be append on the DOM
 */
function createStaticProductTile(product) {
  let productTile = $('<div></div>');
  let productStaticImage = $(`<img src=${product.imageUrl} />`);
  let overlay = $('<div></div>');
  let overlayContent = $('<div></div>');
  let overlayText = $(
    `<p>My dragons are misbehaving again. Unbelieveable!</p>`
  );
  let overlayHour = $('<div></div>');
  let overlayHourIcon = $('<img />');
  overlayHourIcon.attr({
    src: 'img/layer-img.png',
    alt: 'User and Speech Bubble Icons'
  });

  let spanHour = $(`<span>5H AGO</span>`);

  productStaticImage.attr(
    'alt',
    'My dragons are misbehaving again. Unbelieveable!'
  );

  productTile.addClass('product-tile product-tile--static');
  overlay.addClass('overlay overlay--pink');
  overlayContent.addClass('overlay--pink__content');
  overlayHour.addClass('overlay--pink__hour');

  overlayHour.append(overlayHourIcon);
  overlayHour.append(spanHour);

  overlayContent.append(overlayText);
  overlayContent.append(overlayHour);

  overlay.append(overlayContent);

  productTile.append(productStaticImage);
  productTile.append(overlay);

  return productTile;
}

/**
 * Creates a number of product tiles based on array length passed as parameter
 * and append them on the DOM.
 * @param {*} products - The data (JSON array) who came from server.
 */
function createGridRow(products) {
  products.forEach(product => {
    const productTile = createProductTile(product);
    $productTileGrid.append(productTile);
  });
}

/**
 * It shuffles the array passed as parameter
 * @param {*} array - An array of items
 */
export function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

$buttonLoadMore.click(function() {
  getData();
});
