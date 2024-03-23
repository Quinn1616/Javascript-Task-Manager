const taskList = [];

const addTaskButton = document.getElementById('addTask');
addTaskButton.addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('Task');
    const task = taskInput.value.trim();
    if (task !== '') {
        taskInput.value = '';
    
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const label = document.createElement('label');
        label.textContent = task;
        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        document.getElementById('taskList').appendChild(listItem);
        console.log('Task added:', task);

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                removeTask(listItem, task);
            }
        });

    } else {
        console.log('Please enter a task.');
    }
}


function removeTask(listItem, task) {
    listItem.remove();
    console.log('Task completed:', task);
}




