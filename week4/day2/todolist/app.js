const submitButton = document.getElementById('submit')
const input = document.getElementById('input')
const item = document.getElementsByClassName('item')
const taskList = document.getElementById('task-container')

const createToDo = () => {
    const newItem = document.createElement('p')
    newItem.innerHTML = input.value
    newItem.classList.add('item')

    const checkBtn = document.createElement('button')
    checkBtn.innerHTML = '✓'
    checkBtn.classList.add('checkButton')

    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = 'x'
    deleteBtn.classList.add('deleteButton')

    newItem.appendChild(checkBtn)
    newItem.appendChild(deleteBtn)
    taskList.appendChild(newItem)

    input.value = ''
    input.focus()

    checkBtn.addEventListener('click', () => {
        if (newItem.style['text-decoration'] === '') {
            newItem.style = 'text-decoration:line-through;'
        } else {
            newItem.style = ''
        }
    })

    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(newItem)
    })
}

submitButton.addEventListener('click', createToDo)

// TODO: make it create a todo when you press enter inside the input
// TODO: init the page w/ some test todos using optional arg in createToDo function
