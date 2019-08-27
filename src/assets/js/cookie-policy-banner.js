import $ from '../../../node_modules/jquery/dist/jquery.min';

const $buttonAccept = $('.cookie-policy-content > button');
const $cookiePolicyBanner = $('.cookie-policy-banner');

$buttonAccept.click(function() {
  if (typeof Storage !== 'undefined') {
    localStorage.setItem('acceptCookiePolicy', true);
    closeCookieBanner();
  } else {
    console.log('nao suportado');
  }
});

const showCookiePolicyBanner = () => {
  if (localStorage.getItem('acceptCookiePolicy') !== 'true') {
    $cookiePolicyBanner.fadeIn();
  }
};

const closeCookieBanner = () => {
  $cookiePolicyBanner.hide();
};

setTimeout(showCookiePolicyBanner, 10000);
