import { useCallback, useState } from "react";

const SearchBar = ({ onSearch }) => {
    // State variable to store the search term
    const [term, setTerm] = useState("");

    // Handle the change in the search term
    const handleTermChange = useCallback((e) => {
        setTerm(e.target.value);
        e.preventDefault();
    }, []);

    // Perform the search when the user submits the form
    const search = useCallback((e) => {
        onSearch(term);
        e.preventDefault();
    }, [onSearch, term]);

    return (
        <div>
            <form onSubmit={search}>
                {/* Input field for the search term */}
                <input className='input' placeholder="Song" onChange={handleTermChange} />
                {/* Button to submit the search */}
                <button className="button" type="submit">
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
