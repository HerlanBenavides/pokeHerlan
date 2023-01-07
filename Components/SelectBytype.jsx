import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectBytype = ({setSelectedtype}) => {

    const [typeOptions, setTypeOptions] = useState()

    useEffect(() => {
        
        const url = `https://pokeapi.co/api/v2/type`

        axios.get(url)
            .then(res => setTypeOptions(res.data.results))
            .catch(err => console.log(err))

    }, [])

    const handleClickOnSelect = e => {
        setSelectedtype(e.target.value);
    }

    

  return (
    <select className='pokedex-header-select' onChange={handleClickOnSelect}>
        <option value="AllTypes">All Types</option>
        {
            typeOptions?.map (type => (
                <option key={type.url} value={type.url}>{`${type.name}`}</option>
            ))
        }
    </select>
  )
}

export default SelectBytype