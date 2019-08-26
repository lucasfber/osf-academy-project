/* https://slickmedia.co.uk/blog/glenns-blog/limit-number-of-characters-in-div-jquery-css/ */
/* https://www.w3schools.com/howto/howto_js_scroll_to_top.asp */
import $ from '../../../node_modules/jquery/dist/jquery.slim';

const $buttonScroll = $('.button-scroll');

$buttonScroll.click(function() {
  scrollToTop();
});

const scrollToTop = () => {
  document.documentElement.scrollTop = 0;
};
