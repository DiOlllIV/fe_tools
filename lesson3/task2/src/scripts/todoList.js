import { onCreateTask } from './createTask.js';
import { onToggleTask, deleteItemElem } from './updateTask.js';

export const initTodoListHandlers = () => {
    const createBtnElem = document.querySelector('.create-task-btn');
    createBtnElem.addEventListener('click', onCreateTask);

    const todoListElem = document.querySelector('.list');
    todoListElem.addEventListener('click', onToggleTask);
    todoListElem.addEventListener('click', deleteItemElem);
};