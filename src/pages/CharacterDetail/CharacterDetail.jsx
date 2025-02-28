import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './CharacterDetail.css'

const CharacterDetail = () => {
  const { id } = useParams() // Obtiene el ID del personaje desde la URL
  const navigate = useNavigate()
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null) // Resetear el error al iniciar la carga
    fetch('https://apisimpsons.fly.dev/api/personajes?limit=635&page=1') // Obtiene todos los personajes
      .then((response) => response.json())
      .then((data) => {
        const foundCharacter = data.docs.find((char) => char._id === id) // Busca el personaje por ID
        if (foundCharacter) {
          setCharacter(foundCharacter)
        } else {
          setError('No se encontró el personaje.')
        }
        setLoading(false)
      })
      .catch((error) => {
        setError('Error al cargar los datos.')
        setLoading(false)
      })
  }, [id])

  return (
    <section className='character-detail'>
      <button className='back-button' onClick={() => navigate(-1)}>
        X
      </button>

      {loading && <p>Cargando personaje...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && character && (
        <>
          <article className='character-container'>
            <img src={character.Imagen} alt={character.Nombre} />
            <div className='character-info'>
              <h1>{character.Nombre}</h1>
              <p>
                <strong>Ocupación |</strong>{' '}
                {character.Ocupacion || 'Desconocida'}
              </p>
              <p>
                <strong>Estado |</strong> {character.Estado || 'No disponible'}
              </p>
              <p>
                <strong>Género |</strong>{' '}
                {character.Genero || 'No especificado'}
              </p>
              <p>{character.Historia || 'No disponible'}</p>
            </div>
          </article>
        </>
      )}
    </section>
  )
}

export default CharacterDetail
