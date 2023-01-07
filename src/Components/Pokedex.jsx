import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Pagination from './Pagination'
import PokemonCard from './PokemonCard'
import SelectBytype from './SelectBytype'

const Pokedex = () => {

  const userName = useSelector(state => state.userName)

  const [pokemonlist, setPokemonlist] = useState()
  const [selectedtype, setSelectedtype] = useState("AllTypes")
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(100)

  useEffect(() => {

    if (selectedtype !== "AllTypes") {
      axios.get(selectedtype)
        .then(res => {
          const results = res.data.pokemon.map(e => e.pokemon)
          setPokemonlist(results)
        })
        .catch(err => console.log(err))
    } else {
      const url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126`

      axios.get(url)
        .then(res => setPokemonlist(res.data.results))
        .catch(err => console.log(err))

    }


  }, [selectedtype])

  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
  }

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPost = pokemonlist?.slice(firstPostIndex, lastPostIndex)
  const totalPosts = pokemonlist?.length

  return (
    <div className='pokedex'>
      <header className='pokedex-header'>
        <p className='pokedex-header-message'>Welcome: <span>{userName}</span></p>
        <form onSubmit={submit} className='pokedex-header-input-and-select'>
          <input className='pokedex-header-input' type="text" placeholder='Name your favorite Pokemon here.!' id='search' />
          <button className='boton'>Click here to find it.!</button>
          <div className='pokedex-header-span-select'>
            <span>or try by type: </span>
            <SelectBytype setSelectedtype={setSelectedtype} selectedtype={selectedtype} />
          </div>
        </form>
      </header>

      <div className='pokedex-body'>

      <div className="dos">
            <div className='poke-card-wrapper'>
              {
                currentPost?.map(pokemon => (
                  <PokemonCard key={pokemon.url} pokemon={pokemon} selectedtype={selectedtype} />
                ))
              }

            </div>
          </div>
          
        <div className="uno">
          <img className='pokeDeck' src="src\assets\pokedex.png" alt="" />
        </div>

        <div className='pagination-wrapper'>
          <Pagination totalPosts={totalPosts} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </div>
      </div>
    </div>
  )
}

export default Pokedex