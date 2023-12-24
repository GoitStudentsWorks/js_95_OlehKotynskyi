// Експорт функції шапки сайту ховати при прокрутці та показувати 
import { handleHeaderScroll } from './js/base-js/scroll';
// Експорт функції попапу
import * as yourModule from './js/base-js/popup';
import { renderPopularCard } from '../src/js/base-js/popular.js/render-popular';

// визов функції ховати та показувати шапку сайту
handleHeaderScroll();

// визов функціоналу попапа
const popupLinks = document.querySelectorAll('.popup-link');
// визов функції відкриття першого попапу
yourModule.popupOpen(popupLinks[0]);
//визов функції закриття попапу
const popupCloseIcon = document.querySelector('.close-popup');
yourModule.popupClose(popupCloseIcon.closest('.popup'));
// визов функції блокування скролу в боді
yourModule.bodyLock();
// визов функції розблокування скролу боді
yourModule.bodyUnLock();


