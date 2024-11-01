import React from "react"; // import React to use JSX and component features
import Facebook from "./assets/facebook.png" // import banner image from assests to display in this component 
import Instagram from "./assets/instagram.png" // import banner image from assests to display in this component 
import Youtube from "./assets/tiktok.png" // import banner image from assests to display in this component 
import Tiktok from "./assets/youtube.png" // import banner image from assests to display in this component 

// add data for this component "Footer"
//similar to the component "Header" adding logo, and nav bar
// apply tailwind css into each section instead using css external 
// add logo calls "Dogz" with specific size and colours
//and navigation bar to navigate on About Us and Contact Us
function Footer () {
    return (
        <nav className=" font-bold p-4">
        <div className="flex justify-between items-center">
            <div className="text-center text-5xl text-black ml-6 cursor-pointer "> <a href="#">DogZ</a></div>
            <p>&copy; 2024 DogZ Updates. All rights reserved.</p>
                <img className="max-w-8" src={Facebook}/>
                <img className="max-w-8"  src={Instagram}/>
                <img className="max-w-8"  src={Youtube}/>
                <img className="max-w-8" src={Tiktok}/>
        </div>
    </nav>

    );
}


// export Footer component to used on App.jsx
export default Footer;
