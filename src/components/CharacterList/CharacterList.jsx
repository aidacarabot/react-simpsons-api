//! Recibe la lista de personajes y renderiza cada uno usando CharacterCard.

import React from 'react'
import CharacterCard from '../CharacterCard/CharacterCard'
import './CharacterList.css'

const CharacterList = ({ characters, loading }) => {
  return (
    <div className='character-list'>
      {loading ? (
        <p>Cargando personajes...</p>
      ) : characters.length > 0 ? (
        characters.map((character) => (
          <CharacterCard key={character._id} character={character} />
        ))
      ) : (
        <p>No se ha podido encontrar el personaje.</p>
      )}
    </div>
  )
}

export default CharacterList
