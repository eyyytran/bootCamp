import React from 'react'

const MovieDetails = ({ selectedMovie }) => {
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
