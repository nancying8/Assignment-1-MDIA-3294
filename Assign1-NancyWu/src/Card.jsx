import React, { useState } from "react"; //import React to use JSX and component features
import IonIcon from "@reacticons/ionicons"; // import icon from IonIcon to use "start" on the favourite button

function Card({ card, star, handleFavClick }) {
  // Initialize the favorite status and count
  const [isFavorite, setIsFavorite] = useState(star.includes(card.id)); // checks if card is already favoruited
  const [count, setCount] = useState(isFavorite ? 1 : 0); // start with 1 if it is already favourited, otherwise 0

  const handleClick = () => {
    setIsFavorite((prevFavorite) => !prevFavorite); // toggle the favourite status
    setCount((prevCount) => (isFavorite ? prevCount - 1 : prevCount + 1)); // increment or decrement the count based on favourite status
    handleFavClick(card.id); // trigger the parent function to handle favourite logic
  };

  return (
     // card layout with image and favourite button
    <div className="flex bg-white rounded-lg shadow-md overflow-hidden"> 
      <img src={card.images} className="w-72 h-full object-cover" alt={card.title} />

      <button
        className="flex absolute m-3 text-black text-3xl items-center"
        onClick={handleClick} // use the handleClick function to toggle favorite and count
      >
        {/*the star icon  */}
        {isFavorite ? <IonIcon name="star" /> : <IonIcon name="star-outline" />}
        <span className="ml-2 text-lg">{count}</span>
      </button>

      <div className="p-2">
        {/* the card title */}
        {/* using data.json and place the data to corresponde place like name, info
        colour, size, temperament on the card with the image */}
        <h3 className="font-bold text-center mt-4 text-xl">{card.title}</h3>
        
        <p> <span className="font-semibold text-lg ">Name:</span> 
        {card.name} </p>
        
        <p> <span className="font-semibold text-lg ">Age & sex:</span> 
        {card.info}</p>
        
        <p> <span className="font-semibold text-lg ">Colour:</span> 
        {card.colour}</p>
        
        <p> <span className="font-semibold text-lg ">Size:</span>  
        {card.size}</p>
        
        <p> <span class="font-semibold text-lg ">Temperament:</span> 
        {card.temperament}</p>
        
      </div>
    </div>
  );
}

// export Card components to used on APP.jsx
export default Card;

