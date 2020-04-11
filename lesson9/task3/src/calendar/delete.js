import { renderEventItem } from './renderEvents';
import { deleteEvent, getEventsList } from './eventsGateway';
import { setItem } from './storage';

export function deleteBtn() {
  const eventsElem = document.querySelectorAll('.event');
  let click = false;

  eventsElem.forEach((elem) => {
    const deleteEventElem = () => deleteEvent(elem.id)
      .then(() => getEventsList())
      .then((newEventsList) => {
        setItem('eventsList', newEventsList);
        renderEventItem();
      });


    function activateBtn() {
      if (!click) {
        const visibleBtn = document.getElementById(`delete${elem.id}`);

        click = true;
        visibleBtn.style.visibility = 'visible';
        visibleBtn.addEventListener('click', deleteEventElem);
      } else if (click) {
        click = false;
        document.getElementById(`delete${elem.id}`).style.visibility = 'hidden';
      }
    }

    elem.addEventListener('click', activateBtn);
  });
}
