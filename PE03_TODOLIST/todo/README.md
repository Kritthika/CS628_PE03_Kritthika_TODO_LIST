# PE03 - ToDo List App

## Input
- Users can enter a task description in the input field.
- Users can click the "Add Task" button to add the task to the list.
- Users can click the "Delete" button next to a task to remove it from the list.

## Process
- The app uses the `useState` hook to manage the state of the ToDo list.
- When the "Add Task" button is clicked, the input value is added to the list of todos.
- When the "Delete" button is clicked, the corresponding task is removed from the list.
- The `.map()` function is used to dynamically render the list of todos.

## Output
- The app displays the list of todos, each with a "Delete" button.
- The list updates dynamically as tasks are added or removed.