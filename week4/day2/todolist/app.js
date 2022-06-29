const submitButton = document.getElementById('submit')
const input = document.getElementById('input')
const item = document.getElementsByClassName('item')
const taskList = document.getElementById('task-container')

const createToDo = () => {
    const newItem = document.createElement('p')
    newItem.innerHTML = input.value
    newItem.classList.add('item')

    const checkButton = document.createElement('button')
    checkButton.innerHTML = '✓'
    checkButton.classList.add('checkButton')

    const strikeButton = document.createElement('button')
    strikeButton.innerHTML = 'x'
    strikeButton.classList.add('strikeButton')

    newItem.appendChild(checkButton)
    newItem.appendChild(strikeButton)
    taskList.appendChild(newItem)

    input.value = ''
    input.focus()

    checkButton.addEventListener('click', () => {
        newItem.style = 'text-decoration:line-through;'
    })

    strikeButton.addEventListener('click', () => {
        taskList.removeChild(newItem)
    })
}

submitButton.addEventListener('click', createToDo)
