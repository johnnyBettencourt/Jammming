import { useCallback, useState } from "react";

function SearchBar({ onSearch }) {
    const [term, setTerm] = useState('');

    function handleChange(e){
        setTerm(e.target.value);
        e.preventDefault();
    }
    const handleSubmit = useCallback(() => {
        onSearch(term);
    }, [onSearch, term])

    return(
        <>
            <form
                onSubmit={handleSubmit}
            >
                <input
                    onChange={handleChange}
                    value={term}
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