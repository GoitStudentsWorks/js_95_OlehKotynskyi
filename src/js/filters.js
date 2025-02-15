//import SlimSelect from 'slim-select';
//import { fetchProductsAll } from './fetch.js';
//import { updateProductsList } from './products.js';
//import { getProductsLimit } from './products.js';

//// Флаг для отслеживания состояния выполнения запроса
//let isFetching = false;

//function debounce(func, wait, immediate) {
//   let timeout;
//   return function () {
//      const context = this, args = arguments;
//      const later = function () {
//         timeout = null;
//         if (!immediate) func.apply(context, args);
//      };
//      const callNow = immediate && !timeout;
//      clearTimeout(timeout);
//      timeout = setTimeout(later, wait);
//      if (callNow) func.apply(context, args);
//   };
//}

//document.addEventListener('DOMContentLoaded', function () {
//   initializeFilters();
//   fetchCategories();
//   setupEventListeners();
//   fetchInitialProducts();

//   const searchBox = document.getElementById('search-box');
//   const categoriesSelect = document.getElementById('categories');
//   const savedFilters = getSavedFilters();
//   searchBox.value = savedFilters.keyword || ''; // Сохранение значения в поле поиска
//   categoriesSelect.value = savedFilters.category || ''; // Сохранение выбранной категории
//});

//const searchBox = document.getElementById('search-box');
//const searchForm = document.querySelector('.search-form');

//searchForm.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const keyword = searchBox.value.trim();
//   if (keyword === '') {
//      updateFilters('keyword', null);
//      fetchFilteredProducts();
//      resetPage();
//   } else {
//      updateFilters('keyword', keyword);
//      fetchFilteredProducts();
//      resetPage();
//      searchBox.value = ''; // Очистка поля ввода после выполнения поиска
//   }
//});

//searchBox.addEventListener('keypress', function (e) {
//   if (e.key === 'Enter') {
//      e.preventDefault();
//      const keyword = searchBox.value.trim();
//      if (keyword === '') {
//         updateFilters('keyword', null);
//         fetchFilteredProducts();
//         resetPage();
//      } else {
//         updateFilters('keyword', keyword);
//         fetchFilteredProducts();
//         resetPage();
//         searchBox.value = ''; // Очистка поля ввода после выполнения поиска
//      }
//   }
//});

//let wasMobile = window.innerWidth <= 375;
//let wasTablet = window.innerWidth > 375 && window.innerWidth <= 768;

//function handleResize() {
//   const width = window.innerWidth;
//   const isMobile = width <= 375;
//   const isTablet = width > 375 && width <= 768;

//   if (isMobile !== wasMobile || isTablet !== wasTablet) {
//      fetchFilteredProducts();
//      wasMobile = isMobile;
//      wasTablet = isTablet;
//   }
//}

//window.addEventListener('resize', debounce(handleResize, 300));

//async function fetchCategories() {
//   try {
//      const response = await fetch('https://food-boutique.b.goit.study/api/products/categories');
//      if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//      }
//      const categories = await response.json();
//      if (categories && categories.length > 0) {
//         populateCategorySelect(categories);
//      } else {
//         console.error('No categories found');
//      }
//   } catch (error) {
//      console.error('Error fetching categories:', error);
//   }
//}

//// function populateCategorySelect(categories) {
////    const selectElement = document.getElementById('categories');
////    selectElement.innerHTML = '';

////    const modifiedCategories = categories.map(category => ({
////       text: category.replace(/_/g, ' '),
////       value: category
////    })).concat({ text: 'Show all', value: '' });

////    new SlimSelect({
////       select: '#categories',
////       placeholder: 'Categories',
////       showSearch: false,
////       data: modifiedCategories
////    });
//// }

//function populateCategorySelect(categories) {
//   const selectElement = document.getElementById('categories');
//   selectElement.innerHTML = '';

//   const modifiedCategories = [
//      { text: 'Show all', value: '' },
//      ...categories.map(category => ({
//         text: category.replace(/_/g, ' '),
//         value: category
//      }))
//   ];

//   new SlimSelect({
//      select: '#categories',
//      placeholder: 'Categories',
//      showSearch: false,
//      data: modifiedCategories
//   });
//}


//fetchCategories();

//function setupEventListeners() {
//   const searchForm = document.querySelector('.search-form');
//   const categoriesSelect = document.getElementById('categories');

//   searchForm.addEventListener('submit', function (e) {
//      e.preventDefault();
//      const keyword = document.getElementById('search-box').value;
//      if (keyword == '') {
//         updateFilters('keyword', null);
//         fetchFilteredProducts();
//         updateFilters('page', 1);
//      } else {
//         updateFilters('keyword', keyword);
//         fetchFilteredProducts();
//         updateFilters('page', 1);
//      }
//   });

//   categoriesSelect.addEventListener('change', function () {
//      if (this.value == 'Show all') {
//         updateFilters('category', null);
//         updateFilters('page', 1);
//         fetchFilteredProducts();
//      } else {
//         updateFilters('category', this.value);
//         updateFilters('page', 1);
//         fetchFilteredProducts();
//      }
//   });
//}

