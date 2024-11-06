document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskDateTime = document.getElementById('taskDateTime');
    const taskValue = taskInput.value.trim();
    const dateTimeValue = taskDateTime.value;

    if (taskValue && dateTimeValue) {
        const li = document.createElement('li');

        const taskName = document.createElement('span');
        taskName.className = 'task-name';
        taskName.textContent = taskValue;

        const taskDate = document.createElement('span');
        taskDate.className = 'task-date';
        taskDate.textContent = `Due: ${new Date(dateTimeValue).toLocaleDateString()}`;

        const taskTime = document.createElement('span');
        taskTime.className = 'task-time';
        taskTime.textContent = `${new Date(dateTimeValue).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = '<i class="fas fa-times"></i>';
        removeBtn.className = 'delete';
        removeBtn.addEventListener('click', function() {
            li.remove();
        });

        const editBtn = document.createElement('button');
        editBtn.innerHTML = '<i class="fas fa-pencil-alt"></i>';
        editBtn.className = 'edit';
        editBtn.addEventListener('click', function() {
            taskInput.value = taskValue;
            taskDateTime.value = dateTimeValue;
            li.remove();
        });

        li.appendChild(taskName);
        li.appendChild(taskDate);
        li.appendChild(taskTime);
        li.appendChild(editBtn);
        li.appendChild(removeBtn);
        document.getElementById('taskList').appendChild(li);
        taskInput.value = ''; // Clear the input
        taskDateTime.value = ''; // Clear the datetime input
    } else {
        alert("Please enter both task and due date/time.");
    }
});
