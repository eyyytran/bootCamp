import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const MovieCard = () => {
    const navigate = useNavigate()
    const navigateToDetails = () => {
        navigate('movies/dummyRoute')
    }
    return (
        <div onClick={navigateToDetails}>
            MovieCard
            <Outlet />
        </div>
    )
}

export default MovieCard
