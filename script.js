document.addEventListener('DOMContentLoaded', function() {
    // Get references to HTML elements
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get task text and remove leading/trailing whitespace

        if (taskText === "") {
            alert("Please enter a task!"); // Don't add empty tasks
            return;
        }

        // Create a new list item (<li>) for the task
        const listItem = document.createElement('li');

        // Create a span for the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.addEventListener('click', toggleTaskComplete); // Toggle complete on click
        listItem.appendChild(taskSpan);

        // Create actions container for buttons
        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('actions');

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', deleteTask);
        actionsDiv.appendChild(deleteButton);

        listItem.appendChild(actionsDiv); // Add actions div to list item

        // Append the new list item to the task list (UL)
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Function to toggle task completion
    function toggleTaskComplete(event) {
        // 'this' refers to the span element that was clicked
        // 'parentElement' refers to the <li> element
        event.target.parentElement.classList.toggle('completed');
    }

    // Function to delete a task
    function deleteTask(event) {
        // 'event.target' is the delete button
        // 'parentElement' is the 'actions' div
        // 'parentElement.parentElement' is the 'li' (list item)
        event.target.parentElement.parentElement.remove();
    }

    // Add event listener to the "Add Task" button
    addTaskButton.addEventListener('click', addTask);

    // Allow adding tasks by pressing Enter key in the input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});