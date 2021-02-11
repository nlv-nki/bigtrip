const DAYS_COUNT = 3;
import {createTripMenuTemplate} from "./view/site-menu.js";
import {createTripBoardsTemplate} from "./view/board.js";
import {createTripInfoTemplate} from "./view/trip-Info.js";
import {createtTripFiltersTemplate} from "./view/filters.js";
import {createTripDayTemplate} from "./view/trip-day.js";


const render = (container, template, place = 'beforeend') => {
    container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.page-header`);
const siteMainElement = document.querySelector(`.page-main`);
const siteControlElement = siteHeaderElement.querySelector('.trip-controls ');
const siteTripMinInfo = siteHeaderElement.querySelector('.trip-main');


render(siteTripMinInfo, createTripInfoTemplate(), 'afterBegin');
render(siteControlElement.firstElementChild, createTripMenuTemplate(), 'afterEnd');
render(siteControlElement, createtTripFiltersTemplate(), 'beforeEnd');

const tripEvents = siteMainElement.querySelector('.trip-events');

render(tripEvents.firstElementChild, createTripBoardsTemplate(), 'afterEnd');

const tripDays = tripEvents.querySelector('.trip-days');

for (let i = 0; i < DAYS_COUNT; i++) {
    render(tripDays, createTripDayTemplate(), `beforeend`); // 3 параметр для примера
}
