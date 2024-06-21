import React, { useState } from "react";
import { useFeatured } from '../Components/utils/FeaturedContext';

const Card = ({ name, username, id }) => {
  const [isFav, setIsFav] = useState(false);
  const { state, addFeatured, removeFeatured } = useFeatured();


  useState(() => {
    const isFavorite = state.card.some(card => card.id === id);
    setIsFav(isFavorite);
  }, [state.card, id]);

  const toggleFavorite = () => {
    if (!isFav) {
      addFeatured({ id, name, username });
    } else {
      removeFeatured({ id });
    }
    setIsFav(!isFav);
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{username}</p>
      <p>{id}</p>
      <img src="../../images/doctor.jpg" alt="Imagen de doct" style={{ width: '200px' }} />

      <a href={`/detail/${id}`}>Ver detalles</a>

      <button onClick={toggleFavorite} className="favButton">
        {isFav ? "Remove fav" : "Add fav"}
      </button>
    </div>
  );
};

export default Card;



