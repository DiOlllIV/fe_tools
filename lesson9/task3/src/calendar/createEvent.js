import { renderEventItem } from './renderEvents';
import { setItem } from './storage';
import { createEvents, getEventsList } from './eventsGateway';

export const createEvent = () => {
  const eventId = 0;
  const eventTitle = document.querySelector('.pop-up__title');
  const date = document.querySelector('.time-set__date');
  const startTime = document.querySelector('.time-set__start');
  const endTime = document.querySelector('.time-set__end');
  const eventComment = document.querySelector('.pop-up__comment');
  const introducedDateValue = date.value && startTime.value && endTime.value;
  if (!introducedDateValue) { return; }

  const newEvent = {
    id: eventId,
    title: eventTitle.value,
    startDate: `${date.value} ${startTime.value}`,
    endDate: `${date.value} ${endTime.value}`,
    comment: eventComment.value,
  };

  eventTitle.value = '';
  date.value = '';
  startTime.value = '';
  endTime.value = '';
  eventComment.value = '';

  createEvents(newEvent)
    .then(getEventsList)
    .then((newEventsList) => {
      setItem('eventsList', newEventsList);
      renderEventItem();
    });


  document.getElementById('popup').style.visibility = 'hidden';
};
