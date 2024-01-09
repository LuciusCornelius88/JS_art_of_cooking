const switcherRect = document.querySelector('.switcher-icon-rect');
export const switcherCircle = document.querySelector('.switcher-icon-circle');

export function switchToDark() {
  switchBodyToDark();
  switchLogoToDark();
  switchNavLinksToDark();
  switchNavBtnsToDark();
  switchShoppingCardToDark();
  switchHeroTitleToDark();
  switchHeroTextToDark();
  switchHeroButtonToDark();
  switchCategoriesTitleToDark();
  switchCategoryItemToDark();
  switchPopularRecipesTitleToDark();
  switchPopularRecipeSubtitleToDark();
  switchPopularRecipeDescrToDark();
  switchLabelsToDark();
  switchSelectsToDark();
  switchSearchInputToDark();
  switchSearchIconToDark();
  switchDropdownToDark();
  switchSelectOptionsToDark();
  switchResetBtnToDark();
  switchPaginationToDark();
}

export function switchToLight() {
  switchBodyToLight();
  switchLogoToLight();
  switchNavLinksToLight();
  switchNavBtnsToLight();
  switchShoppingCardToLight();
  switchHeroTitleToLight();
  switchHeroTextToLight();
  switchHeroButtonToLight();
  switchCategoriesTitleToLight();
  switchCategoryItemToLight();
  switchPopularRecipesTitleToLight();
  switchPopularRecipeSubtitleToLight();
  switchPopularRecipeDescrToLight();
  switchLabelsToLight();
  switchSelectsToLight();
  switchSearchInputToLight();
  switchSearchIconToLight();
  switchDropdownToLight();
  switchSelectOptionsToLight();
  switchResetBtnToLight();
  switchPaginationToLight();
}

export function switcherToDarkInit() {
  switcherCircle.classList.add('switcher-icon-circle__revert');
  switcherRect.classList.add('switcher-icon-rect__dark');
}

export function switcherToLightInit() {
  switcherCircle.classList.add('switcher-icon-circle__home');
}

export function switcherToDark() {
  switcherCircle.classList.remove('switcher-icon-circle__home');
  switcherCircle.classList.add('switcher-icon-circle__revert');
  switcherRect.classList.add('switcher-icon-rect__dark');
}

export function switcherToLight() {
  switcherCircle.classList.remove('switcher-icon-circle__revert');
  switcherCircle.classList.add('switcher-icon-circle__home');
  switcherRect.classList.remove('switcher-icon-rect__dark');
}

function switchBodyToDark() {
  const body = document.querySelector('body');
  body.classList.remove('bg-light');
  body.classList.add('bg-dark');
}

function switchBodyToLight() {
  const body = document.querySelector('body');
  body.classList.remove('bg-dark');
  body.classList.add('bg-light');
}

function switchLogoToDark() {
  const logo = document.querySelector('.logo');
  logo.classList.remove('header-light-font');
  logo.classList.add('header-dark-font');
}

function switchLogoToLight() {
  const logo = document.querySelector('.logo');
  logo.classList.remove('header-dark-font');
  logo.classList.add('header-light-font');
}

function switchNavLinksToDark() {
  const navLinks = document.querySelectorAll('.header-nav-list-item__link');
  navLinks.forEach((link) => {
    link.classList.remove('header-light-font');
    link.classList.add('header-dark-font');
  });
}

function switchNavLinksToLight() {
  const navLinks = document.querySelectorAll('.header-nav-list-item__link');
  navLinks.forEach((link) => {
    link.classList.remove('header-dark-font');
    link.classList.add('header-light-font');
  });
}

function switchNavBtnsToDark() {
  const navBtns = document.querySelectorAll('.js-nav-btn');
  navBtns.forEach((btn) => {
    btn.classList.remove('bg-light');
    btn.classList.add('bg-dark');
  });
}

function switchNavBtnsToLight() {
  const navBtns = document.querySelectorAll('.js-nav-btn');
  navBtns.forEach((btn) => {
    btn.classList.remove('bg-dark');
    btn.classList.add('bg-light');
  });
}

function switchShoppingCardToDark() {
  const cardIcon = document.querySelector('.shopping-cart-icon');
  cardIcon.classList.remove('svg-light-fill');
  cardIcon.classList.add('svg-dark-fill');
}

function switchShoppingCardToLight() {
  const cardIcon = document.querySelector('.shopping-cart-icon');
  cardIcon.classList.remove('svg-dark-fill');
  cardIcon.classList.add('svg-light-fill');
}

