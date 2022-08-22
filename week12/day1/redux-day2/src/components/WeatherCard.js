import React from 'react'

const WeatherCard = ({ weather }) => {
    const ICON_URL = `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`

    const getSunTime = data => {
        let result = ''
        let date = new Date(data * 1000)
        let hour = date.getHours().toString().padStart(2, 0)
        let min = date.getMinutes().toString().padStart(2, 0)
        return (result = `${hour}${min}`)
    }

    return (
        <div className='weather-card'>
            <div className='main'>
                <div className='icon'>
                    <img src={ICON_URL} alt='weather_icon' />
                </div>
                <div className='description'>
                    {weather?.weather[0].description}
                </div>
                <div className='temp'>{weather?.main.temp}F</div>
                <div className='feels-like'>
                    Feels like {weather?.main?.feels_like}F
                </div>
                <div className='cityName'>{weather?.name}</div>
            </div>
            <div className='middle'>
                <div className='left'>
                    {weather?.main.humidity}%
                    <div className='subtitle'>Humidity</div>
                </div>
                <div className='right'>
                    {weather?.wind.speed}mph
                    <div className='subtitle'>Wind Speed</div>
                </div>
            </div>
            <div className='bottom'>
                <div className='left'>
                    {getSunTime(weather?.sys.sunrise)}
                    <div className='subtitle'>Sunrise</div>
                </div>
                <div className='right'>
                    {getSunTime(weather?.sys.sunset)}
                    <div className='subtitle'>Sunset</div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard
