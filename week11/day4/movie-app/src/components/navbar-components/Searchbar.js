import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Searchbar = ({ setMovieList }) => {
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState('')

    const handleSearchClick = async e => {
        try {
            e.preventDefault()
            const results = await fetch(
                `http://www.omdbapi.com/?s=${searchValue}&apikey=c3587df3`
            )
            const json = await results.json()
            setMovieList(json.Search)
            setSearchValue('')
            navigate('movies')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='searchbar'>
            <form>
                <input
                    type='text'
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                />
                <button type='submit' onClick={handleSearchClick}>
                    Search
                </button>
            </form>
        </div>
    )
}

export default Searchbar
