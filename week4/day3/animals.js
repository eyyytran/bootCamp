//select elements that you need
const dropdown = document.getElementById('animal-farm')
const animalNoiseContainer = document.querySelector('.animal-noise')

const checkAnimal = (text) => {
    animalNoiseContainer.innerHTML = null
    const animalNoise = document.createElement('h1')
    const animalImage = document.createElement('img')
    animalImage.classList = 'animalImage'
    if (text === 'pig') {
        animalNoise.innerText = 'Oink'
        animalImage.src =
            'https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80'
    }
    if (text === 'dog') {
        animalNoise.innerText = 'Woof'
    }
    if (text === 'cat') {
        animalNoise.innerText = 'Meow'
    }
    if (text === 'chicken') {
        animalNoise.innerText = 'Cluck'
    }
    animalNoiseContainer.append(animalNoise)
    animalNoiseContainer.append(animalImage)
}

dropdown.onchange = (event) => checkAnimal(event.target.value)
//the value of the target that will be passed to the function is all of the dropdown elements
