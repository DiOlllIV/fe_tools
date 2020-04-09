import { createEvent } from './createEvent.js';
var saveBtn = document.querySelector('.save-btn');
export var initEventsListHandles = function initEventsListHandles() {
  saveBtn.addEventListener('click', createEvent);
};