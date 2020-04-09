import "core-js/modules/web.dom-collections.iterator";
const listElem = document.querySelector('.repo-list');
export const cleanReposList = () => listElem.innerHTML = '';
export const renderRepos = reposList => {
  const reposListElems = reposList.map((_ref) => {
    let {
      name
    } = _ref;
    const listElem = document.createElement('li');
    listElem.classList.add('repo-list__item');
    listElem.textContent = name;
    return listElem;
  });
  cleanReposList();
  listElem.append(...reposListElems);
};