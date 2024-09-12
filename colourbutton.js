import {useState} from 'react';


// a state is a special variable when changed, 
// it will render all the instances where it is used
// const [variable name, function that sets the variable]


function ColourButton() {
    const [colour, setColour] = useState("Red");
     return (
        <div> 
            <h2>My Favourite Colour is {colour} </h2>
            <button type="button" onClick={() => setColour("Blue")}> Click Here </button>
        </div>
    );
    
}

export default ColourButton;