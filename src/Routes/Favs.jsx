import React from "react";
import Card from "../Components/Card";
import { useFeatured } from '../Components/utils/FeaturedContext';

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useFeatured();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.featuredCards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            username={card.username}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;

