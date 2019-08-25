import $ from "../../../node_modules/jquery/dist/jquery.slim";

const $buttonHideFilter = $(".filters-container > span");
const $filters = $(".filter-box");
let isVisible = true;
let buttonText = "";

$buttonHideFilter.click(function() {
  toggleFilter();
});

/**
 * Function to toggle the filter section and changes the button text to "Hide Filter" or "Show Filter"
 */
function toggleFilter() {
  buttonText = isVisible ? "Show Filter" : "Hide Filter";
  $buttonHideFilter.text(buttonText);
  $filters.toggle();
  isVisible = !isVisible;
}
