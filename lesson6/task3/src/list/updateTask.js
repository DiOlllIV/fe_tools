import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList, deleteTask } from './tasksGateway.js';

export const onToggleTask = e => {
    const isCheckbox = e.target.classList.contains('list-item__checkbox');

    if (!isCheckbox) {
        return;
    }

    const tasksList = getItem('tasksList');
    const taskId = e.target.dataset.id;
    const { text, createDate } = tasksList
        .find(task => task.id === taskId);
    const done = e.target.checked;

    const updatedTask = {
        text,
        createDate,
        done,
        finishDate: done ?
            new Date().toISOString() : null

    };

    updateTask(taskId, updatedTask)
        .then(() => getTasksList())
        .then(newTasksList => {
            setItem('tasksList', newTasksList);
            renderTasks();
        });
};


export const deleteItemElem = e => {
    const deleteBtn = e.target.classList.contains('list-item__delete-btn');
    if (!deleteBtn)
        return;

    const taskId = e.target.parentNode.firstElementChild.dataset.id
    console.log(taskId);

    return deleteTask(taskId)
        .then(() => getTasksList())
        .then(newTasksList => {
            setItem('tasksList', newTasksList);
            renderTasks();
        });
};