import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Pagination from '../../components/Pagination/Pagination';
import CharacterList from '../../components/CharacterList/CharacterList';
import './Characters.css';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); 
  const charactersPerPage = 10;

  useEffect(() => {
    setLoading(true);
    fetch('https://apisimpsons.fly.dev/api/personajes?limit=635&page=1')
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.docs);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
        setLoading(false);
      });
  }, []);

    //! 1️⃣ Filtrar personajes según el buscador
      const filteredCharacters = characters.filter((character) =>
        character.Nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );

    //! 2️⃣ Obtener personajes de la página actual
      const indexOfLastCharacter = currentPage * charactersPerPage;
      const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
      const currentCharacters = filteredCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);

      return (
        <div className="characters">
          <div className="logo-search">
            <img src="/assets/logo.svg" className="logo"></img>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          <CharacterList characters={currentCharacters} />
          {!loading && filteredCharacters.length > 0 && (
            <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={Math.ceil(filteredCharacters.length / charactersPerPage)}
          />
          )}
        </div>
      );
};

export default Characters;