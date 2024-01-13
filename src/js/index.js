import {
  switcherCircle,
  switcherToDark,
  switcherToLight,
  switcherToLightInit,
  switcherToDarkInit,
  switchToDark,
  switchToLight,
} from './switch_theme_functions.js';

import { fetchCategories, fetchPopularRecipes, fetchRecipes, fetchAreas, fetchIngredients } from './requests.js';
import { defaultHitsPerPage } from './config.js';

const ACTIVE_NAVLINK_KEY = 'current_active_navlink';
const ACTIVE_STATUS = 'is-active';
const CURRENT_SWITCHER_STATUS = 'current_switcher_status';
const SWITCHER_LIGHT_STATUS = 'switcher-icon-circle__home';
const SWITCHER_DARK_STATUS = 'switcher-icon-circle__revert';

const pageNumber = 1;

const switcher = document.querySelector('.theme-switcher-btn');
const homeLink = document.querySelector('a[data-type="home"]');
const navLinks = document.querySelectorAll('.header-nav-list-item__link');

const categoriesList = document.querySelector('.categories-list');
const popularRecipesList = document.querySelector('.popular-recipes-list');
const ingredientsList = document.querySelector('.filter-ingredients-select');
const areasList = document.querySelector('.filter-area-select');
const timeList = document.querySelector('.filter-time-select');
const recipesList = document.querySelector('.recipes-list');

const categoriesContainer = document.querySelector('.categories-container');
const allCategoriesBtn = categoriesContainer.querySelector('.all-categories-btn');

onLoad();

async function onLoad() {
  switcher.addEventListener('click', onSwitcherClick);
  navLinks.forEach((link) => link.addEventListener('click', onNavLinkClick));
  allCategoriesBtn.addEventListener('click', onCategoriesClick);

  defineActivePage();
  createTimeList();

  await createCategories();
  await createPopularRecipes();
  await createAreasOptions();
  await createIngredientsOptions();
  await getRecipes(allCategoriesBtn.dataset.value);

  defineSwitcherStatus();

  const categories = categoriesContainer.querySelectorAll('.category-item-button');
  categories.forEach((btn) => btn.addEventListener('click', onCategoriesClick));
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

async function createCategories() {
  const categories = await fetchCategories();
  const markup = categories.map((item) => {
    return `
      <li class="category-item">
        <button data-value="${item.name}" class="category-item-button">${item.name}</button>
      </li>
    `;
  });

  categoriesList.insertAdjacentHTML('beforeend', markup.join(''));
}

async function createPopularRecipes() {
  const popularRecipes = await fetchPopularRecipes();
  const markup = popularRecipes.map(({ preview, title, description }) => {
    return `
      <li class="popular-recipe-item hidden">
          <div class="popular-recipe-image-container">
              <img src="${preview}" alt="popular recipe image" class="popular-recipe-image">
          </div>
          <div class="popular-recipe-content-container">
              <p class="popular-recipe-subtitle popular-recipes-title-light-font">${title}</p>
              <p class="popular-recipe-description popular-recipes-descr-light-font">${description}</p>
          </div>
      </li>
    `;
  });

  popularRecipesList.insertAdjacentHTML('beforeend', markup.join(''));
  calculateTextHeight();
}

function calculateTextHeight() {
  const titleHeightAdjustment = 0.1;
  const containers = document.querySelectorAll('.popular-recipe-content-container');

  containers.forEach((container) => {
    const title = container.querySelector('.popular-recipe-subtitle');
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

async function createAreasOptions() {
  const areas = await fetchAreas();
  const markup = areas.map(({ name }, index) => {
    return index === 0
      ? `
        <option class="select-option filters-light-font" value="" selected disabled>Select</option>
      `
      : `
        <option class="select-option filters-light-font" value="${name}">${name}</option>
      `;
  });

  areasList.insertAdjacentHTML('beforeend', markup.join(''));
}

async function createIngredientsOptions() {
  const options = await fetchIngredients();
  const markup = options.map(({ name }, index) => {
    return index === 0
      ? `
        <option class="select-option filters-light-font" value="" selected disabled>Select</option>
      `
      : `
        <option class="select-option filters-light-font" value="${name}">${name}</option>
      `;
  });

  ingredientsList.insertAdjacentHTML('beforeend', markup.join(''));
}

function createTimeList() {
  let markup = '';
  const start = 5;
  const stop = 120;
  const step = 5;

  for (let i = start; i <= stop; i += step) {
    markup +=
      i === start
        ? `<option class="select-option filters-light-font" value="" selected disabled>Select</option>`
        : `<option class="select-option filters-light-font" value="${i}">${i} min</option>`;
  }

  timeList.insertAdjacentHTML('beforeend', markup);
}

function onCategoriesClick(evt) {
  const { target } = evt;
  const currentActiveCategory = categoriesContainer.querySelector('.category-is-active');
  currentActiveCategory.classList.remove('category-is-active');
  target.classList.add('category-is-active');
  getRecipes(target.dataset.value);
}

async function getRecipes(selectedCategory) {
  const params = {
    category: selectedCategory,
    ingredient: ingredientsList.value,
    area: areasList.value,
    time: timeList.value,
    page: pageNumber,
    limit: defaultHitsPerPage,
  };

  const recipes = await fetchRecipes(params);
  createRecipesMarkup(recipes.results);
}

function createRecipesMarkup(recipes) {
  const markup = recipes.map(({ thumb, title, description, rating }) => {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('recipe-img-container');
    imgContainer.style.background = `linear-gradient(1deg, rgba(5, 5, 5, 0.60) 4.82%, rgba(5, 5, 5, 0.00) 108.72%), url('${thumb}'), lightgray -99px -69px / 189.2% 164.808% no-repeat`;

    return `
      <li class="recipe-list-item">
        ${imgContainer.outerHTML}
        <div class="recipe-content-container">
          <p class="recipe-title recipes-title-light-font">${title}</p>
          <div class="recipe-description-container">
            <p class="recipe-description recipes-descr-light-font">${description}</p>
          </div>
          <div class="recipe-actions-container">
            <div class="recipe-rating-container">
              <p class="recipe-rating recipes-rating-light-font">${rating}</p>
            </div>
            <button class="see-recipe-btn recipes-button-light-font">See recipe</button>
          </div>
        </div>
        <svg class="like-icon">
          <use href="./images/sprite.svg#icon-heart"></use>
        </svg>
      </li>
    `;
  });

  recipesList.innerHTML = markup.join('');
}
