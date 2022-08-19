import React from 'react'
import MovieCard from './MovieCard'

const MovieContainer = ({ movieList }) => {
    console.log(movieList)
    return (
        <div className='movie-container'>
            {movieList.map(movie => {
                return <MovieCard movie={movie} />
            })}
        </div>
    )
}

export default MovieContainer
