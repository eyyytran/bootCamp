import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'

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
                <TextField
                    id='outline-basic'
                    variant='outlined'
                    label='Search Movies'
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                />
                <Button
                    variant='contained'
                    type='submit'
                    onClick={handleSearchClick}
                >
                    Search
                </Button>
            </form>
        </div>
    )
}

export default Searchbar
