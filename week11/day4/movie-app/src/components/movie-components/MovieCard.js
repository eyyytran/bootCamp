import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movie, setSelectedMovie }) => {
    const navigate = useNavigate()
    const defaultImgURL =
        'https://images.unsplash.com/photo-1583407723467-9b2d22504831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80'
    const handleClick = () => {
        navigate(`${movie.imdbID}`)
    }
    return (
        <div className='card'>
            <div className='poster' onClick={handleClick}>
                <img
                    src={movie.Poster === 'N/A' ? defaultImgURL : movie.Poster}
                    alt=''
                />
            </div>
            <div className='title'>{movie.Title}</div>
            <div className='year'>{movie.Year}</div>
        </div>
    )
}

export default MovieCard
