import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.join";
import "core-js/modules/es.array.map";
import "core-js/modules/es.array.slice";
import "core-js/modules/es.array.splice";
import "core-js/modules/es.function.name";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import { generateNumbers, renderTimeColumn } from './events.js';
import { moveRedline, setRedline } from './redline.js';
import { renderEventItem } from './renderEvents.js';
import { clickOnItems } from './popup.js';
export var today = new Date();
var monthDay = new Date().getDate();
var weekDay = new Date().getDay() - 1;
var daysLine = document.querySelector('.week-line');
var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
var zeroDay = 0;
export var getMonday = function getMonday() {
  while (today.getDay() !== 1) {
    today.setDate(today.getDate() - 1);
  }
};

var getDays = function getDays() {
  var result = [];
  generateNumbers(0, 6).map(function (day) {
    var newDay = new Date(today);
    newDay.setDate(newDay.getDate() + day);
    result.push("\n                <div class=\"box-day\">\n                    <span class=\"box-day__week\"\n                    data-day-number=\"".concat(day + zeroDay, "\">\n                        ").concat(week[new Date(newDay).getDay()], "\n                    </span>\n                    <span class=\"box-day__month\"\n                    data-date-number=\"").concat(new Date(newDay).getDate(), "\">\n                    ").concat(new Date(newDay).getDate(), "</span>\n                </div>"));
  });
  return result.join('');
};

export var renderDays = function renderDays() {
  daysLine.innerHTML = getDays();
};
export var markToday = function markToday() {
  if (weekDay === -1) {
    document.querySelector("[data-day-number=\"6\"]").classList.add('box-day__week-today');
    document.querySelector("[data-date-number=\"".concat(monthDay, "\"]")).classList.add('box-day__month-today');
    document.querySelector("[data-date-number=\"".concat(monthDay, "\"]")).parentElement.classList.add('box-day__today');
  } else {
    document.querySelector("[data-day-number=\"".concat(weekDay, "\"]")).classList.add('box-day__week-today');
    document.querySelector("[data-date-number=\"".concat(monthDay, "\"]")).classList.add('box-day__month-today');
    document.querySelector("[data-date-number=\"".concat(monthDay, "\"]")).parentElement.classList.add('box-day__today');
  }
};
var monthElem = document.querySelector('.title');
var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var popupMonth;
export var setCurrMonth = function setCurrMonth() {
  var daysElem = document.querySelectorAll('.box-day');

  var withoutFirst = _toConsumableArray(daysElem).splice(1);

  var checkMonthInWeek = false;

  var _iterator = _createForOfIteratorHelper(withoutFirst),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var arg = _step.value;
      if (arg.textContent == 1) checkMonthInWeek = true;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var currMonth = month[new Date(today).getMonth()];
  monthElem.textContent = "".concat(currMonth, " ").concat(today.getFullYear());
  popupMonth = new Date(today).getMonth() + 1;
};
export var forRenderWeeks = function forRenderWeeks() {
  renderDays();
  setCurrMonth();
  renderTimeColumn();
  renderEventItem();
  clickOnItems();
  markToday();
  setRedline();
  moveRedline();
};
var rightBtn = document.querySelector('.btn-right');

var getNextWeek = function getNextWeek() {
  getMonday();
  today.setDate(today.getDate() + 7);
  zeroDay += 7;
  forRenderWeeks();
};

rightBtn.addEventListener('click', getNextWeek);
var leftBtn = document.querySelector('.btn-left');

var getPriviousWeek = function getPriviousWeek() {
  getMonday();
  today.setDate(today.getDate() - 7);
  zeroDay -= 7;
  forRenderWeeks();
};

leftBtn.addEventListener('click', getPriviousWeek);
var todayBtn = document.querySelector('.today-btn');

var getActualWeek = function getActualWeek() {
  getMonday();
  today = new Date();
  zeroDay = 0;
  getMonday();
  forRenderWeeks();
};

todayBtn.addEventListener('click', getActualWeek);