//function resetPage() {
//   updateFilters('page', 1);
//}

//async function fetchFilteredProducts() {
//   if (isFetching) return;
//   isFetching = true;

//   const filters = getSavedFilters();
//   const limit = getProductsLimit();

//   try {
//      const products = await fetchProductsAll(
//         filters.category,
//         filters.keyword,
//         filters.page,
//         limit
//      );
//      updateProductsList(products);
//   } catch (error) {
//      console.error('Error fetching products:', error);
//      updateProductsList([]);
//   } finally {
//      isFetching = false;
//   }
//}

//function initializeFilters() {
//   if (!localStorage.getItem('filters')) {
//      resetFilters();
//   }
//}

//function updateFilters(key, value) {
//   const filters = getSavedFilters();
//   filters[key] = value;
//   localStorage.setItem('filters', JSON.stringify(filters));

//   const searchBox = document.getElementById('search-box');
//   const categoriesSelect = document.getElementById('categories');

//   if (key === 'keyword') {
//      searchBox.value = value || '';
//   }

//   if (key === 'category') {
//      categoriesSelect.value = value || '';
//   }
//}

//function resetFilters() {
//   localStorage.setItem(
//      'filters',
//      JSON.stringify({ keyword: null, category: null, page: 1, limit: 6 })
//   );
//}

//function getSavedFilters() {
//   return JSON.parse(localStorage.getItem('filters')) || resetFilters();
//}

//function fetchInitialProducts() {
//   fetchFilteredProducts();
//}
//export default fetchFilteredProducts;


//import SlimSelect from 'slim-select';
//import { fetchProductsAll } from './fetch.js';
//import { updateProductsList } from './products.js';
//import { getProductsLimit } from './products.js';

//// Флаг для отслеживания состояния выполнения запроса
//let isFetching = false;

//function debounce(func, wait, immediate) {
//   let timeout;
//   return function () {
//      const context = this, args = arguments;
//      const later = function () {
//         timeout = null;
//         if (!immediate) func.apply(context, args);
//      };
//      const callNow = immediate && !timeout;
//      clearTimeout(timeout);
//      timeout = setTimeout(later, wait);
//      if (callNow) func.apply(context, args);
//   };
//}

//document.addEventListener('DOMContentLoaded', function () {
//   initializeFilters();
//   fetchCategories();
//   setupEventListeners();
//   fetchInitialProducts();

//   const searchBox = document.getElementById('search-box');
//   const categoriesSelect = document.getElementById('categories');
//   const savedFilters = getSavedFilters();
//   searchBox.value = savedFilters.keyword || ''; // Сохранение значения в поле поиска
//   categoriesSelect.value = savedFilters.category || ''; // Сохранение выбранной категории
//   fetchFilteredProducts(); // Запуск запроса после загрузки страницы
//});

//const searchForm = document.querySelector('.search-form');

//searchForm.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const keyword = document.getElementById('search-box').value.trim();
//   updateFilters('keyword', keyword);
//   fetchFilteredProducts();
//   resetPage();
//});

//let wasMobile = window.innerWidth <= 375;
//let wasTablet = window.innerWidth > 375 && window.innerWidth <= 768;

//function handleResize() {
//   const width = window.innerWidth;
//   const isMobile = width <= 768;
//   const isTablet = width > 768 && width <= 1440;

//   if (isMobile !== wasMobile || isTablet !== wasTablet) {
//      fetchFilteredProducts();
//      wasMobile = isMobile;
//      wasTablet = isTablet;
//   }
//}

//window.addEventListener('resize', debounce(handleResize, 300));

//async function fetchCategories() {
//   try {
//      const response = await fetch('https://food-boutique.b.goit.study/api/products/categories');
//      if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//      }
//      const categories = await response.json();
//      if (categories && categories.length > 0) {
//         populateCategorySelect(categories);
//      } else {
//         console.error('No categories found');
//      }
//   } catch (error) {
//      console.error('Error fetching categories:', error);
//   }
//}

//function populateCategorySelect(categories) {
//   const selectElement = document.getElementById('categories');
//   selectElement.innerHTML = '';

//   const modifiedCategories = [
//      { text: 'Show all', value: '' },
//      ...categories.map(category => ({
//         text: category.replace(/_/g, ' '),
//         value: category
//      }))
//   ];

//   new SlimSelect({
//      select: '#categories',
//      placeholder: 'Categories',
//      showSearch: false,
//      data: modifiedCategories
//   });
//}

//function setupEventListeners() {
//   const categoriesSelect = document.getElementById('categories');

//   categoriesSelect.addEventListener('change', function () {
//      const selectedCategory = this.value;
//      updateFilters('category', selectedCategory);
//      fetchFilteredProducts();
//   });
//}

//function resetPage() {
//   updateFilters('page', 1);
//}

