import $ from '../../../node_modules/jquery/dist/jquery.min';

const $buttonAccept = $('.cookie-policy-content > button');
const $cookiePolicyBanner = $('.cookie-policy-banner');
const $buttonClosePolicyBanner = $('.button-close-banner');

const showCookiePolicyBanner = () => {
  if (localStorage.getItem('acceptCookiePolicy') !== 'true') {
    $cookiePolicyBanner.fadeIn();
  }
};

const closeCookieBanner = () => {
  $cookiePolicyBanner.hide();
};

$buttonAccept.click(function() {
  if (typeof Storage !== 'undefined') {
    localStorage.setItem('acceptCookiePolicy', true);
    closeCookieBanner();
  } else {
    console.log('nao suportado');
  }
});

$buttonClosePolicyBanner.click(function() {
  closeCookieBanner();
});

setTimeout(showCookiePolicyBanner, 2000);
