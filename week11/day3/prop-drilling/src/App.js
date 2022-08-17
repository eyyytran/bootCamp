import './App.css'
import { useEffect, useState } from 'react'
import { PokemonCard } from './components/PokemonCard'

function App() {
    const [pokemonList, setPokemonList] = useState([])

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

    return (
        <div className='App'>
            <div className='header'>
                <h1>Twenty Pokemon</h1>
            </div>
            <div className='card-container'>
                {pokemonList.map(pokemon => (
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
