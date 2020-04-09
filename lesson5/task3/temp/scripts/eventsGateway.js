import "core-js/modules/es.object.to-string";
import "core-js/modules/es.promise";
var baseUrl = 'https://5e870549781e48001676b644.mockapi.io/api/v1/calendar';
export var getEventsList = function getEventsList() {
  return fetch(baseUrl).then(function (response) {
    return response.json();
  }).catch(function () {
    alert("Failed to load");
  });
};
export var createEvents = function createEvents(eventsData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(eventsData)
  });
};
export var updateEvent = function updateEvent(eventId, updateEventData) {
  return fetch("".concat(baseUrl, "/").concat(eventId), {
    method: 'PUT',
    headers: {
      'Content-type': 'appliaction/json;charset=utf-8'
    },
    body: JSON.stringify(updateEventData)
  });
};
export var deleteEvent = function deleteEvent(eventId) {
  return fetch("".concat(baseUrl, "/").concat(eventId), {
    method: 'DELETE'
  });
};