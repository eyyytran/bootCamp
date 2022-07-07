//The title of the app is self explanatory. The user will get a random part of an image of a pokemon, and they will have four guesses to get it correct. They will receive clues as to whether or not they have the right type, gen, etc. I hope to have the search with the image and at least one clue done by end of day.
//API only goes up to gen 7 NDex#809
// url = `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`

const inputField = document.querySelector('#input-field')
const submitBtn = document.querySelector('#submit-button')
const resetBtn = document.querySelector('#reset-button')
const imageField = document.querySelector('.image-field')
const guess1 = document.querySelector('#guess1')
const guess2 = document.querySelector('#guess2')
const guess3 = document.querySelector('#guess3')
const guess4 = document.querySelector('#guess4')
const module = document.querySelector('.module')
const prevguess1 = document.querySelector('#p1')
const prevguess2 = document.querySelector('#p2')
const prevguess3 = document.querySelector('#p3')

let counter = 1

const getRandomInt = () => {
    return (randomInt = Math.floor(Math.random() * 810))
}

const inputToURL = () => {
    let userInput = inputField.value
    userInput = userInput.toLowerCase()
    return (url = `https://pokeapi.co/api/v2/pokemon/${userInput}`)
}

const guessPokemon = async () => {
    inputToURL()
    const pokedex = await fetch(url)
    const pokemon = await pokedex.json()
    const guess = pokemon.name
    const answerBox = document.querySelector('.hidden')
    if (guess === answerBox.innerHTML) {
        module.innerHTML = `You're right! It's ${guess}!`
    } else {
        if (counter === 1) {
            guess1.style.background = 'var(--alarmred)'
            prevguess1.innerHTML = guess
        } else if (counter === 2) {
            guess2.style.background = 'var(--alarmred)'
            prevguess2.innerHTML = guess
        } else if (counter === 3) {
            guess3.style.background = 'var(--alarmred)'
            prevguess3.innerHTML = guess
        } else if (counter === 4) {
            guess4.style.background = 'var(--alarmred)'
            module.innerHTML = `Sorry Joey... It's ${answerBox.innerHTML}!`
        }
        counter++
    }
}

const getRandomPokemon = async () => {
    getRandomInt()
    url = `https://pokeapi.co/api/v2/pokemon/${randomInt}`
    const res = await fetch(url)
    json = await res.json()
    getImage(json)
    getHiddenImage(json)
}

const getHiddenImage = json => {
    const makeDiv = document.createElement('div')
    makeDiv.innerHTML = json.name
    makeDiv.classList = 'hidden'
    makeDiv.style.display = 'none'
    imageField.append(makeDiv)
}

const getImage = json => {
    const makeImg = document.createElement('img')
    makeImg.src = `${json.sprites.front_default}`
    makeImg.classList = 'guessImage'
    imageField.append(makeImg)
}

const resetGame = () => {
    counter = 1
    imageField.innerHTML = null

    guess1.style.background = 'var(--green)'
    guess2.style.background = 'var(--green)'
    guess3.style.background = 'var(--green)'
    guess4.style.background = 'var(--green)'

    prevguess1.innerHTML = null
    prevguess2.innerHTML = null
    prevguess3.innerHTML = null

    module.innerHTML = null

    getRandomPokemon()
}

submitBtn.addEventListener('click', () => {
    guessPokemon()
    inputField.value = ''
})

inputField.addEventListener('keypress', ({ key }) => {
    if (key === 'Enter') {
        guessPokemon()
        inputField.value = ''
    }
})

resetBtn.addEventListener('click', () => resetGame())

window.addEventListener('DOMContentLoaded', getRandomPokemon())
