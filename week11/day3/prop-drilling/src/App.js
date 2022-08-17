import './App.css'
import { useEffect, useState } from 'react'
import { PokemonCard } from './components/PokemonCard'

function App() {
    const [pokemonList, setPokemonList] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [addQuery, setAddQuery] = useState('')

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
            const json = await response.json()
            setPokemonList(json.results)
        }
        fetchPokemon()
    }, [])

    const deletePokemon = pokemonToDelete => {
        setPokemonList(
            pokemonList.filter(pokemon => {
                return pokemon.name !== pokemonToDelete
            })
        )
    }

    const handleSearch = e => {
        setSearchQuery(e.target.value.toLowerCase())
    }

    const handleAdd = e => {
        setAddQuery(e.target.value.toLowerCase())
    }

    const handleSubmitAddQuery = async e => {
        e.preventDefault()
        if (addQuery === '') return
        try {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${addQuery}`
            )
            const json = await response.json()
            const newPokemon = {
                name: json.name,
            }
            setPokemonList([newPokemon, ...pokemonList])
            setAddQuery('')
        } catch (error) {
            console.log('this pokemon was not found')
            setAddQuery('')
        }
    }

    return (
        <div className='App'>
            <div className='header'>
                <h1>Twenty Pokemon</h1>
            </div>
            <div className='nav-bar'>
                <input
                    type='text'
                    name='search'
                    placeholder='Search'
                    value={searchQuery}
                    onChange={handleSearch}
                />
                <form onSubmit={handleSubmitAddQuery}>
                    <input
                        type='text'
                        name='add'
                        placeholder='Name or Dex#'
                        value={addQuery}
                        onChange={handleAdd}
                    />
                    <button type='submit'>+</button>
                </form>
            </div>
            <div className='card-container'>
                {pokemonList
                    .filter(pokemon => pokemon.name.includes(searchQuery))
                    .map(pokemon => (
                        <PokemonCard
                            pokemon={pokemon}
                            deletePokemon={deletePokemon}
                        />
                    ))}
            </div>
        </div>
    )
}

export default App
