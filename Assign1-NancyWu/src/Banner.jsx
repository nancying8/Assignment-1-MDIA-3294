import React from "react"; // import React to use JSX and component features 
import bannerImg from "./assets/banner.jpeg" // import banner image from assests to display in this component 


// add data for this component "Banner" 
// apply tailwind css into each section instead using css external 
// on <img scr={bannerImg}/>, the variable is calling on "import banner from the import assets banner.jpeg"
function Banner () {
    return (
        <div className="relative text-center">
            <img className="relative p-2" src={bannerImg} />
            <div className="absolute z-10 left-5 top-5 w-full ">
            <h1 className="font-bold text-4xl mt-5">Hi !!! I am Muffin</h1>
            <p className="font-semibold text-2xl mt-6 ">This is one of my favourite position.</p>
            </div>
        </ div>
        
    );
}

// export Banner components to used on App.jsx
export default Banner;