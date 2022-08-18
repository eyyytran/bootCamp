import React from 'react'
import MovieCard from './MovieCard'

const MovieContainer = ({ movieList, setSelectedMovie }) => {
    console.log(movieList)
    return (
        <div>
            {movieList.map(movie => {
                return (
                    <MovieCard
                        movie={movie}
                        setSelectedMovie={setSelectedMovie}
                    />
                )
            })}
        </div>
    )
}

export default MovieContainer