//async function fetchFilteredProducts() {
//   if (isFetching) return;
//   isFetching = true;

//   const filters = getSavedFilters();
//   const limit = getProductsLimit();

//   try {
//      const products = await fetchProductsAll(
//         filters.category,
//         filters.keyword,
//         filters.page,
//         limit
//      );
//      updateProductsList(products);
//   } catch (error) {
//      console.error('Error fetching products:', error);
//      updateProductsList([]);
//   } finally {
//      isFetching = false;
//   }
//}

//function initializeFilters() {
//   if (!localStorage.getItem('filters')) {
//      resetFilters();
//   }
//}

//function updateFilters(key, value) {
//   const filters = getSavedFilters();
//   filters[key] = value;
//   localStorage.setItem('filters', JSON.stringify(filters));
//}

//function resetFilters() {
//   localStorage.setItem(
//      'filters',
//      JSON.stringify({ keyword: null, category: null, page: 1, limit: 6 })
//   );
//}

//function getSavedFilters() {
//   return JSON.parse(localStorage.getItem('filters')) || resetFilters();
//}

//function fetchInitialProducts() {
//   fetchFilteredProducts();
//}

//export default fetchFilteredProducts;


import SlimSelect from 'slim-select';
import { fetchProductsAll } from './fetch.js';
import { updateProductsList } from './products.js';
import { getProductsLimit } from './products.js';

let isFetching = false;

function debounce(func, wait, immediate) {
   let timeout;
   return function () {
      const context = this, args = arguments;
      const later = function () {
         timeout = null;
         if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
   };
}

document.addEventListener('DOMContentLoaded', function () {
   initializeFilters();
   fetchCategories();
   setupEventListeners();
   fetchInitialProducts();

   const searchBox = document.getElementById('search-box');
   const categoriesSelect = document.getElementById('categories');
   const savedFilters = getSavedFilters();
   searchBox.value = savedFilters.keyword || '';
   categoriesSelect.value = savedFilters.category || '';
   fetchFilteredProducts();
});

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', function (e) {
   e.preventDefault();
   const keyword = document.getElementById('search-box').value.trim();
   updateFilters('keyword', keyword);
   fetchFilteredProducts();
   resetPage();
});

function handleResize() {
   const width = window.innerWidth;
   const isMobile = width < 768;
   const isTablet = width >= 768 && width < 1440;

   let limit = 6; // По умолчанию 6 карточек

   if (isTablet) {
      limit = 8; // Для планшета 8 карточек
   } else if (width >= 1440) {
      limit = 9; // Для 1440 шириной 9 карточек
   }

   const filters = getSavedFilters();
   filters.limit = limit;
   localStorage.setItem('filters', JSON.stringify(filters));

   fetchFilteredProducts();
}

window.addEventListener('resize', debounce(handleResize, 300));

async function fetchCategories() {
   try {
      const response = await fetch('https://food-boutique.b.goit.study/api/products/categories');
      if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
      }
      const categories = await response.json();
      if (categories && categories.length > 0) {
         populateCategorySelect(categories);
      } else {
         console.error('No categories found');
      }
   } catch (error) {
      console.error('Error fetching categories:', error);
   }
}

function populateCategorySelect(categories) {
   const selectElement = document.getElementById('categories');
   selectElement.innerHTML = '';

   const modifiedCategories = [
      { text: 'Show all', value: '' },
      ...categories.map(category => ({
         text: category.replace(/_/g, ' '),
         value: category
      }))
   ];

   new SlimSelect({
      select: '#categories',
      placeholder: 'Categories',
      showSearch: false,
      data: modifiedCategories
   });
}

function setupEventListeners() {
   const categoriesSelect = document.getElementById('categories');

   categoriesSelect.addEventListener('change', function () {
      const selectedCategory = this.value;
      updateFilters('category', selectedCategory);
      fetchFilteredProducts();
      resetPage();
   });
}

function resetPage() {
   updateFilters('page', 1);
}

async function fetchFilteredProducts() {
   if (isFetching) return;
   isFetching = true;

   const filters = getSavedFilters();
   const { category, keyword, page, limit } = filters;

   try {
      const products = await fetchProductsAll(category, keyword, page, limit);
      updateProductsList(products);
   } catch (error) {
      console.error('Error fetching products:', error);
      updateProductsList([]);
   } finally {
      isFetching = false;
   }
}

function initializeFilters() {
   if (!localStorage.getItem('filters')) {
      resetFilters();
   }
}

function updateFilters(key, value) {
   const filters = getSavedFilters();
   filters[key] = value;
   localStorage.setItem('filters', JSON.stringify(filters));
}

function resetFilters() {
   localStorage.setItem(
      'filters',
      JSON.stringify({ keyword: null, category: null, page: 1, limit: 6 })
   );
}

function getSavedFilters() {
   return JSON.parse(localStorage.getItem('filters')) || resetFilters();
}

function fetchInitialProducts() {
   fetchFilteredProducts();
}
export default fetchFilteredProducts;
