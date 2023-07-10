
function SearchBar({ userInput, setUserInput }) {
    

    function handleChange(e){
        setUserInput(e.target.value);
        e.preventDefault();
    }

    return(
        <>
            <form>
                <input
                    onChange={handleChange}
                    value={userInput}
                    type="text"
                    id="search"
                    placeholder="Search"
                />
                <button type="submit">Search</button>
            </form>
        </>
        
    );
}

export default SearchBar;