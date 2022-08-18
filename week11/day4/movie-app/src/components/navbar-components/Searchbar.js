import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Searchbar = ({ setMovieList }) => {
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState('')

    const handleSearchClick = async e => {
        try {
            e.preventDefault()
            const results = await fetch(
                'http://www.omdbapi.com/?s=toy&3896198&apikey=c3587df3'
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
        <div>
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
