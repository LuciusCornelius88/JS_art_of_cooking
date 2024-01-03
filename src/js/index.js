const ACTIVE_NAVLINK_KEY = 'current_active_navlink';

const body = document.querySelector('body');
const header = document.querySelector('header');
const hero = document.querySelector('.hero');
const popularRecipes = document.querySelector('.popular-recipes');

const homeLink = document.querySelector('a[data-type="home"]');
const navLinks = document.querySelectorAll('.header-nav-list-item__link');

const switcher = document.querySelector('.theme-switcher-btn');
const switcherRect = document.querySelector('.switcher-icon-rect');
const switcherCircle = document.querySelector('.switcher-icon-circle');

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
  if (switcherCircle.classList.contains('switcher-icon-circle__revert')) {
    switcherCircle.classList.remove('switcher-icon-circle__revert');
    switcherCircle.classList.add('switcher-icon-circle__init');
    switcherRect.classList.remove('switcher-icon-rect__dark');
    body.classList.remove('dark-background');
  } else if (switcherCircle.classList.contains('switcher-icon-circle__init')) {
    switcherCircle.classList.remove('switcher-icon-circle__init');
    switcherCircle.classList.add('switcher-icon-circle__revert');
    switcherRect.classList.add('switcher-icon-rect__dark');
    body.classList.add('dark-background');
  } else {
    switcherCircle.classList.add('switcher-icon-circle__revert');
    switcherRect.classList.add('switcher-icon-rect__dark');
    body.classList.add('dark-background');
  }
}
