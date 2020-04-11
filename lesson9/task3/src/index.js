import { getMonday, forRenderWeeks } from './calendar/date';
import { popupActions } from './calendar/popup';
import { setItem } from './calendar/storage';
import { getEventsList } from './calendar/eventsGateway';
import { initEventsListHandles } from './calendar/eventsList';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  getEventsList()
    .then((eventsList) => {
      setItem('eventsList', eventsList);
      getMonday();
      forRenderWeeks();
      popupActions();
    });
  initEventsListHandles();
});

const onStorageChange = (e) => {
  if (e.key === 'eventsList') {
    setItem('eventsList', eventsList);
    getMonday();
    forRenderWeeks();
    popupActions();
  }
  initEventsListHandles();
};

window.addEventListener('storage', onStorageChange);
