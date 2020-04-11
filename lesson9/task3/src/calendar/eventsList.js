import { createEvent } from './createEvent';

const saveBtn = document.querySelector('.save-btn');

export const initEventsListHandles = () => {
  saveBtn.addEventListener('click', createEvent);
};
