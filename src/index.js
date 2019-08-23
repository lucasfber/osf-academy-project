import './assets/scss/style.scss';
import $ from '../node_modules/jquery/dist/jquery';
import './assets/js/carousel';
import './assets/js/carousel-products';
import { addToShoppingBag } from './assets/js/action-bar';

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
    e.preventDefault();
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

  function showPassword() {
    inputPassword.attr('type', 'text');
  }

  function hidePassword() {
    inputPassword.attr('type', 'password');
  }

  function showModal() {
    headerMain.css('z-index', 0);
    modalLogin.css('display', 'flex');
  }

  function handleClickOutsideModal() {
    $(window).click(function() {
      $('.dropdown').hide();
      // console.log(headerMain.css('z-index'));
      /** AO MOSTRAR O MENU DA NAVBAR SETAR O Z-INDEX DO MAIN-HEADER DE VOLTA PRA 2 */
    });
    $(window).keydown(function(e) {
      const keyCode = e.keyCode;
      if (keyCode == 27) {
        modalLogin.hide();
      }
    });
  }

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
});
