import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = ({ setSelectedMovie, selectedMovie }) => {
    let params = useParams()
    console.log(typeof params.movieId)

    useEffect(() => {
        const getMovie = async movieID => {
            try {
                const result = await fetch(
                    `http://www.omdbapi.com/?i=${movieID}&apikey=c3587df3`
                )
                const json = await result.json()
                setSelectedMovie(json)
                console.log('useEffect initiated')
            } catch (error) {
                console.error(error)
            }
        }
        getMovie(params.movieId)
    }, [])

    return (
        <div className='details'>
            <div className='title'>{selectedMovie.Title}</div>
            <div className='small-details'>
                <div className='release-date'>{selectedMovie.Year}</div>
                <div className='runtime'>{selectedMovie.Runtime}</div>
            </div>
            <div className='poster'>
                <img src={selectedMovie.Poster} alt='' />
            </div>
            <div className='large-details'>
                <div className='rating'>
                    IMDB Rating: {selectedMovie.imdbRating}
                </div>
                <div className='synopsis'>Synopsis: {selectedMovie.Plot}</div>
            </div>
        </div>
    )
}

export default MovieDetails
