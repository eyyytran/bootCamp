import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = () => {
    const dispatch = useDispatch()
    const weather = useSelector(state => state.weather)
    const location = useSelector(state => state.location)

    const API_KEY = '60a45a57640d5da19c4a86699363c8f9'
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location},us&appid=${API_KEY}&units=imperial`

    const handleSubmit = async e => {
        e.preventDefault()
        getWeather()
    }

    const getWeather = async () => {
        try {
            const result = await fetch(API_URL)
            const json = await result.json()
            dispatch({ type: 'SET_WEATHER', payload: json })
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className='search'>
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Search by City or Zip Code'
                    onChange={e =>
                        dispatch({
                            type: 'SET_LOCATION',
                            payload: e.target.value,
                        })
                    }
                />
                <button disabled={location.length > 3 ? false : true}>
                    <FontAwesomeIcon icon='magnifying-glass' />
                </button>
            </form>
        </div>
    )
}

export default Search
