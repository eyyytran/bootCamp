import React from 'react'
import MovieCard from './MovieCard'

const MovieContainer = ({ movieList }) => {
    console.log(movieList)
    return (
        <div>
            {movieList.map(movie => {
                return <MovieCard movie={movie} />
            })}
        </div>
    )
}

export default MovieContainer
