import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.join";
import "core-js/modules/es.array.map";
import { today } from './date.js';
export var generateNumbers = function generateNumbers(from, to) {
  var result = [];

  for (var i = from; i <= to; i++) {
    result.push(i);
  }

  return result;
};
/* Render Table Events */

var getTimeColumn = function getTimeColumn() {
  return generateNumbers(1, 23).map(function (timeItem) {
    return "\n        <div\n            class=\"time-column__line\"\n            data-line-number=\"".concat(timeItem, "\"\n        >").concat(timeItem <= 9 ? "0".concat(timeItem, ":00") : "".concat(timeItem, ":00"), "</div>\n        ");
  }).join('');
};

var getDaysEvents = function getDaysEvents() {
  return generateNumbers(0, 23).map(function (daysEvents) {
    return "\n                <div\n                    class=\"calendar-section__item\"\n                    data-line-number=\"".concat(daysEvents, "\"\n                ></div>\n            ");
  }).join('');
};

var daysEvents = getDaysEvents();

var getDaysColumn = function getDaysColumn() {
  return generateNumbers(0, 6).map(function (day) {
    var newDay = new Date(today);
    newDay.setDate(newDay.getDate() + day);
    return "\n            <div\n                class=\"calendar-section\"\n                data-date-number=\"".concat(new Date(newDay).getDate(), "\"\n                data-month-number=\"").concat(new Date(newDay).getMonth(), "\"\n            >").concat(daysEvents, "</div>\n        ");
  }).join('');
};

var timeColumn = document.querySelector('.calendar-column');
export var renderTimeColumn = function renderTimeColumn() {
  var timeLine = getTimeColumn();
  var daysColumn = getDaysColumn();
  var timeSectors = generateNumbers(1, 1).map(function (lineTime) {
    return "\n            <div\n                class='time-column'\n                data-column-number =\"".concat(lineTime, "\"\n            >").concat(timeLine, "</div>\n            <div\n                class='calendar-table'\n                data-column-number =\"").concat(lineTime, "\"\n            >").concat(daysColumn, "</div>\n        ");
  }).join('');
  timeColumn.innerHTML = timeSectors;
};