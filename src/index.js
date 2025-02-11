import './assets/scss/style.scss';
import $ from '../node_modules/jquery/dist/jquery';
import './assets/js/carousel';
import './assets/js/carousel-products';
import './assets/js/action-bar';
import './assets/js/product-tile-grid';
import './assets/js/feature-products-slider';
import './assets/js/category-landing';
import './assets/js/product-detailed';
import './assets/js/cookie-policy-banner';
import './assets/js/tabs';
import './assets/js/cart-page';

import { disposeModalOnEscKeyPressed } from './assets/js/util';

$(document).ready(function() {
  const dropdown = $('.navbar ul li');
  const headerMain = $('.header-main');
  const btnMenu = $('.btn-close');
  const btnClose = $('.btn-menu');
  const navbar = $('.navbar');
  const footerHeader = $('footer h4');
  const navbarLink = $('.navbar ul li a');
  const menuItem = $('.menu__menu-item h4');
  let togglerPassword = $('#toggler');
  let inputPassword = $('#password');
  let userIcon = $('.flaticon-man');
  let modalLogin = $('.modal-login');
  let modalLoginForm = $('.modal-login__form'); // is this variable really necessary?
  const $languageDropdownLink = $('.navbar ul li:nth-child(5) a');
  const $currencyDropdownLink = $('.navbar ul li:nth-child(6) a');

  $currencyDropdownLink.click(function(e) {
    e.preventDefault();
  });

  $languageDropdownLink.click(function(e) {
    e.preventDefault();
  });

  menuItem.click(function(e) {
    e.stopPropagation();
    $(this)
      .parent()
      .children('.menu__submenu')
      .toggle();
  });

  footerHeader.click(function() {
    $(this)
      .parent()
      .children('.wrapper')
      .toggle();

    $(this)
      .children('span.icon')
      .children('i')
      .toggleClass('flaticon-caret-down')
      .toggleClass('flaticon-arrow');
  });

  navbarLink.click(function(e) {
    $(this)
      .parent()
      .children('.menu')
      .toggle();
  });

  function setCurrentYear() {
    let currentYear = $('#current-year');
    currentYear.text(new Date().getFullYear());
  }

  function toggleMenu() {
    btnMenu.toggle();
    btnClose.toggle();
    navbar.toggle();
  }

  function toggleDropdown(e) {
    $('.dropdown').hide();
    e.stopPropagation();
    $(e.currentTarget)
      .children('.dropdown')
      .toggle();
  }

  /**
   *
   * Change the input type to text, making the password visible
   */
  function showPassword() {
    inputPassword.attr('type', 'text');
  }

  /**
   *
   * Changes back the input type to password, hiding the password
   */
  function hidePassword() {
    inputPassword.attr('type', 'password');
  }

  /**
   *
   * Show the login modal
   */
  function showModal() {
    headerMain.css('z-index', 0);
    modalLogin.css('display', 'flex');
  }

  function handleClickOutsideModal() {
    $(window).click(function() {
      $('.dropdown').hide();
    });

    disposeModalOnEscKeyPressed(modalLogin);
  }

  function disposeModal() {}

  btnMenu.click(toggleMenu);

  btnClose.click(toggleMenu);

  modalLogin.click(function(e) {
    if (e.target === this) {
      modalLogin.css('display', 'none');
      modalLoginForm.trigger('reset');
    }
  });

  userIcon.click(function() {
    showModal();
  });

  togglerPassword.mousedown(function() {
    showPassword();
  });
  togglerPassword.mouseup(function() {
    hidePassword();
  });

  dropdown.click(function(e) {
    toggleDropdown(e);
  });

  setCurrentYear();
  handleClickOutsideModal();
  disposeModalOnEscKeyPressed(modalLogin);
});
