import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.iterator";
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

var redline = document.createElement('div');
redline.classList.add('redline');
redline.setAttribute('id', 'redlineId');
var redlineBall = document.createElement('span');
redlineBall.classList.add('redline__ball');
var redlineLine = document.createElement('span');
redlineLine.classList.add('redline__line');
redline.append(redlineBall);
redline.append(redlineLine);
export function setRedline() {
  var hour = new Date().getHours();
  var minutes = Number(new Date().getMinutes());
  var actualDaycolumn = document.querySelector("div[data-date-number = \"".concat(new Date().getDate(), "\"][data-month-number = \"").concat(new Date().getMonth(), "\"]"));
  var daysElem = actualDaycolumn.querySelectorAll('[data-line-number]');

  var _iterator = _createForOfIteratorHelper(daysElem),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var elem = _step.value;
      if (Number(elem.getAttribute('data-line-number')) === hour) elem.append(redline);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var redlineStyle = document.getElementById('redlineId').style.paddingTop = "".concat(minutes, "px");
  return redlineStyle;
}
;
export function moveRedline() {
  var loop;
  loop = setInterval(setRedline, 30000);
  return loop;
}
;