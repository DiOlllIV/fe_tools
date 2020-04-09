import "core-js/modules/es.array.concat";
import { renderEventItem } from './renderEvents.js';
import { setItem } from './storage.js';
import { createEvents, getEventsList } from './eventsGateway.js';
export var createEvent = function createEvent() {
  var eventId = 0;
  var eventTitle = document.querySelector('.pop-up__title');
  var date = document.querySelector('.time-set__date');
  var startTime = document.querySelector('.time-set__start');
  var endTime = document.querySelector('.time-set__end');
  var eventComment = document.querySelector('.pop-up__comment');
  var introducedDateValue = date.value && startTime.value && endTime.value;
  if (!introducedDateValue) return;
  var newEvent = {
    id: eventId,
    title: eventTitle.value,
    startDate: "".concat(date.value, " ").concat(startTime.value),
    endDate: "".concat(date.value, " ").concat(endTime.value),
    comment: eventComment.value
  };
  eventTitle.value = '';
  date.value = '';
  startTime.value = '';
  endTime.value = '';
  eventComment.value = '';
  createEvents(newEvent).then(getEventsList).then(function (newEventsList) {
    setItem('eventsList', newEventsList);
    renderEventItem();
  });
  document.getElementById('popup').style.visibility = "hidden";
};