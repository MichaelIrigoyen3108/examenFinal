import React, { useState } from "react";
import { useFeatured } from '../Components/utils/FeaturedContext';




const Card = ({ name, username, id }) => {
  const [isFav, setIsFav] = useState(false);
  const { state, dispatch } = useFeatured();

  const addFav = () => {
    setIsFav(!isFav);
    if (!isFav) {
      dispatch({ type: 'ADD_FEATURED', payload: { name, username, id } });
    } else {
      dispatch({ type: 'REMOVE_FEATURED', payload: { id } });
    }
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{username}</p>
      <p>{id}</p>
      {/* <img src="../images/doctor.jpg" alt="imagen doc" /> */}

      <a href={`/detail/${id}`}>Ver detalles</a>

      <button onClick={addFav} className="favButton">
        {isFav ? "Remove fav" : "Add fav"}
      </button>
    </div>
  );
};

export default Card;


