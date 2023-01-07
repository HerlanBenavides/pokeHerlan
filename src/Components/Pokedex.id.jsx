import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Pokemon404 from './Pokemon404'
import Loading from './Loading'

const Pokedexid = () => {

  const { id } = useParams()

  const [poke, setPoke] = useState()
  const [notfound, setNotfound] = useState(false)
  const [background, setBackground] = useState()
  const navigate = useNavigate()

  const idlower = id.toLowerCase()

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${idlower}/`
    axios.get(url)
      .then(res => setPoke(res.data))
      .catch(err => {
        console.log(err)
        setNotfound(true)
      })

  }, [])





  const handleReturn = () => {
    navigate(`/pokedex`)
  }

  if (notfound) {
    return <Pokemon404 />
  }

  return (
    <article className='pokedex-id-wrapper' style={{ background: `${background}` }}>

      <div className="portada">
        <button className='pokedex-id-wrapper-button shake-horizontal' onClick={handleReturn}>Click here to go back.!</button>
        <div className='pokedex-id-wrapper-name-and-img'>
          {!poke ? <Loading /> :
            <>
              <img className='pokedex-id-wrapper-img' src={poke?.sprites.other.dream_world.front_default} alt="" />
              <h1 className='pokedex-id-wrapper-name'>{`${poke?.name}`}</h1>
            </>
          }
        </div>
      </div>



      <div className='pokedex-id-wrapper-id-type-abilities-wrapper'>
        {
          !poke ? <Loading /> : <h4 className='pokedex-id-wrapper-id'>{` id :${poke?.id}`}</h4>
        }
        <div className='pokedex-id-wrapper-type-wrapper'>
          {
            !poke ? <Loading /> : <>
              <h4 className='pokedex-id-wrapper-type-tittle'>Type</h4>
              <div className='pokedex-id-wrapper-type-wrapper-types-wrapper'>
                {
                  poke?.types.map(type => (
                    <li>{`${type.type.name}`}</li>
                  ))
                }
              </div>
            </>
          }
        </div>
        <div className='pokedex-id-wrapper-abilities-wrapper'>
          {
            !poke ? <Loading /> : <>
              <h4 className='pokedex-id-wrapper-abilities-wrapper-title'>Abilities</h4>
              <div className='pokedex-id-wrapper-abilities-wrapper-ability-wrapper'>
                {
                  poke?.abilities.map(abilitie => (
                    <li key={abilitie.ability.name}>{abilitie.ability.name}</li>
                  ))
                }

              </div>
            </>
          }

        </div>

      </div>
      <div className='pokedex-id-wrapper-moves-wrapper'>
        {
          !poke ? <Loading /> : <>
            <h4 className='pokedex-id-wrapper-moves-wrapper-title'>Moves</h4>
            <div className='pokedex-id-wrapper-moves-wrapper-move-wrapper'>
              {
                poke?.moves.map(move => (
                  <li key={move.move.name}>{move.move.name}</li>
                ))
              }

            </div>
          </>
        }
      </div>

    </article>

  )
}

export default Pokedexid