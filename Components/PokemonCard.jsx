import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'

const PokemonCard = ({pokemon, selectedtype}) => {

    const [nameUpper, setNameUpper] = useState()

    /*Personal note: this is meant to work as a way to dig deaper into the url to pull out 
    every pokemons info. Pokelist is the total number, pokecard is the specs of each one*/ 

    const [pokemonCardInfo, setPokemonCardInfo] = useState()
    

    


    useEffect(() => {
      
        const url = `${pokemon.url}`
        axios.get(url)
            .then(res => setPokemonCardInfo(res.data))
            .catch(err => console.log(err))
    }, [])

    

    useEffect(() => {
        setNameUpper(pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()) 

    }, [])

    /*console.log(pokemonCardInfo.id);*/

    const navigate = useNavigate()

    const handleCLick = (e) => {
      navigate(`/pokedex/${pokemonCardInfo?.id}/`)
      
    }
    
    

  return (
    <article onClick={handleCLick} className='pokecard'> 
        {
          pokemonCardInfo ?   <> 
            <img className='pokecard-pic' src={`${pokemonCardInfo?.sprites.other[`official-artwork`].front_default}`} alt="Loading..." /> 
            <h1 className='pokecard-tittle'>{`${nameUpper}`}</h1>
          </>
            :
            <Loading/>
          
        }
        
    </article>
    
  )
}

export default PokemonCard