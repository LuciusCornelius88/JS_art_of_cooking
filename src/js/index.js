import {
  switcherCircle,
  switcherToDark,
  switcherToLight,
  switcherToLightInit,
  switcherToDarkInit,
  switchToDark,
  switchToLight,
} from './switch_theme_functions.js';

const ACTIVE_NAVLINK_KEY = 'current_active_navlink';
const ACTIVE_STATUS = 'is-active';
const CURRENT_SWITCHER_STATUS = 'current_switcher_status';
const SWITCHER_LIGHT_STATUS = 'switcher-icon-circle__home';
const SWITCHER_DARK_STATUS = 'switcher-icon-circle__revert';

const switcher = document.querySelector('.theme-switcher-btn');
const homeLink = document.querySelector('a[data-type="home"]');
const navLinks = document.querySelectorAll('.header-nav-list-item__link');

onLoad();

function onLoad() {
  navLinks.forEach((link) => link.addEventListener('click', onNavLinkClick));
  switcher.addEventListener('click', onSwitcherClick);

  defineActivePage();
  defineSwitcherStatus();
}

function defineActivePage() {
  const currentActiveLinkId = localStorage.getItem(ACTIVE_NAVLINK_KEY);

  if (currentActiveLinkId) {
    const currentActiveLink = document.querySelector(`a[data-type="${currentActiveLinkId}"]`);
    currentActiveLink.classList.add(ACTIVE_STATUS);
  } else {
    homeLink.classList.add(ACTIVE_STATUS);
  }
}

function defineSwitcherStatus() {
  const currentSwitcherStatus = localStorage.getItem(CURRENT_SWITCHER_STATUS);

  if (currentSwitcherStatus) {
    if (currentSwitcherStatus === SWITCHER_LIGHT_STATUS) {
      switcherToLightInit();
      switchToLight();
    } else {
      switcherToDarkInit();
      switchToDark();
    }
  }
}

function onNavLinkClick({ target }) {
  if (!target.classList.contains(ACTIVE_STATUS)) {
    const currentActiveLink = document.querySelector('.header-nav-list-item__link.is-active');
    currentActiveLink.classList.remove(ACTIVE_STATUS);
    localStorage.setItem(ACTIVE_NAVLINK_KEY, target.getAttribute('data-type'));
  }
}

function onSwitcherClick() {
  if (switcherCircle.classList.contains(SWITCHER_LIGHT_STATUS)) {
    localStorage.setItem(CURRENT_SWITCHER_STATUS, SWITCHER_DARK_STATUS);
    switcherToDark();
    switchToDark();
  } else if (switcherCircle.classList.contains(SWITCHER_DARK_STATUS)) {
    localStorage.setItem(CURRENT_SWITCHER_STATUS, SWITCHER_LIGHT_STATUS);
    switcherToLight();
    switchToLight();
  } else {
    localStorage.setItem(CURRENT_SWITCHER_STATUS, SWITCHER_DARK_STATUS);
    switcherToDarkInit();
    switchToDark();
  }
}
