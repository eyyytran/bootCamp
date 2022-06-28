toDoList = []

const userInput = document.getElementById('input')
const submitButton = document.getElementById('submit')
const newItem = document.getElementById('input').value

submitButton.addEventListener('click', () => {
    const input = document.getElementById('input')
    const newLi = document.createElement('li')
    newLi.innerHTML = input.value
    // let li = '<li>' + input.value + '</li>'
    const list = document.getElementById('taskList')
    list.appendChild(newLi)
})
