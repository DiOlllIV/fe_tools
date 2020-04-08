const baseUrl = 'https://5e870549781e48001676b644.mockapi.io/api/v1/tasks';

export const getTasksList = () =>
    fetch(baseUrl)
    .then(response => response.json())



export const createTask = taskData =>
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(taskData)
    });

export const updateTask = (taskId, updatedTaskData) =>
    fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(updatedTaskData)
    });

export const deleteTask = (taskId) =>
    fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    });