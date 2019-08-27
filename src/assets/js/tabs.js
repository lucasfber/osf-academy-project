import $ from '../../../node_modules/jquery/dist/jquery.slim';

const $tab = $('.tab');
const $tabs = $('.tabs');
const $tabInfoWrapper = $('.tab-info-wrapper');

const changeActiveTab = index => {
  $tabs.children().removeClass();
  $tabs.children().addClass('tab');
  $tabs
    .children()
    .eq(index)
    .addClass('tab tab--active');
};

const changeActiveTabInfo = index => {
  $tabInfoWrapper.children().removeClass();
  $tabInfoWrapper.children().addClass('tab-info');
  $tabInfoWrapper
    .children()
    .eq(index)
    .addClass('tab-info tab-info--active');
};

function showCurrentActiveTab($clickedTab) {
  let index = $clickedTab.index();

  changeActiveTab(index);
  changeActiveTabInfo(index);
}

$tab.click(function() {
  showCurrentActiveTab($(this));
});