function switchHeroTitleToDark() {
  const title = document.querySelector('.hero-title');
  title.classList.remove('hero-light-font');
  title.classList.add('hero-dark-font');
}

function switchHeroTitleToLight() {
  const title = document.querySelector('.hero-title');
  title.classList.remove('hero-dark-font');
  title.classList.add('hero-light-font');
}

function switchHeroTextToDark() {
  const text = document.querySelector('.hero-text');
  text.classList.remove('hero-light-font');
  text.classList.add('hero-dark-font');
}

function switchHeroTextToLight() {
  const text = document.querySelector('.hero-text');
  text.classList.remove('hero-dark-font');
  text.classList.add('hero-light-font');
}

function switchHeroButtonToDark() {
  const btn = document.querySelector('.order-button');
  btn.classList.remove('bg-light');
  btn.classList.add('bg-dark');
  btn.classList.remove('hero-light-font');
  btn.classList.add('hero-dark-font');
}

function switchHeroButtonToLight() {
  const btn = document.querySelector('.order-button');
  btn.classList.remove('bg-dark');
  btn.classList.add('bg-light');
  btn.classList.remove('hero-dark-font');
  btn.classList.add('hero-light-font');
}

function switchCategoriesTitleToDark() {
  const title = document.querySelector('.all-categories-btn');
  title.classList.remove('categories-title-light-font');
  title.classList.add('categories-title-dark-font');
  title.classList.remove('categories-border-light');
  title.classList.add('categories-border-dark');
  title.classList.remove('bg-light');
  title.classList.add('bg-dark');
}

function switchCategoriesTitleToLight() {
  const title = document.querySelector('.all-categories-btn');
  title.classList.remove('categories-title-dark-font');
  title.classList.add('categories-title-light-font');
  title.classList.remove('categories-border-dark');
  title.classList.add('categories-border-light');
  title.classList.remove('bg-dark');
  title.classList.add('bg-light');
}

function switchCategoryItemToDark() {
  const categorisList = document.querySelector('.categories-list');
  categorisList.classList.remove('categories-items-light-font');
  categorisList.classList.add('categories-items-dark-font');
  categorisList.classList.remove('bg-light');
  categorisList.classList.add('bg-dark');

  // const categoriesList = document.querySelectorAll('.category-item-button');
  // categoriesList.forEach((item) => {
  //   item.classList.remove('categories-items-light-font');
  //   item.classList.add('categories-items-dark-font');
  //   item.classList.remove('bg-light');
  //   item.classList.add('bg-dark');
  // });
}

function switchCategoryItemToLight() {
  const categorisList = document.querySelector('.categories-list');
  categorisList.classList.remove('categories-items-dark-font');
  categorisList.classList.add('categories-items-light-font');
  categorisList.classList.remove('bg-dark');
  categorisList.classList.add('bg-light');

  // const categoriesList = document.querySelectorAll('.category-item-button');
  // categoriesList.forEach((item) => {
  //   item.classList.remove('categories-items-dark-font');
  //   item.classList.add('categories-items-light-font');
  //   item.classList.remove('bg-dark');
  //   item.classList.add('bg-light');
  // });
}
//
function switchPopularRecipesTitleToDark() {
  const title = document.querySelector('.popular-recipes-title');
  title.classList.remove('popular-recipes-title-light-font');
  title.classList.add('popular-recipes-title-dark-font');
}

function switchPopularRecipesTitleToLight() {
  const title = document.querySelector('.popular-recipes-title');
  title.classList.remove('popular-recipes-title-dark-font');
  title.classList.add('popular-recipes-title-light-font');
}

function switchPopularRecipeSubtitleToDark() {
  const subtitles = document.querySelectorAll('.popular-recipe-subtitle');
  subtitles.forEach((item) => {
    item.classList.remove('popular-recipes-subtitle-light-font');
    item.classList.add('popular-recipes-subtitle-dark-font');
  });
}

function switchPopularRecipeSubtitleToLight() {
  const subtitles = document.querySelectorAll('.popular-recipe-subtitle');
  subtitles.forEach((item) => {
    item.classList.remove('popular-recipes-subtitle-dark-font');
    item.classList.add('popular-recipes-subtitle-light-font');
  });
}

function switchPopularRecipeDescrToDark() {
  const descriptions = document.querySelectorAll('.popular-recipe-description');
  descriptions.forEach((item) => {
    item.classList.remove('popular-recipes-descr-light-font');
    item.classList.add('popular-recipes-descr-dark-font');
  });
}

