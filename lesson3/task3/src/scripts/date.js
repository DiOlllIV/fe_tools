import { generateNumbers, renderTimeColumn } from './events.js';
import { moveRedline, setRedline } from './redline.js';
import { renderEventItem } from './renderEvents.js';
import { clickOnItems } from './popup.js';

export let today = new Date();
let monthDay = new Date().getDate();
let weekDay = new Date().getDay() - 1;

const daysLine = document.querySelector('.week-line');
const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
let zeroDay = 0;


export const getMonday = () => {
    while (today.getDay() !== 1) {
        today.setDate(today.getDate() - 1);
    }
};

const getDays = () => {
    const result = [];
    generateNumbers(0, 6).map(day => {

        const newDay = new Date(today);
        newDay.setDate(newDay.getDate() + day);
        result.push(`
                <div class="box-day">
                    <span class="box-day__week"
                    data-day-number="${day+zeroDay}">
                        ${week[new Date(newDay).getDay()]}
                    </span>
                    <span class="box-day__month"
                    data-date-number="${new Date(newDay).getDate()}">
                    ${new Date(newDay).getDate()}</span>
                </div>`);
    });

    return result.join('');
};

export const renderDays = () => {
    daysLine.innerHTML = getDays();
};

export const markToday = () => {
    if (weekDay === -1) {
        document.querySelector(`[data-day-number="6"]`).classList.add('box-day__week-today');
        document.querySelector(`[data-date-number="${monthDay}"]`).classList.add('box-day__month-today');
        document.querySelector(`[data-date-number="${monthDay}"]`).parentElement.classList.add('box-day__today');
    } else {
        document.querySelector(`[data-day-number="${weekDay}"]`).classList.add('box-day__week-today');
        document.querySelector(`[data-date-number="${monthDay}"]`).classList.add('box-day__month-today');
        document.querySelector(`[data-date-number="${monthDay}"]`).parentElement.classList.add('box-day__today');
    }
};

const monthElem = document.querySelector('.title');
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let popupMonth;

export const setCurrMonth = () => {
    const daysElem = document.querySelectorAll('.box-day');
    const withoutFirst = [...daysElem].splice(1);
    let checkMonthInWeek = false;

    for (let arg of withoutFirst) {
        if (arg.textContent == 1)
            checkMonthInWeek = true;
    }

    let currMonth = month[new Date(today).getMonth()];
    monthElem.textContent = `${currMonth} ${today.getFullYear()}`;
    popupMonth = new Date(today).getMonth() + 1;
};

export const forRenderWeeks = () => {
    renderDays();
    setCurrMonth();
    renderTimeColumn();
    renderEventItem();
    clickOnItems();
    markToday();
    setRedline();
    moveRedline();
};

const rightBtn = document.querySelector('.btn-right');
const getNextWeek = () => {
    getMonday();
    today.setDate(today.getDate() + 7);
    zeroDay += 7;
    forRenderWeeks();
};
rightBtn.addEventListener('click', getNextWeek);

const leftBtn = document.querySelector('.btn-left');
const getPriviousWeek = () => {
    getMonday();
    today.setDate(today.getDate() - 7);
    zeroDay -= 7;
    forRenderWeeks();
};
leftBtn.addEventListener('click', getPriviousWeek);

const todayBtn = document.querySelector('.today-btn');
const getActualWeek = () => {
    getMonday();
    today = new Date();
    zeroDay = 0;
    getMonday();
    forRenderWeeks();
};
todayBtn.addEventListener('click', getActualWeek);