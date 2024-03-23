document.addEventListener('DOMContentLoaded', function () {
  const addTaskButton = document.getElementById('addTaskButton')
  const newTaskInput = document.getElementById('newTaskInput')
  const taskList = document.getElementById('taskList')

  // Load tasks from local storage
  const tasks = JSON.parse(localStorage.getItem('tasks')) || []
  tasks.forEach(task => addTaskToList(task.text, task.completed))

  // Add task event listener
  addTaskButton.addEventListener('click', function () {
    const taskText = newTaskInput.value.trim()
    if (taskText) {
      addTaskToList(taskText)
      tasks.push({ text: taskText, completed: false })
      localStorage.setItem('tasks', JSON.stringify(tasks))
      newTaskInput.value = '' // Clear input field
    }
  })

  // Task click event (using event delegation)
  taskList.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
      const li = event.target
      const taskIndex = Array.from(taskList.children).indexOf(li)
      li.classList.toggle('completed')
      tasks[taskIndex].completed = li.classList.contains('completed')
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  })

  // Function to add a task to the list
  function addTaskToList(text, completed = false) {
    const li = document.createElement('li')
    li.textContent = text
    if (completed) li.classList.add('completed')
    taskList.appendChild(li)
  }
})