function switchPopularRecipeDescrToLight() {
  const descriptions = document.querySelectorAll('.popular-recipe-description');
  descriptions.forEach((item) => {
    item.classList.remove('popular-recipes-descr-dark-font');
    item.classList.add('popular-recipes-descr-light-font');
  });
}

function switchLabelsToDark() {
  const labels = document.querySelectorAll('.label');
  labels.forEach((label) => {
    label.classList.add('filters-dark-font');
    label.classList.remove('filters-light-font');
  });
}

function switchLabelsToLight() {
  const labels = document.querySelectorAll('.label');
  labels.forEach((label) => {
    label.classList.add('filters-light-font');
    label.classList.remove('filters-dark-font');
  });
}

function switchSelectsToDark() {
  const selects = document.querySelectorAll('.select-content');
  selects.forEach((select) => {
    select.classList.add('filters-dark-font');
    select.classList.remove('filters-light-font');
    select.classList.add('filters-border-dark');
    select.classList.remove('filters-border-light');
  });
}

function switchSelectsToLight() {
  const selects = document.querySelectorAll('.select-content');
  selects.forEach((select) => {
    select.classList.add('filters-light-font');
    select.classList.remove('filters-dark-font');
    select.classList.add('filters-border-light');
    select.classList.remove('filters-border-dark');
  });
}

function switchSearchInputToDark() {
  const searchInput = document.querySelector('.filter-search-input');
  searchInput.classList.remove('filters-light-font');
  searchInput.classList.add('filters-dark-font');
  searchInput.classList.remove('ffilters-border-light');
  searchInput.classList.add('filters-border-dark');
}

function switchSearchInputToLight() {
  const searchInput = document.querySelector('.filter-search-input');
  searchInput.classList.remove('filters-dark-font');
  searchInput.classList.add('filters-light-font');
  searchInput.classList.remove('filters-border-dark');
  searchInput.classList.add('filters-border-light');
}

function switchSearchIconToDark() {
  const searchIcon = document.querySelector('.search-icon');
  searchIcon.classList.remove('search-icon-fill-light');
  searchIcon.classList.add('search-icon-fill-dark');
}

function switchSearchIconToLight() {
  const searchIcon = document.querySelector('.search-icon');
  searchIcon.classList.remove('search-icon-fill-dark');
  searchIcon.classList.add('search-icon-fill-light');
}

function switchDropdownToDark() {
  const dropdowns = document.querySelectorAll('.dropdown-array-icon');
  dropdowns.forEach((item) => {
    item.classList.remove('dropdown-fill-light');
    item.classList.add('dropdown-fill-dark');
  });
}

function switchDropdownToLight() {
  const dropdowns = document.querySelectorAll('.dropdown-array-icon');
  dropdowns.forEach((item) => {
    item.classList.remove('dropdown-fill-dark');
    item.classList.add('dropdown-fill-light');
  });
}

function switchSelectOptionsToDark() {
  const options = document.querySelectorAll('.select-options');
  options.forEach((item) => {
    item.classList.remove('filters-light-font');
    item.classList.add('filters-dark-font');
  });
}

function switchSelectOptionsToLight() {
  const options = document.querySelectorAll('.select-options');
  options.forEach((item) => {
    item.classList.remove('filters-dark-font');
    item.classList.add('filters-light-font');
  });
}

function switchResetBtnToDark() {
  const resetBtn = document.querySelector('.reset-filters-btn');
  resetBtn.classList.remove('filters-light-font');
  resetBtn.classList.add('filters-dark-font');
  resetBtn.classList.remove('bg-light');
  resetBtn.classList.add('bg-dark');
}

function switchResetBtnToLight() {
  const resetBtn = document.querySelector('.reset-filters-btn');
  resetBtn.classList.remove('filters-dark-font');
  resetBtn.classList.add('filters-light-font');
  resetBtn.classList.remove('bg-dark');
  resetBtn.classList.add('bg-light');
}

function switchPaginationToDark() {
  const btns = document.querySelectorAll('.numbered-btn');
  btns.forEach((item) => {
    item.classList.remove('pagination-light-font');
    item.classList.add('pagination-dark-font');
    item.classList.remove('bg-light');
    item.classList.add('bg-dark');
    item.classList.remove('pagination-border-light');
    item.classList.add('pagination-border-dark');
  });
}

function switchPaginationToLight() {
  const btns = document.querySelectorAll('.numbered-btn');
  btns.forEach((item) => {
    item.classList.remove('pagination-dark-font');
    item.classList.add('pagination-light-font');
    item.classList.remove('bg-dark');
    item.classList.add('bg-light');
    item.classList.remove('pagination-border-dark');
    item.classList.add('pagination-border-light');
  });
}
