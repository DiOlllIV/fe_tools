import './pop-up.scss';

document.querySelector('.pop-up').setAttribute('id', 'popup');
const popup = document.getElementById('popup');
const createBtn = document.querySelector('.create-btn');

document.querySelector('.exit-btn').setAttribute('id', 'exitBtn');
const exitBtn = document.getElementById('exitBtn');

export function openPopup() {
  popup.style.visibility = 'visible';
}
createBtn.addEventListener('click', openPopup);

export function closePopup() {
  popup.style.visibility = 'hidden';
}
exitBtn.addEventListener('click', closePopup);


export function clickOnItems() {
  const eventItems = document.querySelectorAll('.calendar-section__item');

  for (const elem of eventItems) {
    elem.addEventListener('click', openPopup);
  }
}

export const popupActions = () => {
  openPopup();
  closePopup();
};
