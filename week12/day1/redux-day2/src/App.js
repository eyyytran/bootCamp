import { useSelector } from 'react-redux'
import Search from './components/Search'
import WeatherCard from './components/WeatherCard'
import './App.css'

const App = () => {
    const weather = useSelector(state => state.weather)
    return (
        <div className='App'>
            <Search />
            <div className='card-container'>
                {weather.map(weather => {
                    return <WeatherCard weather={weather} />
                })}
            </div>
        </div>
    )
}

export default App
