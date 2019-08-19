import './assets/scss/style.scss';
import $ from '../node_modules/jquery/dist/jquery';

$(document).ready(function() {
  const dropdown = $('.navbar ul li');
  const btnMenu = $('.btn-menu');
  const btnClose = $('.btn-close');
  const menu = $('.menu');
  let togglerPassword = $('#toggler');
  let inputPassword = $('#password');
  let userIcon = $('.flaticon-man');
  let modalLogin = $('.modal-login');
  let modalLoginForm = $('.modal-login__form'); // is this variable really necessary?

  function setCurrentYear() {
    let currentYear = $('#current-year');
    currentYear.text(new Date().getFullYear());
  }

  function toggleMenu() {
    btnMenu.toggle();
    btnClose.toggle();
    menu.toggle();
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
    modalLogin.css('display', 'flex');
  }

  function handleClickOutsideModal() {
    $(window).click(function() {
      $('.dropdown').hide();
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
