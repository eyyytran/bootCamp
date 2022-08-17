import React, { useEffect, useState } from 'react'

export const PokemonCard = ({ pokemon, deletePokemon }) => {
    const [frontImgURL, setFrontImgURL] = useState('')
    const [backImgURL, setBackImgURL] = useState('')
    const [front, setFront] = useState(true)

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            )
            const json = await response.json()
            setFrontImgURL(json.sprites.front_default)
            setBackImgURL(json.sprites.back_default)
        }
        fetchPokemon()
    }, [pokemon.name])

    const handleChange = () => {
        setFront(!front)
    }

    return (
        <div className='pokemon-card'>
            <div className='pokemon-name'>{pokemon.name}</div>
            <div className='pokemon-image'>
                <img
                    src={front ? frontImgURL : backImgURL}
                    alt=''
                    onClick={handleChange}
                />
            </div>
            <div className='button-container'>
                <button
                    type='submit'
                    onClick={() => deletePokemon(pokemon.name)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}
