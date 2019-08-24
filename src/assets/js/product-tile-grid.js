import $ from "../../../node_modules/jquery/dist/jquery.min";

const $buttonLoadMore = $("#button-load-more");
const $productTileGrid = $(".products-grid");

/**
 * @constant
 * @type {string}
 * An URI to a simple server which give us the json for products.
 */
const URI =
  "https://my-json-server.typicode.com/lucasfber/osf-database/products";

$buttonLoadMore.click(function() {
  getData();
});

/**
 * Make AJAX request to server and get the product data.
 *
 */
function getData() {
  $.get(URI, function(data, status) {
    //shuffle(data);
    //createGridRow(data.slice(0, 4));
    $productTileGrid.append(createStaticProductTile(data[0]));
  });
}

/**
 * Creates and styles the markup for a product tile
 * @param {object} product - an literal object representating a product
 * @returns the product tile's markup
 */
function createProductTile(product) {
  if (product.type === 1) {
    return createDefaultProductTile(product);
  } else if (product.type === 2) {
    return createProductTileWithoutOverlay(product);
  }
}

function createDefaultProductTile(product) {
  let productTile = $("<div></div>");

  let productTileImage = $("<div></div>");
  let productImage = $(`<img src=${product.imageUrl} />`);
  productImage.attr("alt", product.name);

  let productTileInfo = $("<div></div>");
  let productName = $(`<p>${product.name}</p>`);
  let productPrice = $(`<span>$ ${product.price}</span>`);

  let overlay = $("<div></div>");
  let overlayButtonBox = $("<div></div>");
  let buttonPlus = $("<div></div>");
  let buttonHeart = $("<div></div>");

  productTile.addClass("product-tile");

  productTileImage.addClass("product-tile__image");
  productTileImage.html(productImage); // WARNING WITH THIS

  productTileInfo.addClass("product-tile__info");
  productTileInfo.append(productName);
  productTileInfo.append(productPrice);

  buttonPlus.addClass("button-layer");
  buttonPlus.attr("id", "btn-plus");

  buttonHeart.addClass("button-layer");
  buttonHeart.attr("id", "btn-heart");

  buttonPlus.html(`<img src="img/plus.png" alt="Plus icon"/>`);
  buttonHeart.html(`<img src="img/heart.png" alt="Heart icon"/>`);

  overlayButtonBox.addClass("button-box");
  overlayButtonBox.append(buttonPlus);
  overlayButtonBox.append(buttonHeart);
  overlay.addClass("overlay overlay--green");
  overlay.append(overlayButtonBox);

  productTile.append(productTileImage);
  productTile.append(productTileInfo);
  productTile.append(overlay);

  return productTile;
}

function createNoOverlayProductTile(product) {
  let productTile = $("<div></div>");

  let productTileImage = $("<div></div>");
  let productTileInfo = $("<div></div>");

  let productImageLink = $("<a></a>");
  let productNameLink = $(`<a></a>`);
  let priceBox = $("<div></div>");
  let priceBoxSpan = $("<span></span>");
  let priceLink = $(`<a>$ ${product.price}</a>`);
  let buttonBuyNowLink = $(`<a>BUY NOW</a>`);

  productImageLink.attr("href", "product-detailed-page.html");

  let productImage = $(`<img src=${product.imageUrl} />`);
  productImage.attr("alt", product.name);

  productImageLink.append(productImage);

  productNameLink.attr("href", "product-detailed-page.html");

  let productName = $(`<p>${product.name}</p>`);

  productNameLink.append(productName);

  priceLink.attr("href", "product-detailed-page.html");
  priceLink.addClass("price");
  buttonBuyNowLink.attr("href", "#");
  buttonBuyNowLink.addClass("btn-buy");
  buttonBuyNowLink.click(function(e) {
    e.preventDefault();
  });

  productTileImage.append(productImageLink);

  priceBoxSpan.append(priceLink);
  priceBoxSpan.append(buttonBuyNowLink);

  priceBox.addClass("price-box");
  priceBox.append(priceBoxSpan);

  productTileInfo.append(productNameLink);
  productTileInfo.append(priceBox);

  productTile.addClass("product-tile");

  productTileImage.addClass("product-tile__image");

  productTileInfo.addClass("product-tile__info");

  productTile.append(productTileImage);
  productTile.append(productTileInfo);

  return productTile;
}

function createStaticProductTile(product) {
  let productTile = $("<div></div>");
  let productStaticImage = $(`<img src=${product.imageUrl} />`);
  let overlay = $("<div></div>");
  let overlayContent = $("<div></div>");
  let overlayText = $(
    `<p>My dragons are misbehaving again. Unbelieveable!</p>`
  );
  let overlayHour = $("<div></div>");
  let overlayHourIcon = $("<img />");
  overlayHourIcon.attr({
    src: "img/layer-img.png",
    alt: "User and Speech Bubble Icons"
  });

  let spanHour = $(`<span>5H AGO</span>`);

  productStaticImage.attr(
    "alt",
    "My dragons are misbehaving again. Unbelieveable!"
  );

  productTile.addClass("product-tile product-tile--static");
  overlay.addClass("overlay overlay--pink");
  overlayContent.addClass("overlay--pink__content");
  overlayHour.addClass("overlay--pink__hour");

  overlayHour.append(overlayHourIcon);
  overlayHour.append(spanHour);

  overlayContent.append(overlayText);
  overlayContent.append(overlayHour);

  overlay.append(overlayContent);

  productTile.append(productStaticImage);
  productTile.append(overlay);

  return productTile;
}

function createGridRow(products) {
  products.forEach(product => {
    const productTile = createProductTile(product);
    $productTileGrid.append(productTile);
  });
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
