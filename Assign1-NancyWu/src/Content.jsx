import React from "react"; // import React to use JSX and component features
import Dogs from "./assets/dogs.jpeg" // Import dog image from assests to display in this component 


// add data for this component "content"
// apply tailwind css into each section instead using css external 
// on <img scr={Dogs}/> Dogs, the variable is calling on "import Dogs from the import assets dogs.jpeg"
function Content (){
    return (
        <>
        <div className="bg-black w-full h-64 content-center">
            <p className="text-white font-bold text-5xl text-center">Welcome Dogz Lovers</p>
        </div>
        <div className="grid grid-cols-2 gap-10">
            <img className="m-3" src={Dogs}/>
            <div className="">
            <h3 className=" mt-6 mb-6 font-bold text-2xl justify-center tracking-wide leading-snug">Dogz</h3>
            <p className="text-lg tracking-wide leading-snug">
            Dogz is a vibrant community created by dog lovers for dog lovers, dedicated to sharing all things canine. Our platform offers valuable insights, tips, and recommendations on various dog breeds, training techniques, and health care. We curate content that helps pet owners make informed choices about nutrition, grooming, and exercise, ensuring their furry companions lead happy, healthy lives. Additionally, Dogz features product reviews and recommendations, helping you find the best toys, food, and accessories for your dogs. Whether you're a first-time puppy parent or a seasoned dog owner, our engaging articles and community discussions will keep you informed and connected to the ever-growing world of dogs. Join us at Dogz to celebrate your love for these loyal companions and enhance your dog-owning experience!</p>
                <button className="text-l font-bold py-2 px-2 mt-2 mb-2 text-black cursor-pointer bg-bl border border-black rounded-lg card-button hover:bg-black hover:text-white">Read more</button>
            </div>
        </div>
    </>

    );
}

// export Content component to used on App.jsx
export default Content;
