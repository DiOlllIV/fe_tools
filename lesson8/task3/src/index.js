import { getMonday, forRenderWeeks } from './calendar/date.js';
import { popupActions } from './calendar/popup.js';
import { setItem } from './calendar/storage.js';
import { getEventsList } from './calendar/eventsGateway.js';
import { initEventsListHandles } from './calendar/eventsList.js';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
    getEventsList()
        .then(eventsList => {
            setItem('eventsList', eventsList);
            getMonday();
            forRenderWeeks();
            popupActions();
        });
    initEventsListHandles();
});

const onStorageChange = e => {
    if (e.key === 'eventsList') {
        setItem('eventsList', eventsList);
        getMonday();
        forRenderWeeks();
        popupActions();
    }
    initEventsListHandles();
};

window.addEventListener('storage', onStorageChange);