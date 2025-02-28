//! Representa un solo personaje y redirige a su página de detalles.

import React from 'react';
import './CharacterCard.css';
import { Link } from 'react-router-dom';

const CharacterCard = ({ character }) => {
  return (
    <Link to={`/character/${character._id}`} className="character-card">
      <article className="card-container">
        <h2>{character.Nombre}</h2>
        <img src={character.Imagen} alt={character.Nombre} />
      </article>
    </Link>
  );
};

export default CharacterCard