import './App.css'
import { useEffect, useState } from 'react'
import { PokemonCard } from './components/PokemonCard'

function App() {
    const [pokemonList, setPokemonList] = useState([])
    const [query, setQuery] = useState('')
    const [initialPokemonList, setInitialPokemonList] = useState([])

    useEffect(() => {
        if (query === '') setPokemonList(initialPokemonList)
    }, [query])

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
            const json = await response.json()
            setPokemonList(json.results)
            setInitialPokemonList(json.results)
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

    const searchPokemon = query => {
        setPokemonList(
            pokemonList.filter(pokemon => {
                return pokemon.name.includes(query)
            })
        )
    }

    const handleChange = e => {
        setQuery(e.target.value.toLowerCase())
    }

    const handleSearch = e => {
        e.preventDefault()
        if (query !== '') {
            searchPokemon(query)
        }
    }

    return (
        <div className='App'>
            <div className='header'>
                <h1>Twenty Pokemon</h1>
                <form onSubmit={handleSearch}>
                    <input
                        type='text'
                        name='user-input'
                        value={query}
                        onChange={handleChange}
                    />
                    <button type='submit'>Search</button>
                </form>
            </div>
            <div className='card-container'>
                {pokemonList
                    // .filter(pokemon => pokemon.name.includes(query))
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
