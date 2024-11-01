import React, { useState } from "react"; // import React to use JSX and component features
import Card from "./Card"; // import the component "Card" where it has the dogs' details
import Header from "./Header"; // import the component "Header" where it is locate on top of the page with logo and nav bar
import Banner from "./Banner"; // import the component "Banner" first content on the page with little introduction
import Content from "./Content"; // import the component "Content" it has a little introduction of the page
import Footer from "./Footer"; // import the compoenent "footer" it similar to "Header" has same info and locate at the bottom of the page
import info from "./data/info.json" // import data from a JSON file to be used for dog card information



function App() {

  const [cards] = useState(info); // cards state with imported info.json data, used to render card information

  const [stars, setStars] = useState([]);  // initialize stars state as an empty array to keep track of "star" dog card IDs

   // function to handle clicks on the favourite icon/button
  const handleFavClick = (cardId) => {
    // Check if the cardId is already in the stars array
    // If this is false, add the item to the 
    if(stars.includes(cardId)) {
      // If true, create a new array excluding this cardId (remove it from favorites)
      // filter = will go thorugh the favs one by one, if the equation returns false it will keep it
      //   if it is true it will removve it
      const newStars = stars.filter( (singleStar) => {
        return cardId !== singleStar;
      });
         
      setStars(newStars);

    } else {
      // ... = spread opperator, this will spread out the item 
      setStars([...stars, cardId]);
    }
  }

  return (
    // This is the order of the components are place and order to show on the page.
    //  the Header component at the top
    // the Banner component is the next one, same for Card and Footer.
    // use Tailwind to add colour, margin, size and grid to make responsive
    //  adding grid cols-1 as default size, large cols-1, mediun size md:cols-2 and small sm: cols-1 with reduce size and  organize images
    <>
    <Header />
    <Banner />
    <Content />
    <div className="bg-black min-h-screen p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold text-white m-4 md:m-9 text-center"> Weekly Contest! Vote for Your Star Dog!</h1>
      <p className="text-lg md:text-2xl font-bold text-white m-4 md:m-9 text-center">We Will Promote the Winner's Content on Our Social Media for an Entire Week.! </p>

      <div className="grid grid-cols-1 sm:grid-cols-1 m:m:grid-cols-2 lg:grid-cols-2 gap-4">
        { cards.map( (singleCard) => {

          return (
            <Card key={singleCard.id} card={singleCard} star={stars} handleFavClick={handleFavClick} /> 
          );

        })}
      </div>
    </div>
    <Footer />
    </>
  )
}

// export App components to used on Main.jsx
export default App
