const userInput = document.getElementById('input')
const submitButton = document.getElementById('submit')
const input = document.getElementById('input')
const checkButton = document.createElement('button')
const strikeButton = document.createElement('button')
const item = document.getElementsByClassName('item')

const createToDo = () => {
    const newItem = document.createElement('p')
    const taskList = document.getElementById('task-container')
    newItem.innerHTML = input.value
    checkButton.innerHTML = '✓'
    strikeButton.innerHTML = 'x'
    newItem.classList.add('item')
    checkButton.classList.add('checkButton')
    strikeButton.classList.add('strikeButton')
    taskList.appendChild(newItem)
    newItem.appendChild(checkButton)
    newItem.appendChild(strikeButton)
}

submitButton.addEventListener('click', createToDo)

checkButton.addEventListener('click', () => {
    console.log(item)
    item[0].style.textDecoration = 'line-through'
})

strikeButton.addEventListener('click', () => console.log('clicked'))
