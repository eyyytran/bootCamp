import React, { useEffect, useState } from 'react'

export const PokemonCard = ({ pokemon, deletePokemon }) => {
    const [frontImgURL, setFrontImgURL] = useState('')
    const [backImgURL, setBackImgURL] = useState('')
    const [imageSide, setImageSide] = useState('')

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

    useEffect(() => {
        setImageSide(frontImgURL)
    }, [frontImgURL])

    const handleChange = () => {
        if (imageSide === frontImgURL) {
            setImageSide(backImgURL)
            return
        }
        setImageSide(frontImgURL)
    }

    return (
        <div className='pokemon-card'>
            <div className='pokemon-name'>{pokemon.name}</div>
            <div className='pokemon-image'>
                <img src={imageSide} alt='' onClick={handleChange} />
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
