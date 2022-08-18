import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movie, setSelectedMovie }) => {
    const navigate = useNavigate()

    const getMovie = async movieID => {
        try {
            const result = await fetch(
                `http://www.omdbapi.com/?i=${movieID}&apikey=c3587df3`
            )
            const json = await result.json()
            setSelectedMovie(json)
        } catch (error) {
            console.error(error)
        }
    }

    const handleClick = () => {
        getMovie(movie.imdbID)
        navigate('details')
    }
    return (
        <div className='card' onClick={handleClick}>
            <div className='poster'>
                <img src={movie.Poster} alt='' />
            </div>
            <div className='title'>{movie.Title}</div>
            <div className='year'>{movie.Year}</div>
        </div>
    )
}

export default MovieCard
