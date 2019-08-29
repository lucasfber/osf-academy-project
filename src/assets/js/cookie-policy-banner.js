import $ from '../../../node_modules/jquery/dist/jquery.min';

const $buttonAccept = $('.cookie-policy-content > button');
const $cookiePolicyBanner = $('.cookie-policy-banner');
const $buttonClosePolicyBanner = $('.button-close-banner');

/**
 * Tests if acceptCookiePolicy flag is not equals to true.
 * If the result is true, then shows up the Cookie Policy Banner
 */
const showCookiePolicyBanner = () => {
  if (localStorage.getItem('acceptCookiePolicy') !== 'true') {
    $cookiePolicyBanner.fadeIn();
  }
};

/**
 * Dispose the Cookie Policy Banner setting display to none
 */
const closeCookieBanner = () => {
  $cookiePolicyBanner.hide();
};

/**
 * Tests if the browser implements Local Storage funcionality.
 * If true, then sets a item named acceptCookiePolicy to true, it will
 * be the flag used to show or not the Cookie Policy Banner
 */
const handleAcceptCookiePolicy = () => {
  if (typeof Storage !== 'undefined') {
    localStorage.setItem('acceptCookiePolicy', true);
    closeCookieBanner();
  } else {
    alert('Local Storage feature is not supported by your browser.');
  }
};

$buttonClosePolicyBanner.click(function() {
  closeCookieBanner();
});

$buttonAccept.click(function() {
  handleAcceptCookiePolicy();
});

setTimeout(showCookiePolicyBanner, 4000);
