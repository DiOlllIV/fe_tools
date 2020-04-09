import "core-js/modules/es.array.for-each";
import "core-js/modules/web.dom-collections.for-each";
import { renderEventItem } from './renderEvents.js';
import { deleteEvent, getEventsList } from './eventsGateway.js';
import { setItem } from './storage.js';
export function deleteBtn() {
  var eventsElem = document.querySelectorAll('.event');
  var click = false;
  eventsElem.forEach(function (elem) {
    var deleteEventElem = function deleteEventElem() {
      return deleteEvent(elem.id).then(function () {
        return getEventsList();
      }).then(function (newEventsList) {
        setItem('eventsList', newEventsList);
        renderEventItem();
      });
    };

    function activateBtn() {
      if (!click) {
        var visibleBtn = document.getElementById("delete".concat(elem.id));
        click = true;
        visibleBtn.style.visibility = 'visible';
        visibleBtn.addEventListener('click', deleteEventElem);
      } else if (click) {
        click = false;
        document.getElementById("delete".concat(elem.id)).style.visibility = 'hidden';
      }
    }

    ;
    elem.addEventListener('click', activateBtn);
  });
}
;