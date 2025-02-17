import React, { useEffect, useState } from 'react';
import './CharacterDetail.css';
import { useNavigate, useParams } from 'react-router-dom';

const CharacterDetail = () => {
  const { id } = useParams(); // 📌 Obtiene el ID de la URL
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("🔎 ID recibido en useParams:", id); // 🟢 Verificar si el ID está llegando

  useEffect(() => {
    if (!id) {
      setError("No se proporcionó un ID válido.");
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch('https://apisimpsons.fly.dev/api/personajes?limit=635&page=1')
      .then((response) => response.json())
      .then((data) => {
        console.log("📌 Lista completa de personajes recibida:", data.docs); // 🟢 Verifica si la API devuelve personajes

        const foundCharacter = data.docs.find((char) => char._id === id);
        if (foundCharacter) {
          setCharacter(foundCharacter);
        } else {
          setError("No se encontró el personaje.");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("🚨 Error al obtener los personajes:", error);
        setError("Error al obtener los personajes.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando personaje...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="character-detail">
      <button onClick={() => navigate(-1)}>Volver</button>

      {character && (
        <>
          <div className="img-container">
            <img src={character.Imagen} alt={character.Nombre} />
          </div>
          <h1>{character.Nombre}</h1>
          <p><strong>Ocupación:</strong> {character.Ocupacion || "Desconocida"}</p>
          <p><strong>Estado:</strong> {character.Estado || "No disponible"}</p>
          <p><strong>Género:</strong> {character.Genero || "No especificado"}</p>
          <p><strong>Historia:</strong> {character.Historia || "No disponible"}</p>
        </>
      )}
    </div>
  );
};

export default CharacterDetail;