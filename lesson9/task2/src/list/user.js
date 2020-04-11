const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const userAvatarElem = document.querySelector('.user__avatar');

export const renderUserData = (userData) => {
  const { avatarUrl, name, location } = userData;
  userAvatarElem.src = avatarUrl;
  userNameElem.textContent = name;
  userLocationElem.textContent = location
    ? `from ${location}` : '';
};
