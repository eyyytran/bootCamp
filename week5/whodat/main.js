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
const type1 = document.querySelector('#type1')
const module = document.querySelector('.module')
const prevguess1 = document.querySelector('#p1')
const prevguess2 = document.querySelector('#p2')
const prevguess3 = document.querySelector('#p3')
const pokemonInfo = []
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
    console.log(pokemon.types[0].type.name)
    console.log(pokemonInfo[1])
    if (guess === pokemonInfo[0]) {
        module.innerHTML = `You're right! It's ${pokemonInfo[0]}!`
    } else {
        if (counter === 1) {
            guess1.style.background = 'var(--alarmred)'
            handleType1(pokemon)
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

const handleType1 = pokemon => {
    if (pokemon.types[0].type.name === pokemonInfo[1]) {
        type1.style.background = 'var(--green)'
    } else {
        type1.style.background = 'var(--alarmred)'
    }
}

const getRandomPokemon = async () => {
    getRandomInt()
    url = `https://pokeapi.co/api/v2/pokemon/${randomInt}`
    const res = await fetch(url)
    json = await res.json()
    getImage(json)
    getPokemonInfo(json)
}

const getPokemonInfo = json => {
    pokemonInfo.push(json.name)
    for (type in json.types) {
        pokemonInfo.push(json.types[type].type.name)
    }
    return pokemonInfo
}
console.log(pokemonInfo)

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
