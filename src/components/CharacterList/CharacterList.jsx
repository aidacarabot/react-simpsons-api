//! Recibe la lista de personajes y renderiza cada uno usando CharacterCard.

import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import './CharacterList.css';

const CharacterList = ({ characters }) => {
  return (
    <div className="character-list">
      {characters.length > 0 ? (
        characters.map((character) => <CharacterCard key={character._id} character={character} />)
      ) : (
        <p>No se encontraron personajes</p>
      )}
    </div>
  );
};

export default CharacterList;