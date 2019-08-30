import $ from '../../../node_modules/jquery/dist/jquery.slim';

const $tab = $('.tab');
const $tabs = $('.tabs');
const $tabInfoWrapper = $('.tab-info-wrapper');

/**
 * Changes to the active tab, updating the class
 */
const changeActiveTab = index => {
  $tabs.children().removeClass();
  $tabs.children().addClass('tab');
  $tabs
    .children()
    .eq(index)
    .addClass('tab tab--active');
};

/**
 * Shows the info associated with the choosen tab
 */
const changeActiveTabInfo = index => {
  $tabInfoWrapper.children().removeClass();
  $tabInfoWrapper.children().addClass('tab-info');
  $tabInfoWrapper
    .children()
    .eq(index)
    .addClass('tab-info tab-info--active');
};

/**
 * Changes the active tab, and its info. calling changeActiveTabInfo and changeActiveTab functions
 */
function showCurrentActiveTab($clickedTab) {
  let index = $clickedTab.index();

  changeActiveTab(index);
  changeActiveTabInfo(index);
}

$tab.click(function() {
  showCurrentActiveTab($(this));
});
