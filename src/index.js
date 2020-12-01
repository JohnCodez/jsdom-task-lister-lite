document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const newTaskForm = document.getElementById('create-task-form')

  function addTask() {
    newTaskForm.addEventListener('submit', function(e) {
      e.preventDefault()
      const newDesc = e.target['new-task-description'].value
      const newTask = document.getElementById('tasks')
      const li = document.createElement('li')
      li.textContent = newDesc
      newTask.append(li)
    })
  }

  addTask()

});
