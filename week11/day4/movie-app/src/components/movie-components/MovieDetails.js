import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <div className='subtitle'>
                <div className='release-date'>{selectedMovie.Year}</div>
                <div className='age-rating'>{selectedMovie.Rated}</div>
                <div className='runtime'>{selectedMovie.Runtime}</div>
                <div className='rating'>
                    <FontAwesomeIcon icon='fa-solid fa-star' />
                    {selectedMovie.imdbRating}/10
                </div>
            </div>
            <div className='content'>
                <div className='poster'>
                    <img src={selectedMovie.Poster} alt='' />
                </div>
                <div className='large-details'>
                    <div className='genre'>{selectedMovie.Genre}</div>
                    <div className='synopsis'>{selectedMovie.Plot}</div>
                    <div className='director'>
                        Director: {selectedMovie.Director}
                    </div>
                    <div className='actors'>Actors: {selectedMovie.Actors}</div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
