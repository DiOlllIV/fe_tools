import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.map";
import "core-js/modules/es.array.slice";
import "core-js/modules/es.function.name";
import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import { getItem } from './storage.js';
import { deleteBtn } from './delete.js';

var clearTable = function clearTable() {
  var elements = document.querySelectorAll('.event');

  var _iterator = _createForOfIteratorHelper(elements),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var eve = _step.value;
      eve.remove();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

var getTime = function getTime(time) {
  var stringH = time.getHours() <= 9 ? "0".concat(time.getHours()) : "".concat(time.getHours());
  var stringM = time.getMinutes() <= 9 ? "0".concat(time.getMinutes()) : "".concat(time.getMinutes());
  return "".concat(stringH, ":").concat(stringM);
};

export var renderEventItem = function renderEventItem() {
  var eventsList = getItem('eventsList') || [];
  var dayColumn;
  var eventHeight;
  var startPos;
  clearTable();
  var eventItems = eventsList.map(function (_ref) {
    var id = _ref.id,
        title = _ref.title,
        startDate = _ref.startDate,
        endDate = _ref.endDate,
        comment = _ref.comment;
    var eventDate = new Date("".concat(startDate)).getDate();
    var eventMonth = new Date("".concat(startDate)).getMonth();
    dayColumn = document.querySelector("div[data-date-number = \"".concat(eventDate, "\"][data-month-number = \"").concat(eventMonth, "\"]"));
    var startEvent = new Date("".concat(startDate));
    var endEvent = new Date("".concat(endDate)) - new Date("".concat(startDate));
    eventHeight = endEvent / 1000 / 60;
    startPos = new Date(startEvent).getHours() * 60 + new Date(startEvent).getMinutes();
    var elem = document.createElement('div');
    elem.classList.add('event');
    var eventTitle = document.createElement('span');
    eventTitle.append(title);
    var eventTime = document.createElement('span');
    eventTime.append("".concat(getTime(new Date(startDate)), " - ").concat(getTime(new Date(endDate))));
    var eventComment = document.createElement('span');
    eventComment.append(comment);
    elem.append(eventTitle, eventTime, eventComment);
    elem.setAttribute('id', "".concat(id));
    elem.style.backgroundColor = "rgb(100, 150, 235)";
    elem.style.top = startDate === '00:00' ? "0px" : "".concat(startPos, "px");
    elem.style.left = "4px";
    elem.style.height = "".concat(eventHeight, "px");
    var deleteBtn = document.createElement('div');
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.setAttribute("id", "delete".concat(id));
    deleteBtn.style.top = "".concat(eventHeight + 2, "px");
    deleteBtn.innerText = "delete";
    elem.append(deleteBtn);

    var _iterator2 = _createForOfIteratorHelper(document.querySelectorAll('.calendar-section')),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var sect = _step2.value;

        if (Number(new Date(startDate).getMonth()) === Number(sect.getAttribute('data-month-number')) && Number(new Date(startDate).getDate()) === Number(sect.getAttribute('data-date-number'))) {
          return dayColumn.append(elem);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
  deleteBtn();
  return eventItems;
};