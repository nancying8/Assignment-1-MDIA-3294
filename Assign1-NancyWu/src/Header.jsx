import React from "react"; // import React to use JSX and component features

// add data for this component "Header"
// apply tailwind css into each section instead using css external 
// add logo calls "Dogz" with specific size and colours
//and navigation bar to navigate on About Us and Contact Us
function Header (){
    return(
        <nav className=" font-bold p-4">
            <div className="flex justify-between items-center">
                <div className="text-center text-6xl text-black ml-6 cursor-pointer "> <a href="#">DogZ</a></div>
                <ul>
                    <li className="list-none inline-block mr-4 justify-start text-black cursor-pointer"><a href="#" className="rounded-md p-2.5 text-black hover:bg-black hover:text-white">Home</a></li>
                    <li className="list-none inline-block mr-4 justify-start text-black cursor-pointer"><a href="#" className="rounded-md p-2.5 text-black hover:bg-black hover:text-white">About Us</a></li>
                    <li className="list-none inline-block mr-4 justify-start text-black cursor-pointer"><a href="#" className="rounded-md p-2.5 text-black hover:bg-black hover:text-white">Contact Us</a></li>
                </ul>
            </div>
        </nav>
);


}

// export Header components to used on App.jsx
export default Header;