import {
  switcherCircle,
  switcherToDark,
  switcherToLight,
  switcherToLightInit,
  switcherToDarkInit,
  switchToDark,
  switchToLight,
} from './switch_theme_functions.js';

import { fetchCategories, fetchPopularRecipes, fetchRecipes, fetchAreas, fetchIngredients, fetchTime } from './requests.js';

const ACTIVE_NAVLINK_KEY = 'current_active_navlink';
const ACTIVE_STATUS = 'is-active';
const CURRENT_SWITCHER_STATUS = 'current_switcher_status';
const SWITCHER_LIGHT_STATUS = 'switcher-icon-circle__home';
const SWITCHER_DARK_STATUS = 'switcher-icon-circle__revert';

const switcher = document.querySelector('.theme-switcher-btn');
const homeLink = document.querySelector('a[data-type="home"]');
const navLinks = document.querySelectorAll('.header-nav-list-item__link');

const categoriesList = document.querySelector('.categories-list');
const popularRecipesList = document.querySelector('.popular-recipes-list');

onLoad();

function onLoad() {
  navLinks.forEach((link) => link.addEventListener('click', onNavLinkClick));
  switcher.addEventListener('click', onSwitcherClick);

  defineActivePage();
  defineSwitcherStatus();
  createCategoriesMarkup();
  createPopularRecipesMarkup();

  // setTimeout(() => {
  //   calculateTextHeight();
  // }, 1000);
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

async function createCategoriesMarkup() {
  const categories = await fetchCategories();
  const markup = categories.map((item) => {
    return `<li class="category-item">${item.name}</li>`;
  });

  categoriesList.insertAdjacentHTML('beforeend', markup.join(''));
}

async function createPopularRecipesMarkup() {
  const popularRecipes = await fetchPopularRecipes();
  const markup = popularRecipes.map(({ preview, title, description }) => {
    return `
    <div class="popular-recipe-container hidden">
        <div class="popular-recipe-image-container">
            <img src="${preview}" alt="popular recipe image" class="popular-recipe-image">
        </div>
        <div class="popular-recipe-content-container">
            <p class="popular-recipe-title popular-recipes-title-light-font">${title}</p>
            <p class="popular-recipe-description popular-recipes-descr-light-font">${description}</p>
        </div>
    </div>`;
  });

  popularRecipesList.insertAdjacentHTML('beforeend', markup.join(''));
  calculateTextHeight();
}

function calculateTextHeight() {
  const titleHeightAdjustment = 0.1;
  const containers = document.querySelectorAll('.popular-recipe-content-container');

  containers.forEach((container) => {
    const title = container.querySelector('.popular-recipe-title');
    const description = container.querySelector('.popular-recipe-description');

    const titleComputedStyle = window.getComputedStyle(title);
    const titleMargin = parseInt(titleComputedStyle.getPropertyValue('margin-bottom'));

    const containerHeight = container.clientHeight;
    const titleHeight = title.clientHeight + titleMargin;
    const descriptionHeight = containerHeight - titleHeight;

    const lineHeight = parseFloat(window.getComputedStyle(description).lineHeight, 10);
    const linesToFit = Math.floor(descriptionHeight / lineHeight + titleHeightAdjustment);

    description.style.display = '-webkit-box';
    description.style.webkitBoxOrient = 'vertical';
    description.style.webkitLineClamp = linesToFit;
  });

  containers.forEach((container) => container.classList.remove('hidden'));
}
