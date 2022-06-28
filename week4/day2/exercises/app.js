const heading = document.querySelector('#heading')
const burger = document.getElementById('burger')
const newItem = document.createElement('li')

heading.innerText = 'Toppings'

burger.classList.add('list-item')
newItem.appendChild(document.createTextNode('blank'))
document.querySelector('ul').appendChild(newItem)
