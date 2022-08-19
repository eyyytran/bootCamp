import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import About from './components/About'
import Navbar from './components/Navbar'
import MovieContainer from './components/movie-components/MovieContainer'
import MovieDetails from './components/movie-components/MovieDetails'
import Home from './components/Home'

import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass, faStar)

function App() {
    const [movieList, setMovieList] = useState([])
    const [selectedMovie, setSelectedMovie] = useState({})
    return (
        <BrowserRouter>
            <Navbar setMovieList={setMovieList} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route
                    path='movies'
                    element={<MovieContainer movieList={movieList} />}
                />
                <Route
                    path='movies/:movieId'
                    element={
                        <MovieDetails
                            selectedMovie={selectedMovie}
                            setSelectedMovie={setSelectedMovie}
                        />
                    }
                />
                <Route
                    path='*'
                    element={
                        <main style={{ padding: '1rem' }}>
                            <p>There is nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
