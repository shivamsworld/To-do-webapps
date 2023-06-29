let tasks = [];

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const newTask = {
            text: taskText,
            completed: false,
            created: new Date()
        };

        tasks.push(newTask);

        taskInput.value = '';
        displayTasks();
    }
}

function displayTasks() {
    const pendingList = document.getElementById('pending-list');
    const completedList = document.getElementById('completed-list');

    pendingList.innerHTML = '';
    completedList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;

        checkbox.addEventListener('change', function () {
            tasks[index].completed = this.checked;
            displayTasks();
        });

        const taskText = document.createElement('span');
        taskText.textContent = task.text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            tasks.splice(index, 1);
            displayTasks();
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(taskText);
        listItem.appendChild(deleteButton);

        if (task.completed) {
            listItem.classList.add('completed');
            completedList.appendChild(listItem);
        } else {
            pendingList.appendChild(listItem);
        }
    });
}

displayTasks();
