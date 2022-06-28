const userInput = document.getElementById('input')
const submitButton = document.getElementById('submit')
const input = document.getElementById('input')
let counter = 1

const createToDo = () => {
    const newItem = document.createElement('p')
    const checkButton = document.createElement('button')
    const strikeButton = document.createElement('button')
    const taskList = document.getElementById('task-container')
    newItem.innerHTML = input.value
    checkButton.innerHTML = 'Put Check'
    strikeButton.innerHTML = 'Put X'
    newItem.classList.add('item')
    // checkButton.classList.add('checkButton' + toString(counter))
    // strikeButton.classList.add('strikeButton' + toString(counter))
    // let counter = counter++
    newItem.appendChild(checkButton)
    newItem.appendChild(strikeButton)
    taskList.appendChild(newItem)
}

submitButton.addEventListener('click', createToDo)

checkButton.addEventListener('click', () => {
    const item = document.getElementsByClassName('item')
    item.innerHTML.strike()
})
