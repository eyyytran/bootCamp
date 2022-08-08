//have animations and transitions in the design
//you need to have the option to either use city name or zipcode

const API_KEY = 'f2a10f7d9e76a9264f68531a73c4ee63'

//https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid={API key}

const inputField = document.getElementById('user-input')
const submitBtn = document.getElementById('submit-button')
const header = document.getElementById('header')
const mainMod = document.getElementById('main-module')

const typeOfInput = () => {
    let searchInput = document.getElementById('user-input').value
    // let searchInput = '30047'
    if (typeof searchInput === 'string') {
        searchInput = searchInput.replace(/\s+/g, '')
        return (url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput},us&appid=${API_KEY}&units=imperial`)
    } else if (typeof searchInput === 'object') {
        return (url = `https://api.openweathermap.org/data/2.5/weather?zip=${searchInput},us&appid=${API_KEY}&units=imperial`)
    }
}

const searchWeather = async () => {
    typeOfInput()
    const weatherData = await fetch(url)
    const json = await weatherData.json()
    makeHeader(json)
    makeFooter(json)
}

const getTemp = json => {
    const makeMod = document.createElement('div')
    makeMod.classList = 'temperature'
    makeMod.innerHTML = json.main.temp + '\u00B0F'
    header.append(makeMod)
}

const getName = json => {
    const makeMod = document.createElement('div')
    makeMod.classList = 'name'
    makeMod.innerHTML = json.name
    header.append(makeMod)
}

const getWeatherIcon = json => {
    const makeImg = document.createElement('img')
    makeImg.classList = 'weather-icon'
    makeImg.src =
        'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-cloudy-weather-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1.png'
    header.append(makeImg)
    const makeMod = document.createElement('div')
    makeMod.classList = 'weather-icon-text'
    makeMod.innerHTML = json.weather[0].main
    header.append(makeMod)
}

// const getWeatherDesc = json => {
//     const makeMod = document.createElement('div')
//     makeMod.classList = 'weather-desc'
//     makeMod.innerHTML = json.weather[0].description
//     mainMod.append(makeMod)
// }

const getFeelsLike = json => {
    const makeMod = document.createElement('div')
    makeMod.classList = 'feels'
    makeMod.innerHTML = 'Feels like ' + json.main.feels_like + '\u00B0F'
    mainMod.append(makeMod)
}

const makeHeader = json => {
    getWeatherIcon(json)
    getTemp(json)
    getName(json)
}

const getSunRise = json => {
    let date = new Date(json.sys.sunrise * 1000)
    let hour = date.getHours().toString().padStart(2, 0)
    let min = date.getMinutes().toString().padStart(2, 0)
    let sunRise = `${hour}${min}`

    const makeTitle = document.createElement('div')
    makeTitle.classList = 'section-header'
    makeTitle.innerHTML = 'Sun Rise'
    mainMod.append(makeTitle)

    const makeMod = document.createElement('div')
    makeMod.classList = 'sun-rise'
    makeMod.innerHTML = sunRise
    mainMod.append(makeMod)
}

const getSunSet = json => {
    let date = new Date(json.sys.sunset * 1000)
    let hour = date.getHours().toString().padStart(2, 0)
    let min = date.getMinutes().toString().padStart(2, 0)
    let sunSet = `${hour}${min}`

    const makeTitle = document.createElement('div')
    makeTitle.classList = 'section-header'
    makeTitle.innerHTML = 'Sun Set'
    mainMod.append(makeTitle)

    const makeMod = document.createElement('div')
    makeMod.classList = 'sun-set'
    makeMod.innerHTML = sunSet
    mainMod.append(makeMod)
}

const getHumidity = json => {
    const makeTitle = document.createElement('div')
    makeTitle.classList = 'section-header'
    makeTitle.innerHTML = 'Humidity'
    mainMod.append(makeTitle)

    const makeMod = document.createElement('div')
    makeMod.classList = 'humidity'
    makeMod.innerHTML = json.main.humidity + '%'
    mainMod.append(makeMod)
}

const getWind = json => {
    const makeTitle = document.createElement('div')
    makeTitle.classList = 'section-header'
    makeTitle.innerHTML = 'Wind'
    mainMod.append(makeTitle)

    const makeMod = document.createElement('div')
    makeMod.classList = 'wind'
    makeMod.innerHTML = json.wind.speed + 'mi/hr'
    mainMod.append(makeMod)
}

const makeFooter = json => {
    getFeelsLike(json)
    // getWeatherDesc(json)
    getSunRise(json)
    getSunSet(json)
    getHumidity(json)
    getWind(json)
}

submitBtn.onclick = () => searchWeather()

// window.addEventListener('DOMContentLoaded', )
