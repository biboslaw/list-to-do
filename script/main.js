function createNewTask(task) {   
    this.newTask = task   
}

createNewTask.prototype.addNewEdit = function (newListEl, newElement){
    var newEdit = document.createElement('img')
    newEdit.setAttribute('src', 'images/edit.svg')
    newListEl.appendChild(newEdit)
    newEdit.addEventListener('click', function(e){
        e.stopPropagation()
        editTask(e, newElement)
    })
   
}

createNewTask.prototype.addNewDelete = function (newListEl){
    var newDelete = document.createElement('img')
    newDelete.setAttribute('src', 'images/delete.svg')
    newListEl.appendChild(newDelete)
    newDelete.addEventListener('click', function(e){
        e.target.parentElement.setAttribute('class', 'toDelete')
        var toDelete = document.querySelector('.toDelete')
        e.target.parentElement.parentElement.removeChild(toDelete)
        isEmpty()
    })
    
}

function appendTask() {
    var ul = document.querySelector('ul')
    if (ul.textContent == 'List is empty...'){
        ul.textContent = ''
    }
    var newTaskName = document.querySelector(".newTaskName").value
    createTask(newTaskName) 
}

function main() {
    createTask('Write a letter.')
    createTask('Clean up apartment.')
    createTask('Take out garbage.')
    createTask('Wash the dishes.')
    var addTask = document.querySelector("button")
    addTask.addEventListener("click", appendTask)
}

function createTask (newTaskName) {
    var newElement = new createNewTask(newTaskName)
    var taskList = document.querySelector('.taskContent')
    var newLi = document.createElement('li')
    var p = document.createElement('p')
    newLi.textContent = newElement.newTask
    newLi.appendChild(p)
    newElement.addNewDelete(newLi)
    newElement.addNewEdit(newLi, newElement)
    taskList.appendChild(newLi)
    newLi.addEventListener('click', function(e){
        e.target.classList.toggle('correct')
    })
}

function editTask(e, newElement) {
    var newValue = prompt('Edit task:', newElement.newTask)
    newElement.newTask = newValue
    e.target.parentElement.firstChild.textContent = newElement.newTask
    
}

function isEmpty (){
    var taskCounter = document.querySelectorAll('li')
    if (taskCounter.length === 0){
        console.log(taskCounter.length)
        taskCounter = document.querySelector('ul')
        taskCounter.textContent = "List is empty..."
    }
}

document.addEventListener("DOMContentLoaded", main());