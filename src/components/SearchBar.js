
function SearchBar({ userInput, setUserInput, setSearchTerm }) {
    

    function handleChange(e){
        setUserInput(e.target.value);
        e.preventDefault();
    }
    function handleSubmit(e){
        setSearchTerm(userInput);
        setUserInput('');
        e.preventDefault();
    }

    return(
        <>
            <form
                onSubmit={handleSubmit}
            >
                <input
                    onChange={handleChange}
                    value={userInput}
                    type="text"
                    id="search"
                    placeholder="Search"
                />
                <button
                    type="submit"
                >
                    Search
                </button>
            </form>
        </>
        
    );
}

export default SearchBar;