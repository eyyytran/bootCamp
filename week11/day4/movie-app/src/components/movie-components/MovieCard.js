import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movie }) => {
    const navigate = useNavigate()
    const handleClick = () => {
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
