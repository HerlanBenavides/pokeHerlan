import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pokemon404 = () => {

    const navigate = useNavigate()

    const handleReturn = () => {
        navigate(`/pokedex`)
    }

  return (
    <div className='notfound-wrapper'>
        <img className='notfound-wrapper-img' src="../images/professor-oak.gif" alt="" />
        <h1 className='notfound-wrapper-message'>Sorry, Pokemon not found, please try again.!</h1>
        <button className='notfound-wrapper-button' onClick={handleReturn}>Click here to go back.!</button>

    </div>
  )
}

export default Pokemon404