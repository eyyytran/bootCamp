//The title of the app is self explanatory. The user will get a random part of an image of a pokemon, and they will have four guesses to get it correct. They will receive clues as to whether or not they have the right type, gen, etc. I hope to have the search with the image and at least one clue done by end of day.
//API only goes up to gen 7 NDex#809
// url = `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`

const inputField = document.querySelector('#input-field')
const submitBtn = document.querySelector('#submit-button')
const imageField = document.querySelector('.image-field')
const guessImage = document.querySelector('guessImage')

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
    console.log(guess)
}

const getRandomPokemon = async () => {
    getRandomInt()
    url = `https://pokeapi.co/api/v2/pokemon/${randomInt}`
    const res = await fetch(url)
    const json = await res.json()
    return json
    // getImage(json)
}

console.log(getRandomPokemon())

const getImage = json => {
    const makeImg = document.createElement('img')
    makeImg.src = `${json.sprites.front_default}`
    makeImg.classList = 'guessImage'

    imageField.append(makeImg)
}

submitBtn.addEventListener('click', () => guessPokemon())

window.addEventListener('DOMContentLoaded', getRandomPokemon())
