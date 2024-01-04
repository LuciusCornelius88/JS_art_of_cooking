import * as switchTheme from './switch_theme_functions.js';

const ACTIVE_NAVLINK_KEY = 'current_active_navlink';

const switcher = document.querySelector('.theme-switcher-btn');
const homeLink = document.querySelector('a[data-type="home"]');
const navLinks = document.querySelectorAll('.header-nav-list-item__link');

onLoad();

function onLoad() {
  navLinks.forEach((link) => link.addEventListener('click', onNavLinkClick));
  switcher.addEventListener('click', onSwitcherClick);

  defineActivePage();
}

function defineActivePage() {
  const currentActiveLinkId = localStorage.getItem(ACTIVE_NAVLINK_KEY);

  if (currentActiveLinkId) {
    const currentActiveLink = document.querySelector(`a[data-type="${currentActiveLinkId}"]`);
    currentActiveLink.classList.add('is-active');
  } else {
    homeLink.classList.add('is-active');
  }
}

function onNavLinkClick({ target }) {
  if (!target.classList.contains('is-active')) {
    const currentActiveLink = document.querySelector('.header-nav-list-item__link.is-active');
    currentActiveLink.classList.remove('is-active');
    localStorage.setItem(ACTIVE_NAVLINK_KEY, target.getAttribute('data-type'));
  }
}

function onSwitcherClick() {
  const { switcherCircle } = switchTheme;
  const { switcherToDark, switcherToLight, switcherToDarkInit } = switchTheme;
  const { switchToDark, switchToLight } = switchTheme;

  if (switcherCircle.classList.contains('switcher-icon-circle__init')) {
    switcherToDark();
    switchToDark();
  } else if (switcherCircle.classList.contains('switcher-icon-circle__revert')) {
    switcherToLight();
    switchToLight();
  } else {
    switcherToDarkInit();
    switchToDark();
  }
}
