import React, { useState } from "react";

function SearchBar() {
    const [userInput, setUserInput] = useState('');

    function handleChange(e){
        setUserInput(e.target.value)
    }

    return(
        <>
            <form>
                <input
                    onChange={handleChange}
                    value={userInput}
                    type="text"
                    id="search"
                />
            </form>
        </>
        
    );
}

export default SearchBar;